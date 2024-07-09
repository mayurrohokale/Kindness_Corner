import { Link } from "react-router-dom";
import Blogsform from "./Blogs/Blogsform";
import { FaPen } from "react-icons/fa";


export default function Blogs() {
  return (
    <div className="mt-0  max-w-full mx-2">
      <hr className="border border-black mt-2" />
      <div className="justify-start pt-20 ">
        <p className=" justify-center md:justify-start font-bold text-[40px] md:text-[55px] font-josiefin ">
          Community <span className="bg-[#E91E63] p-3 text-white">Blogs</span>{" "}
        </p>
        <button className="font-monserrat font-semibold text-xl p-2"><Link to="/addblog" className="flex justify-center text-center items-center gap-2 underline" > <FaPen/> Write A Blog</Link></button>
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
          <div className=" mt-4   text-[12px] md:text-[20px]  ">
            <button className="bg-[#2196F3] text-white px-4 py-2  rounded-lg hover:shadow-lg font-itim mr-4">
              <Link to="/register">Register</Link>
            </button>
            <button className="bg-[#E91E63] text-white px-4 py-2 rounded-lg hover:shadow-lg font-itim">
              <Link to="/donate">Donate</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
