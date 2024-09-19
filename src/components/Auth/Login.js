import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash,FaEnvelope, FaLock } from "react-icons/fa";
import { getMe } from "../api/user";
import { useAppState } from "../../utils/appState";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:8000";

const Cstbutton = ({ text, disabled }) => {
  return (
    <button
      type="submit"
      className={`hover:shadow-xl mt-4 text-white font-bold py-2 px-6 rounded text-xl ${
        disabled ? "bg-gray-400" : "bg-[#2196F3]"
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

const CustomInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  toggleVisibility,
  isPassword,
  icon
}) => {
  return (
    <div className="relative">
      <label className="flex flex-col gap-1">{label}</label>
      <div className="relative">
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
            {type === "password" ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useAppState();
  const navigate = useNavigate();
 

  useEffect(() => {
    const isFormValid = validateEmail(email) && password.length > 0;
    setIsFormValid(isFormValid);
  }, [email, password]);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return re.test(String(email).toLowerCase());
  };

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
    if (value.length === 0) {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!isFormValid) {
      toast.error("Please fill out the form correctly", {
        position: "top-center",
      });
      return;
    }
    try {
      const response = await Axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      const data = response?.data;
      if (data?.token) {
        localStorage.setItem("token", data?.token);
      }
      toast.success("Login Successfully", {
        position: "top-center",
      });
      await fetchProfile();
      navigate("/home");
    } catch (error) {
      const data = error?.response?.data;
      toast.error(data?.message || "Something went wrong", {
        position: "top-center",
      });
    }
  };


  async function fetchProfile() {
    const data = await getMe();
    if (data) {
      setUser(data?.user);
    }
  }

  return (
    <div className="flex justify-center items-center md:h-screen p-4">
      <div className="shadow-2xl border hover:border-blue-500 p-5 md:p-10 rounded-md flex-col flex md:flex-row gap-14">
        <div>
          <h1 className="font-bold text-3xl">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="text-start flex flex-col gap-4">
              <CustomInput
                label="Email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                icon={<FaEnvelope />}
              />
              <CustomInput
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                toggleVisibility={() => setShowPassword(!showPassword)}
                isPassword={true}
                icon={<FaLock />}
              />
            </div>
            <Cstbutton text="Sign In" disabled={!isFormValid} />
          </form>
          <div className="py-4">
          <p className="py-2 underline text-blue-500"> <Link to="/forgot-password">Forgot Password?</Link></p>
          <hr/>
            <p className="py-2" >
              Not Registered? <Link to="/register" className="underline text-blue-500" >Register Now!</Link>
            </p>
           
          </div>

        </div>
        <div className="hidden md:flex items-center max-w-[270px] w-full md:w-[200px]">
          <img
            src="/images/img6.jpg"
            className="rounded-lg flex justify-center items-center"
            alt="wg"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
