import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { getVolunteersCount } from "../api/user";
export default function Volentier() {
  const [setvolcount, setVolcount] = useState(null);

  useEffect(() => {
    const fetchVolunteersCount = async () => {
        const data = await getVolunteersCount();
        if (data) {
            setVolcount(data);
        }
    };

    fetchVolunteersCount();
}, []);



  return (
    <div className="bg-[#BBDEFB] " id="voulunteers">
      <p className="mt-8 font-bold text-[20px] md:text-[45px] font-monserrat mb-3">
        Together We can Make Difference
      </p>
      <hr className="border border-black" />
      <div className="flex flex-col md:flex-row gap-4 text-center items-center justify-center bg-gradient-to-r from-[#B7D8F4] to-[#2196F3] w-screen h-[932px] md:w-full md:h-40 mt-4">
        <div>Transactions</div>
        <div>Total Money</div>
        <div>To Go</div>
        <div className="flex flex-col gap-2 text-3xl font-bold font-monserrat">
          {" "}
          <h1>
            Volunteers{" "}
            
          </h1>
          <h1>{setvolcount !== null ? setvolcount : "Loading..."}</h1>
          <div></div>
        </div>
      </div>

      <p className="font-bold font-sans text-[20px] md:text-[40px] mt-8 text-start mx-8">
        APPLY <span className="bg-[#E91E63] text-white p-3">AS VOLUNTEER</span>
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-32  w-full gap-4 mt-10 mb-6 px-10">
        <div className="w-full lg:w-[250px] flex flex-col items-center">
          <div className="m-5 flex flex-col items-center  max-w-[250px]">
            <img
              src="./images/mayurphoto.jpg"
              alt="profile"
              className="rounded-[80%] shadow-xl w-24"
            />
            <p className="text-center mt-6 italic">
              "I would encourage anyone who is looking for a meaningful way to
              give back to consider volunteering with this wonderful
              organization."
            </p>
            <p className="text-end font-bold">-Mayur Rohokale</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 text-center text-sm text-black/60 lg:text-lg justify-center items-center font-sans">
          <div className="bg-white shadow-lg max-w-[220px] min-h-[220px] lg:h-full items-center flex  ">
            <p className="p-2 ">
              <span className=" font-bold">About-US</span>
              <br />
              "At Kindness corner, we empower you to make a difference. Through
              our platform, you can donate securely and transparently, with
              real-time updates on transactions and the total amount raised.
            </p>
          </div>
          <div className="bg-white  shadow-lg max-w-[220px] min-h-[220px] lg:h-full items-center flex">
            <p className="p-2">
              Whether you choose to donate anonymously or openly, your
              contributions go towards supporting NGOs. What sets us apart is
              that we let our registered users (Angels) vote to determine which
              NGOs receive the funds.
            </p>
          </div>
          <div className="bg-white  shadow-lg max-w-[220px] min-h-[220px] lg:h-full items-center flex">
            <p className="p-2">
              Together, we amplify the impact of your generosity and create
              positive change in the world."
              <br />
              <span className="font-bold">READ MORE !</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end mx-16 mt-8 mb-4 p-2">
        <Link to="/volunteer">
          <button className="bg-[#E91E63]  p-2 text-white font-bold text-[15px] md:text-[25px] flex flex-row font-sans">
            APPLY NOW &ensp;
            <MdArrowOutward className=" items-center" />
          </button>
        </Link>
      </div>
    </div>
  );
}
