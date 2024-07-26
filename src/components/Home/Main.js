import React from "react";
import { Link } from "react-router-dom";
import Donateform from "./Donateform";
import Campaign from "./Campaign/Campaign";
import Volentier from "./Volentier";
import Completedworks from "./Completedworks";
import Blogs from "./Blogs";
import Footer from "./Footer";

const slideImages = [
  {
    url: "./images/img1.jpg",
    caption: "We Believe in Transparency",
    caption2: "Read more",
  },
  {
    url: "./images/img3.jpg",
    caption: "Give a little, change a lot.",
  },
  {
    url: "./images/img4.jpg",
    caption: "Helping hands, caring hearts.",
  },
];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home">
      <div className="flex flex-col">
        <div className="relative w-full">
          <div className="relative z-0 ease-in-out">
            <img
              src={slideImages[currentImageIndex].url}
              alt={slideImages[currentImageIndex].caption}
              className="w-full object-cover shadow-md h-[93vh] md:h-[94vh] lg:h-[80vh] xl:h-[92vh] 2xl:h-[90vh]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60  text-white text-center py-2 px-8 md:px-12 text-[22px] md:text-[38px] font-bold font-josiefin">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-[17px] md:text-[30px]">
                {slideImages[currentImageIndex].caption}
                </div>
                
                <button className=" rounded-md w-[120px] h-[45px] md:w-[220px] md:h-[70px] bg-[#F70059] text-white text-[12px] md:text-[22px] font-bold  shadow-lg font-monserrat hover:scale-105">
                  <Link to="/donate">DONATE NOW</Link>
                </button>
              </div>
            </div>
          </div>

          

          {/* <div className="absolute top-3 xl:top-8 right-3 sm:right-5">
            <div className="hidden lg:flex">
              <Donateform />
            </div>
          </div> */}
        </div>
        {/* <div className="lg:hidden w-full flex flex-col items-center z-10 px-3 py-2 lg:px-3 lg:py-5">
          <Donateform />
        </div> */}
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
