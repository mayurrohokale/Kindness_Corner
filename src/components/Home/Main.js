import React from "react";
import Donateform from "./Donateform";

const slideImages = [
  {
    url: "./images/img1.jpg",
    caption: "We Belive in Transparency",
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
    <div className="flex flex-col h-screen  max-w-[1536px]">
      <div className="relative w-full">
        <div className="relative z-0 ">
          <img
            src={slideImages[0].url}
            alt={slideImages[0].caption}
            className="w-full object-cover shadow-md"
          />
        </div>
        <div className=" absolute top-24 right-3 sm:right-5 ">
          <div className="hidden md:flex  ">
            <Donateform />
          </div>
        </div>
      </div>
      <div className="md:hidden z-10 px-3 py-5 ">
        <Donateform />
      </div>
      <div className="bg-[#BBDEFB]">
        <p className="mt-8 font-semibold text-[20px] md:text-[45px] font-itim">
          Together We can Make Difference
        </p>
        <hr className="border border-black" />
        <div className="flex flex-row gap-4 justify-center bg-gradient-to-r from-[#B7D8F4] to-[#2196F3] w-[347px] h-[932px] md:w-full md:h-40 mt-2">
          <div>Transactions</div>
          <div>Total Money</div>
          <div>To Go</div>
          <div>Voulunteers</div>
        </div>

        <p className="font-bold font-inter text-[20px] md:text-[40px] mt-4 text-start mx-8">
          APPLY{" "}
          <span className="bg-[#E91E63] text-white p-1">AS VOLUNTEER</span>
        </p>

        <div className="flex flex-col md:flex-row  w-full gap-4 mt-10">
          <div className="m-5 flex flex-col items-center">
            <img
              src="./images/mayurphoto.jpg"
              alt="profile"
              className="rounded-full shadow-xl w-24"
            />
            <p className="text-center mt-6">
              I would encourage anyone who is looking for a meaningful way to
              give back to consider volunteering with this wonderful
              organization.

            </p>
            <p className="text-end font-bold">-Mayur Rohokale</p>
          </div>

          <div className="flex flex-col md:flex-row gap-16 text-center text-[20px] justify-center items-center mr-0 md:mr-12">
            <div className="bg-white w-[254px] h-[290px]">
              <p>
                "At Kindness corner, we empower you to make a difference.
                Through our platform, you can donate securely and transparently,
                with real-time updates on transactions and the total amount
                raised.
              </p>
            </div>
            <div className="bg-white w-[254px] h-[290px]">
              <p>
                Whether you choose to donate anonymously or openly, your
                contributions go towards supporting NGOs. What sets us apart is
                that we let our registered users (Angels) vote to determine
                which NGOs receive the funds.
              </p>
            </div>
            <div className="bg-white w-[254px] h-[290px]">
              <p>
                Together, we amplify the impact of your generosity and create
                positive change in the world."<br/>
                <span className="font-bold">READ MORE !</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
