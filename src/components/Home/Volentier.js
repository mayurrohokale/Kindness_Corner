import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { getVolunteersCount } from "../api/user";

export default function Volentier() {
  const slides = [
    {
      url: "./Education.png",
      title: "Education",
    },
    {
      url: "./Heart.png",
      title: "Healthcare",
    },
    {
      url: "./Disaster.png",
      title: "DisasterRelief",
    },
    {
      url: "./Women.png",
      title: "Empowerment",
    },
    {
      url: "./Volunteer.png",
      title: "Volunteer",
    },
  ];

  const [volCount, setVolCount] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchVolunteersCount = async () => {
      const data = await getVolunteersCount();
      if (data) {
        setVolCount(data);
      }
    };

    fetchVolunteersCount();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const getVisibleSlides = () => {
    let visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(slides[(currentIndex + i) % slides.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="" id="voulunteers">
      <div className="flex text-center items-center font-monserrat font-normal text-[11px] md:text-[15px] mx-2 md:mx-52 mt-8 ">
        <p>
          {" "}
          "At Kindness Corner, we empower you to make a difference. Our platform
          allows you to donate securely and transparently, with real-time
          updates on transactions and total funds raised. You can donate
          anonymously or openly, and your contributions support NGOs. Registered
          users can vote to decide which NGOs receive the funds. Together, we
          amplify your generosity and create positive change."
          <br />
          <Link to="/aboutus">
            <span className="font-bold underline text-blue-500">
              READ MORE !
            </span>
          </Link>
        </p>
      </div>
      <div>
        <p className="mt-8 font-bold text-[16px] md:text-[35px] font-monserrat mb-3">
          Our Programmes
        </p>
        <div className="flex flex-col md:flex-row text-center gap-20 my-16 items-center justify-center">
          {getVisibleSlides().map((slide, index) => (
            <div
              key={index}
              className="flex gap-4 flex-col items-center justify-center w-[100px] h-[90px] transition-all duration-500 ease-in-out"
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-[100%] h-[100%] object-cover"
              />
              <p className="text-xl font-semibold"> {slide.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[16px] pt-4 md:text-[35px] text-black font-monserrat font-bold">
          Our Impact
        </p>
        <div className="flex flex-col lg:gap-20 md:flex-row text-center items-center justify-between lg:justify-center w-screen h-auto md:w-full md:h-auto mt-4 text-[#F70059]">
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <h1 className="text-[60px]">0+</h1>
            <h1 className="text-xl lg:text-2xl">Transactions</h1>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              Its a realtime <br /> transactions of <br /> both transactions
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <h1 className="text-[60px]">0+</h1>
            <h1 className="text-xl lg:text-2xl">Total Money</h1>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              Its a realtime Record <br /> of How much Money <br /> in Account!
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <h1 className="text-[60px]">0+</h1>
            <h1 className="text-xl lg:text-2xl">To Go</h1>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              Its a realtime Record <br /> of How much Money <br /> Goes to NGOs
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-bold font-monserrat">
            <Link to="/allvolunteers">
              <h1 className="text-[60px]">
                {volCount !== null ? volCount : "Loading..."}+
              </h1>
            </Link>
            <Link to="/allvolunteers">
              <h1 className="text-xl lg:text-2xl">Volunteers</h1>
            </Link>
            <h1 className="text-black font-josiefin font-normal text-[14px]">
              List of Volunteerss <br /> who are par tof this
              <br /> wonderfull journey
            </h1>
          </div>
        </div>
      </div>

      <p className="font-bold font-josiefin text-[20px] md:text-[40px] mt-8 text-center mx-8">
        APPLY <span className="bg-[#E91E63] text-white p-3">AS VOLUNTEER</span>
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-32 w-full gap-4 mt-10 mb-6 px-10">
        <div className="w-full lg:w-[250px] flex flex-col items-center">
          <div className="m-5 flex flex-col items-center max-w-[250px]">
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
          <div className="bg-white shadow-lg max-w-[220px] min-h-[220px] lg:h-full items-center flex">
            <p className="p-2">
              <span className="font-bold">About-US</span>
              <br />
              "At Kindness corner, we empower you to make a difference. Through
              our platform, you can donate securely and transparently, with
              real-time updates on transactions and the total amount raised.
            </p>
          </div>
          <div className="bg-white shadow-lg max-w-[220px] min-h-[220px] lg:h-full items-center flex">
            <p className="p-2">
              Whether you choose to donate anonymously or openly, your
              contributions go towards supporting NGOs. What sets us apart is
              that we let our registered users (Angels) vote to determine which
              NGOs receive the funds.
            </p>
          </div>
          <div className="bg-white shadow-lg max-w-[220px] min-h-[220px] lg:h-full items-center flex">
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
          <button className="bg-[#E91E63] p-2 text-white font-bold text-[15px] md:text-[25px] flex flex-row font-sans">
            APPLY NOW &ensp;
            <MdArrowOutward className="items-center" />
          </button>
        </Link>
      </div>
    </div>
  );
}
