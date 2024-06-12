import React, { useState } from 'react';

export default function Profile() {
  const [isVolunteer, setIsVolunteer] = useState(false);

  const handleVolunteerToggle = () => {
    setIsVolunteer(!isVolunteer);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 p-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://via.placeholder.com/150" // Replace with user's profile image URL
            alt="User profile"
          />
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">John Doe</h2> {/* Replace with user's name */}
          <p className="mt-2 text-gray-500">Email: john.doe@example.com</p> {/* Replace with user's email */}
          <p className="mt-2 text-gray-500">Phone: 123-456-7890</p> {/* Replace with user's phone */}
          <p className="mt-2 text-gray-500">Address: 123 Main St, City, Country</p> {/* Replace with user's address */}
          <button
            onClick={handleVolunteerToggle}
            className={`mt-4 px-4 py-2 font-semibold text-sm rounded-full ${
              isVolunteer ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {isVolunteer ? 'Volunteer' : 'Not a Volunteer'}
          </button>
        </div>
      </div>
    </div>
  );
};


