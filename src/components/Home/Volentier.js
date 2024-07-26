import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
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
      <div>
        <p className="mt-8 font-bold text-[16px] md:text-[45px] font-monserrat mb-3">
          Our Programmes
        </p>
        
      </div>

      <div>
        <p className="text-[16px] md:text-[45px] text-black font-monserrat font-bold">
          Our Impact
        </p>
        <div className="flex flex-col lg:gap-20 md:flex-row text-center items-center justify-between lg:justify-center  p-8  bg-gradient-to-r from-[#B7D8F4] to-[#2196F3] w-screen h-[600px] md:w-full  md:h-40 mt-4 text-[#F70059]">
          {/* <GoArrowUpRight className="text-6xl " /> */}

          <div className="flex flex-col gap-2  font-bold font-monserrat ">
            <h1 className="text-5xl">0+</h1>
            <h1 className="text-xl lg:text-2xl">Transactions</h1>
          </div>
          {/* <GoArrowUpRight className="text-6xl " /> */}
          <div className="flex flex-col gap-2  font-bold font-monserrat ">
            {" "}
            <h1 className="text-5xl">0+</h1>
            <h1 className="text-xl lg:text-2xl">Total Money</h1>
          </div>
          {/* <GoArrowUpRight className="text-6xl " /> */}
          <div className="flex flex-col gap-2 font-bold font-monserrat ">
            {" "}
            <h1 className="text-5xl">0+</h1>
            <h1 className=" text-xl lg:text-2xl ">To Go</h1>
          </div>
          {/* <GoArrowUpRight className="text-6xl " /> */}
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            {" "}
            <Link to="/allvolunteers">
              <h1 className="text-5xl">
                {setvolcount !== null ? setvolcount : "Loading..."}+
              </h1>
              <h1 className=" text-xl lg:text-2xl ">Volunteers </h1>
            </Link>
          </div>
          {/* <GoArrowUpRight className="text-6xl " /> */}
        </div>
      </div>

      <p className="font-bold font-josiefin text-[20px] md:text-[40px] mt-8 text-center mx-8">
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
              <Link to="/aboutus">
                <span className="font-bold underline text-blue-500">
                  READ MORE !
                </span>
              </Link>
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
