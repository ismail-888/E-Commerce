const userModel = require("../../models/userModel");

const userDetailsController = async (req, res) => {
  try {
    console.log("user id", req.userId);
    const user = await userModel.findById(req.userId);
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User details",
    });

    console.log("user", user);
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = userDetailsController;
