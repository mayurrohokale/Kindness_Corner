import { Link } from "react-router-dom";
import Blogsform from "./Blogs/Blogsform";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import { useAppState } from "../../utils/appState";
import { MdVolunteerActivism } from "react-icons/md";
import { FaDonate } from "react-icons/fa";


export default function Blogs() {
  const { user, setUser } = useAppState();
  const [volunteerHovered, setVolunteerHovered] = useState(false);
  const [donateHovered, setDonateHovered] = useState(false);


  return (
    <div className="mt-0  max-w-full mx-2">
      <hr className="border border-black mt-2" />
      <div className="justify-start pt-20 ">
        <p className=" justify-center md:justify-start font-bold text-[40px] md:text-[55px] font-josiefin ">
          Community <span className="bg-[#E91E63] p-3 text-white">Blogs</span>{" "}
        </p>
        {user ? (
          <button className="font-monserrat font-semibold text-sm p-2">
            <Link
              to="/addblog"
              className="flex justify-center text-center items-center gap-2 underline"
            >
              {" "}
              <FaPen /> Write A Blog
            </Link>
          </button>
        ) : (
          <p className="font-monserrat font-semibold text-sm md:text-sm p-2 ">
            You Must have to{" "}
            <Link to="/login" className="text-red-500 underline">
              Login
            </Link>{" "}
            to write a blog
          </p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 md:gap-10 pb-10 ">
        <div>
          <Blogsform />
        </div>
      </div>
      <div className="relative pb-12">
        <img
          src="./images/img2.jpg"
          className="w-screen max-h-[261px] object-cover opacity-50"
          alt="bgngoimage"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-[20px] md:text-[35px] font-itim">
            “Sharing Kindness, transforming Communities”
          </p>
          <div className="flex gap-4 mt-4 font-itim text-[12px] md:text-[20px]  ">
            <button
              className="relative bg-[#2196F3] hover:shadow-xl w-24 md:w-44 h-10 md:h-12 px-8 py-1 font-normal  rounded-lg text-white overflow-hidden"
              
              onMouseEnter={() => setVolunteerHovered(true)}
              onMouseLeave={() => setVolunteerHovered(false)}
            ><Link to="/volunteer">
              <span
                className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                  volunteerHovered ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                Volunteer Now
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                  volunteerHovered ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <MdVolunteerActivism className=" text-[20px] md:text-[25px]" />
              </span>
              </Link>
            </button>
            <button
              className="relative bg-[#E91E63] hover:shadow-xl w-16 md:w-32 h-10 md:h-12 px-8 py-1 font-normal  rounded-lg text-white overflow-hidden"
              to="/volunteer"
              onMouseEnter={() => setDonateHovered(true)}
              onMouseLeave={() => setDonateHovered(false)}
            > <Link to="/donate">
              <span
                className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                  donateHovered ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                Donate
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                  donateHovered ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <FaDonate />
              </span>
              </Link>
            </button>
            {/* <button className="bg-[#E91E63] text-white px-4 py-2 rounded-lg hover:shadow-lg font-itim">
              <Link to="/donate">Donate</Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
