import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser, } from 'react-icons/fa';


const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:8000";

const Cstbutton = ({ text, disabled }) => {
  return (
    <button 
      className={`hover:shadow-xl mt-4 text-white font-bold py-2 px-6 rounded text-xl ${disabled ? 'bg-gray-400' : 'bg-[#2196F3]'}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

const CustomInput = ({ label, type, placeholder, value, onChange, toggleVisibility, isPassword, icon }) => {
  return (
    <div className="relative">
      <label className="flex flex-col gap-1">{label}</label>
      <div className='relative'>
      <span className="absolute left-4 top-4 text-gray-500">{icon}</span>
      <input
        className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3 w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
  
      />
      {isPassword && (
        <span 
          className="absolute right-4 top-4 cursor-pointer text-gray-500"
          onClick={toggleVisibility}
        >
          {type === 'password' ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
      </div>
     
    </div>
  );
};

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [passwordMismatchError, setPasswordMismatchError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const errors = [];
  
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("Password must contain at lease one (!@#$%^&*).");
    }
    if (!/[a-zA-Z]/.test(password)) {
      errors.push("Password must contain at least one letter.");
    }
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
  
    return errors;
  };

  useEffect(() => {
    const isFormValid = name && validateEmail(email) && validatePassword(password).length === 0 && (password === confirmPassword);
    setIsFormValid(isFormValid);
    if (password !== confirmPassword) {
      setPasswordMismatchError("Passwords do not match");
    } else {
      setPasswordMismatchError("");
    }
  }, [name, email, password, confirmPassword]);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    const errors = validatePassword(value);
    if (errors.length > 0) {
      setPasswordErrors(errors);
    } else {
      setPasswordErrors([]);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill out the form correctly", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await Axios.post(`${BASE_URL}/signup`, {
        name,
        email,
        password,
      });
      toast.alert("OTP sent  successful", {
        position: "top-center",
        });
        navigate("/verify-otp", {state: {email}});

      // const data = response?.data

      // if (data?.token) {
      //   localStorage.setItem("token", data?.token);
      // }
      
      // toast.success("Registered Successfully", {
      //   position: "top-center",
      // })
      // setTimeout(() => {
      //   navigate('/login');
      // }, 2000); 
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
                icon={<FaUser/>}
                
                
              />
              <CustomInput
                label="Email"
                type="email"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={handleEmailChange}
                icon={<FaEnvelope/>}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
              <CustomInput
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                toggleVisibility={() => setShowPassword(!showPassword)}
                isPassword={true}
                icon={<FaLock/>}
              />
              {passwordErrors.length > 0 && (
                <div className="text-red-500 text-[12px] md:text-[15px]">
                  {passwordErrors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
              <CustomInput
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                toggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
                isPassword={true}
                icon={<FaLock />}
              />
              {passwordMismatchError && <p className="text-red-500">{passwordMismatchError}</p>}
            </div>
            
            <Cstbutton text="Sign Up" disabled={!isFormValid} />
          </form>
          <p className="py-4">
            Already Registered? <Link to="/login" className='underline text-blue-500'>Login!</Link>
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
