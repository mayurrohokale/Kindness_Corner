import React from "react";
import { useAppState } from "../../../utils/appState";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Cstbutton = ({ text, type }) => {
    return (
      <button className="bg-[#E91E63] mt-3 text-white font-monserrat font-bold py-2 px-4 rounded" type={type} >
        {text}
      </button>
    );
  };

export default function Profile() {
  const { user, setUser } = useAppState();

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 p-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="/images/profile-pic.jpg" 
            alt="User profile"
          />
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {user.name}
          </h2>
          <p className="mt-2 text-gray-500">Email: {user.email}</p>
          <p className="mt-2 text-gray-500">Phone: {user.phone}</p>
          <p className="mt-2 text-gray-500">Address: {user.address}</p>
          {user.is_volunteer ? (
            <span className="mt-4 inline-block font-courier border-4 border-green-600 transform rotate-[0deg] text-green-600 font-bold uppercase tracking-wide p-2 rounded-lg text-[11px] md:text-[20px]">
              Volunteer
            </span>
          ) : (
            <div className="flex flex-col  gap-2">
            <span className="mt-4 inline-block font-courier border-4 border-red-600 transform rotate-[0deg] text-red-600 font-bold uppercase tracking-wide p-2 rounded-lg text-[11px] md:text-[20px]">
              Not an Volunteer!
            </span>
            <Link to="/volunteer"><Cstbutton text="Become Volunteer" /></Link></div>
            
            
          )}
        </div>
      </div>
      <div>
        <butoon className="bg-[#128AED] mt-3 text-white font-monserrat font-bold py-2 px-4 rounded cursor-pointer" onClick={handleLogout}>Logout</butoon>
      </div>
    </div>
  );
}
