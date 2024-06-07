import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:8000";

const Cstbutton = ({ text }) => {
  return (
    <button className="hover:shadow-xl bg-[#2196F3] mt-4 text-white font-bold py-2 px-6 rounded text-xl">
      {text}
    </button>
  );
};

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <div className="">
        <label className="flex flex-col gap-1">{label}</label>
        <input
          className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default function Register() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match",{
        position: "top-center",
      });
      return;
    }

    try {
      console.log("calling regi")
      const response = await Axios.post(`${BASE_URL}/signup`, {
        name,
        email,
        password,
      });

      const data = response?.data

      if (data?.token) {
        localStorage.setItem("token", data?.token);
      }
      
      toast.success("Registered Successfully", {
        position: "top-center",
      })
      setTimeout(() => {
        navigate('/login');
      }, 2000); 
    } catch (error) {
      const data = error.response.data
      
      toast.error(
        data?.message ||
          "Something went wrong",
        {
          position: "top-center",
        }
      );
    }
  };

  // useEffect(() => {
  //   Axios.get(`${BASE_URL}/users`).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className="flex justify-center items-center md:h-screen p-4">
      <div className="shadow-2xl border hover:border-blue-500 p-5 md:p-10 rounded-md flex-col flex md:flex-row gap-14">
        <div>
          <h1 className="font-bold text-3xl">Register!</h1>
          <form onSubmit={handleRegister}>
            <div className="text-start flex flex-col gap-4">
              <CustomInput
                label="Name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CustomInput
                label="Email"
                type="email"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CustomInput
                label="Confirm Password"
                type="password"
                placeholder="Re-Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            <Cstbutton text="Sign Up" />
          </form>
          <p className="py-4">
            Already Registered? <Link to="/login">Login!</Link>
          </p>
        </div>
        <div className="hidden md:flex items-center max-w-[300px] w-full md:w-[300px] h-200px]">
          <img src="./images/img8.jpg" className="rounded-lg" alt="wg" />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
