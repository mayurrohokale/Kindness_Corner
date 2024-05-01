import React from "react";
import Donateform from "./Donateform";
import Campaign from "./Campaign/Campaign";
import Volentier from "./Volentier";
// import Votingform from "./Campaign/votingform";

const slideImages = [
  {
    url: "./images/img1.jpg",
    caption: "We Belive in Transparency",
    caption2:"",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "",
  },
];

const Main = () => {
  return (
    <div>
    <div className="flex flex-col
     max-w-[1536px]">
      <div className="relative w-full">
        <div className="relative z-0 ">
          <img
            src={slideImages[0].url}
            alt={slideImages[0].caption}
            className="w-full object-cover shadow-md lg:h-screen xl:h-[88vh]"
          />
        </div>
        <div className=" absolute top-3 xl:top-8 right-3 sm:right-5 ">
          <div className="hidden lg:flex  ">
            <Donateform />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex flex-col items-center z-10 px-3 py-2 lg:px-3 lg:py-5 ">
        <Donateform />
      </div>
      <Volentier />
      <div className="mt-8">
       <Campaign/>
      </div>
      
    </div>
    
    </div>
  );
};

export default Main;
