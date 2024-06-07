import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:8000";

const Cstbutton = ({ text }) => {
  return (
    <button
      type="submit"
      className="hover:shadow-xl bg-[#2196F3] mt-4 text-white font-bold py-2 px-6 rounded text-xl"
    >
      {text}
    </button>
  );
};

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="flex flex-col gap-1">{label}</label>
      <input
        className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(()=> {

  }, [])
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(`${BASE_URL}/login`, {
        name,
        email,
        password,
      });


      const data = response?.data

      if (data?.token) {
        localStorage.setItem("token", data?.token);
      }
     
      
      toast.success("Login Successfully", {
        position: "top-center",
      })
      
      // localStorage.setItem("userEmail", email);
      // localStorage.setItem("userName", name);
      

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      const data = error?.response?.data
      
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
          <h1 className="font-bold text-3xl">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="text-start flex flex-col gap-4">
              <CustomInput
                label="Email"
                type="text"
                placeholder="Enter your email"
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
            </div>
            <Cstbutton text={"Sign In"} />
          </form>
         
          <p className="py-4">
            Not Registered? <Link to="/register">Register Now!</Link>
          </p>
        </div>
        <div className="hidden md:flex items-center max-w-[270px] w-full md:w-[200px]">
          <img
            src="/images/img6.jpg"
            className="rounded-lg flex justify-center items-center"
            alt="wg"
          />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
