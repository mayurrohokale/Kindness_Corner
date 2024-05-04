import React, { useState } from "react";

const Cstbutton = ({ text }) => {
  return (
    <button className="bg-[#E91E63] mt-3 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

const CustomInput = ({ label, type }) => {
  return (
    <div>
      <div className="" >
        <label className="">{label}</label>
        <br />
        <input className="border border-black rounded shadow-lg w-[800px] h-[50px] " type={type} />
      </div>
    </div>
  );
};

export default function Donation() {
  const [isNamedDonation, setIsNamedDonation] = useState(true);

  const handleNamedDonationClick = () => {
    setIsNamedDonation(true);
  };

  const handleAnonymousDonationClick = () => {
    setIsNamedDonation(false);
  };

  return (
    <div>
      <h1 className="text-center mt-5 font-bold">
        Make a donation to support our mission!
      </h1>
      <div className="flex justify-center mt-5 font-bold font-monserrat">
        <button
          className={`mx-2 px-4 py-2 rounded ${
            isNamedDonation
              ? "bg-[#2196F3] text-white"
              : "bg-white text-[#2196F3] border border-[#2196F3] "
          }`}
          onClick={handleNamedDonationClick}
        >
          Named Donation
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded ${
            !isNamedDonation
              ? "bg-[#2196F3] text-white"
              : "bg-white text-[#2196F3] border border-black"
          }`}
          onClick={handleAnonymousDonationClick}
        >
          Anonymous Donation
        </button>
      </div>
      {isNamedDonation ? (
        <form>
          {/* Form for named donation */}
          <p className="pt-4 text-gray-400  text-[8px] lg:text-[12px]">
            *In a named donation, your details are proudly displayed, making you
            a recognized hero! It's like getting the applause you deserve!
          </p>
          <div>
            <CustomInput label="Name" type="text" />
            <CustomInput label="Amount" type="text" />
            <CustomInput label="Email" type="email" required />
          </div>
          <div>
            <input
              type="number"
              name="amount"
              className="border border-black w-[285px] h-[43px]  md:w-[419px] md:h-[71px] hover:shadow-lg px-10 text-[lg]  md:px-16 font-bold md:text-3xl md:pt-0 font-ititm
                "
            />
          </div>

          <Cstbutton text="Donate" />
        </form>
      ) : (
        <form>
          {/* Form for anonymous donation */}
          <p className="pt-4 text-gray-400  text-[8px] lg:text-[12px]">
            *In an anonymous donation website, your details won't be shown, but
            they'll be securely stored for government compliance. It's like
            being a secret hero!
          </p>
          <CustomInput label="Amount" type="text" />
          <Cstbutton text="Donate" />
        </form>
      )}
    </div>
  );
}
