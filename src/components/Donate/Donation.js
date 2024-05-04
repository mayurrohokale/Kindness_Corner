import React, { useState } from "react";
import { useAppState } from "../../utils/appState";


const DEFAULT_TYPES = [
  {
    text: "One Time",
    value: "one_time"
  },
  {
    text: "Monthly",
    value: "monthly"
  }
]
const Cstbutton = ({ text }) => {
  return (
    <button className="bg-[#E91E63] mt-3 text-white font-bold py-2 px-4  rounded">
      {text}
    </button>
  );
};

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <div className="">
        <label className="">{label}</label>
        <br />
        <input
          className="border border-black rounded shadow-lg h-[30px]  w-[240px]  lg:w-[380px] max:w-[1536px] md:h-[40px] px-5 py-2"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default function Donation() {
  const [isNamedDonation, setIsNamedDonation] = useState(true);
  // const [isButtonClick, setButtonClick] = useState(true);

  const { amount, setAmount, payment_type, setPaymentType } = useAppState();

  // const handleOneTime = () => {
  //   setButtonClick(true);
  // };

  // const handleMonthly = () => {
  //   setButtonClick(false);
  // };

  const handleNamedDonationClick = () => {
    setIsNamedDonation(true);
  };

  const handleAnonymousDonationClick = () => {
    setIsNamedDonation(false);
  };

  function handlePaymentTypeChange(e) {
    setPaymentType(e.target.value);
  }

  function handleAmountChange(e) {
    if (e.target.value === "") {
      setAmount(0);
      return;
    }
    setAmount(parseInt(e.target.value)>0 ? parseInt(e.target.value) : 0);
  }
  return (
    <div>
      <h1 className="text-center mt-5 font-bold">
        Make a donation to support our mission!
      </h1>
      <div className="flex justify-center mt-5 font-bold font-monserrat text-[10px] md:text-[20px]">
        <button
          className={`mx-2 px-4 py-2 rounded ${
            isNamedDonation
              ? "bg-[#2196F3] text-white"
              : "bg-white text-[#2196F3] border border-black "
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
          <div className="flex flex-col lg:flex-row justify-center mt-4">
            <CustomInput label="First Name" type="text" />
            <CustomInput label="Last Name" type="text" />
          </div>
          <div>
            <CustomInput label="Email" type="email" required />
            <CustomInput label="Address" type="text" required />
            <div className="mt-4">

              {
                DEFAULT_TYPES.map((item, index) => (
                  <button
                    key={index}
                    className={`mx-2 px-4 py-2 rounded ${
                      item.value === payment_type
                        ? "bg-[#2196F3] text-white"
                        : "bg-white text-[#2196F3] border border-black"
                    }`}
                    value={item.value}
                    onClick={handlePaymentTypeChange}
                  >
                    {item.text}
                  </button>
                ))

              }
            </div>
            <CustomInput
              label=""
              type="number"
              placeholder={"  Enter an amount"}
              required
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          
          
         
          <div>
            <h1>Payment Options</h1>
            <div className="flex flex-col justify-start">
              <div>
                <input type="radio" name="" value="" />
                <label>UPI</label>
              </div>
              <div>
                <input type="radio" name="" value="" />
                <label>Credit Card</label>
              </div>
              <div>
                <input type="radio" name="" value="" />
                <label>Net Banking</label>
              </div>
            </div>
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
