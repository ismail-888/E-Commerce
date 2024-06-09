import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import  imageTobase64  from '../helper/imageTobase64';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword:"",
    profilePic:"",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadPic= async(e)=>{
    const file=e.target.files[0]

    const imagePic=await imageTobase64(file)
    setData((prev)=>{
      return{
        ...prev,
        profilePic:imagePic
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="signup">
    <div className="mx-auto container p-4">
      <div className="bg-white p-5 w-full max-w-sm mx-auto">
        <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
          <div>
          <img src={data.profilePic || loginIcons} alt="Login icons" />
          </div>
        <form>
          <label>
          <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
            Upload Photo
          </div>
            <input type='file' className='hidden' onChange={handleUploadPic}/>
          </label>
        
        </form>
        </div>

        <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>

        <div>
            <label>Name :</label>
            <div className="bg-slate-100 p-2 ">
              <input
                onChange={handleOnChange}
                name="name"
                value={data.name}
                type="text"
                placeholder="enter your name"
                required
                className="w-full h-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div >
            <label>Email :</label>
            <div className="bg-slate-100 p-2 ">
              <input
                onChange={handleOnChange}
                name="email"
                value={data.email}
                type="email"
                required
                placeholder="enter email"
                className="w-full h-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label>Password :</label>
            <div className="bg-slate-100 p-2 flex items-center">
              <input
                onChange={handleOnChange}
                name="password"
                value={data.password}
                type={showPassword ? "text" : "password"}
                placeholder="enter password"
                required
                className="w-full h-full outline-none bg-transparent"
              />
              <div
                className="cursor-pointer text-xl"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
          </div>

          <div>
            <label>Confirm Password :</label>
            <div className="bg-slate-100 p-2 flex items-center">
              <input
                onChange={handleOnChange}
                name="confirmPassword"
                value={data.confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="confirm your password"
                required
                className="w-full h-full outline-none bg-transparent"
              />
              <div
                className="cursor-pointer text-xl"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
            Sign Up
          </button>
        </form>
        <p className="my-5">
          Already have an account ?{" "}
          <Link
            to={"/login"}
            className="text-red-600 hover:underline hover:text-red-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  </section>
  )
}

export default SignUp