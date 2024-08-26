import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { resetPassword } from '../api/user';

export default function ResetPassword() {
  const { token } = useParams(); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await resetPassword(token, password);
      setMessage(response.message);
    } catch (err) {
      setError(err.message || "An error occurred");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center w-[380px] h-[230px] lg:w-[600px] lg:h-[350px] shadow-xl rounded-xl px-4 flex flex-col justify-center hover:border hover:border-blue-500">
        <form onSubmit={handleResetPassword}>
          <h1 className="text-base lg:text-lg font-monserrat font-semibold mb-4">
            Reset Your Password
          </h1>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-10 py-3 w-full"
            />
          </div>
          <button
            type="submit"
            className={`hover:shadow-xl mt-4 text-white font-bold py-2 px-6 rounded text-xl ${
              isLoading ? "bg-gray-400" : "bg-[#2196F3]"
            }`}
            disabled={isLoading}
          >
            Reset Password
          </button>
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
