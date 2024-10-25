import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaDonate } from "react-icons/fa";
import Volentier from "./Volentier";
import Campaign from "./Campaign/Campaign";
import Completedworks from "./Completedworks";
import Blogs from "./Blogs";
import Footer from "./Footer";

const media = {
  type: "video",
  url: "./images/video7.mp4",
  captions: [
    "We Believe in Transparency",
    "Give a little, change a lot.",
    "Helping hands, caring hearts.",
  ],
};

const Main = () => {
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);
  const [donateHovered, setDonateHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaptionIndex((prevIndex) =>
        prevIndex === media.captions.length - 1 ? 0 : prevIndex + 1
      );
    }, 5040); // Change caption every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home">
      <div className="flex flex-col">
        <div className="relative w-full">
          <div className="relative z-0 ease-in-out">
            {media.type === "video" ? (
              <video
                src={media.url}
                className="w-full object-cover shadow-md h-[93vh] md:h-[94vh] lg:h-[80vh] xl:h-[92vh] 2xl:h-[90vh]"
                autoPlay
                loop
                muted
                preload="auto"
              />
            ) : (
              <img
                src={media.url}
                alt={media.captions[currentCaptionIndex]}
                className="w-full object-cover shadow-md h-[93vh] md:h-[94vh] lg:h-[80vh] xl:h-[92vh] 2xl:h-[90vh]"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-center py-2 px-8 md:px-12 text-[22px] md:text-[38px] font-bold font-josiefin">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-[17px] md:text-[30px]">
                  {media.captions[currentCaptionIndex]}
                </div>
                <button
                  className="relative rounded-md w-[120px] h-[45px] md:w-[220px] md:h-[70px] bg-[#F70059] text-white text-[12px] md:text-[22px] font-bold shadow-lg font-monserrat hover:scale-105 overflow-hidden"
                  onMouseEnter={() => setDonateHovered(true)}
                  onMouseLeave={() => setDonateHovered(false)}
                >
                  <a href="https://rzp.io/rzp/CYevgb0T">
                    <span
                      className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                        donateHovered ? "-translate-x-full" : "translate-x-0"
                      }`}
                    >
                      DONATE NOW
                    </span>
                    <span
                      className={`absolute inset-0 flex items-center text-[14px] md:text-[28px] justify-center transform transition-transform duration-300 ease-in-out ${
                        donateHovered ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                      <FaDonate />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Volentier />
        <div className="mt-8">
          <Campaign />
        </div>
        <div>
          <Completedworks />
        </div>
        <div>
          <Blogs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
