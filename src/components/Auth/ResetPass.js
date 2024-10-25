import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../api/user';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function ResetPassword() {
  const { token } = useParams(); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [passwordMismatchError, setPasswordMismatchError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLinkExpired, setIsLinkExpired] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("Password must contain at least one special character (!@#$%^&*).");
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
    const errors = validatePassword(password);
    setPasswordErrors(errors);

    if (password !== confirmPassword) {
      setPasswordMismatchError("Passwords do not match");
    } else {
      setPasswordMismatchError("");
    }

    const isValid = errors.length === 0 && password === confirmPassword;
    setIsFormValid(isValid);
  }, [password, confirmPassword]);

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    if (!isFormValid) {
      toast.error("Please fill out the fields correctly", {
        position: "top-center",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await resetPassword(token, password);
      if (response.success) {
        setMessage("Password has been reset successfully.");
        toast.success("Password has been reset successfully.", {
          position: "top-center",
        });
        setTimeout(() => navigate('/login'), 3000);
      } else {
        if (response.error === "TokenExpired") {
          setIsLinkExpired(true);
        } else {
          setError(response.message || "An error occurred. Please try again.");
        }
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred. Please try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center w-[380px] h-[380px] lg:w-[600px] lg:h-[350px] shadow-xl rounded-xl px-4 flex flex-col justify-center hover:border hover:border-blue-500">
        {isLinkExpired ? (
          <h1 className="text-red-500 text-xl lg:text-2xl font-bold">Link Expired!</h1>
        ) : (
          <form onSubmit={handleResetPassword}>
            <h1 className="text-base lg:text-lg font-monserrat font-semibold mb-4">
              Reset Your Password
            </h1>
            <div className="mb-4 relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter New Password"
                value={password}
                onChange={handlePasswordChange}
                className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3 w-full"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
              {passwordErrors.length > 0 && (
                <div className="text-red-500 text-[12px] md:text-[15px] flex text-start flex-col">
                  {passwordErrors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3 w-full"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {isConfirmPasswordVisible ? < FaEye/> : <FaEyeSlash />}
              </span>
              {passwordMismatchError && (
                <div className="text-red-500 text-[12px] md:text-[15px] text-start">
                  <p>{passwordMismatchError}</p>
                </div>
              )}
            </div>
            <button
              type="submit"
              className={`hover:shadow-xl mt-4 text-white font-bold py-2 px-6 rounded text-xl ${
                isLoading || !isFormValid ? "bg-gray-400" : "bg-[#2196F3]"
              }`}
              disabled={isLoading || !isFormValid}
            >
              Reset Password
            </button>
            {message && <p className="text-green-500 mt-4">{message}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        )}
      </div>
      <ToastContainer/>
    </div>
  );
}
