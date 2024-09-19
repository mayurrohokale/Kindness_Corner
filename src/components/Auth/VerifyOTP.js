import React, { useState, useEffect } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  getMe } from "../api/user";
import { useAppState } from "../../utils/appState";
import  Axios  from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:8000";


export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const { user, setUser } = useAppState();
  const [message, setMessage] = useState("");
  // const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  // useEffect(() => {
  //   const storedEmail = user?.email;
  //   if (storedEmail) {
  //     setEmail(storedEmail);
  //   } else {
  //     toast.error("Email not found, please login again", {
  //       position: "top-center",
  //     });
  //     navigate("/login");  // Redirect to login if email is not found
  //   }
  // }, [user, navigate]);

  const handleVerify = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post(`${BASE_URL}/verify-otp`,{email, otp});
      toast.info("Successful");
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error(error.message || "Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  async function fetchProfile() {
    try {
      const data = await getMe();
      if (data) {
        setUser(data.user);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  return (
    <div className="flex justify-center items-center md:h-screen p-4">
      <div className="shadow-2xl border hover:border-blue-500 p-5 md:p-10 rounded-md flex-col flex md:flex-row gap-14">
        <div>
          <h1 className="font-bold text-3xl">OTP Verification</h1>
          <div className="text-start flex flex-col gap-4">
            <input
              className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3 w-full"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerify}
              className="hover:shadow-xl mt-4 text-white font-bold py-2 px-6 rounded text-xl bg-[#2196F3]"
            >
              Verify OTP
            </button>
          </div>
          {message && <p className="text-red-500 mt-4">{message}</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
