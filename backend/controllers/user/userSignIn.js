const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    if (!user) {
      throw new Error("User not Fount");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const tokenData = {
        _id: user.id,
        email: user.email,
      };

      const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 8,
      });
      
      const tokenOption = {
        httpOnly: true,
        secure: true,
        sameSite:"None"
      };

      res.cookie("token", token, tokenOption).json({
        message: "Login successfully",
        data: tokenData,
        success: true,
        error: false,
      });
    } else {
      throw new Error("please check password");
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userSignInController;
