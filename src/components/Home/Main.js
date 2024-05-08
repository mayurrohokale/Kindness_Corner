import React from "react";
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
      <div className="flex flex-col max-w-[1536px]">
        <div className="relative w-full">
          <div className="relative z-0 ease-in-out">
            <img
              src={slideImages[currentImageIndex].url}
              alt={slideImages[currentImageIndex].caption}
              className="w-full object-cover shadow-md lg:h-screen xl:h-[88vh]  "
            />
            <div className="absolute bottom-4 md:bottom-16 left-0 right-0 bg-black bg-opacity-10 text-white text-start py-2 px-8 md:px-12 text-[22px] md:text-[38px] font-bold font-josiefin ">
              {slideImages[currentImageIndex].caption}
              {/* <p className="text-[10px] md:text-[20px]  text-black underline" >Read More!</p> */}
            </div>
          </div>
          <div className="absolute top-3 xl:top-8 right-3 sm:right-5">
            <div className="hidden lg:flex">
              <Donateform />
            </div>
          </div>
        </div>
        <div className="lg:hidden w-full flex flex-col items-center z-10 px-3 py-2 lg:px-3 lg:py-5">
          <Donateform />
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
