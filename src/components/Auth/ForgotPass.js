import React, { useState } from "react";
import { forgotPassword } from "../api/user";
import { toast, ToastContainer } from "react-toastify";

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

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <label className="flex flex-col gap-2">{label}</label>
      <input
        className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3 w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await forgotPassword(email);
      setMessage(response.message);
      toast.success(response.message || "Password Reset Link sent to Your Mail!", {
        position: "top-center",
      });
    } catch (err) {
      setError(err.message || "An error occurred");
      toast.error(err.message || "An error occurred", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center w-[380px] h-[230px] lg:w-[600px] lg:h-[350px] shadow-xl rounded-xl px-4 flex flex-col justify-center hover:border hover:border-blue-500">
        <form onSubmit={handleForgotPassword}>
          <div className="flex justify-center items-center gap-2">
            <div>
              <h1 className="text-base lg:text-lg font-monserrat font-semibold mb-4">
                Enter your Email to Reset Your Password!
              </h1>
              <CustomInput
                type="email"
                placeholder="Enter Your Existing Email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Cstbutton text="Send" disabled={isLoading} />
              {message && <p className="text-green-500 mt-4">{message}</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
            <div className="w-[300px] hidden lg:block">
              <img src="./images/forgot.jpg" alt="forgot_image" />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
