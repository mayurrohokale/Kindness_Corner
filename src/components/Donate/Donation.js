import React, { useState } from "react";
import { useAppState } from "../../utils/appState";
import { createOrder, verifyPayment } from "../api/user";
import { SiPhonepe } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa"
import { FaAmazonPay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { BiLogoVisa } from "react-icons/bi";

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
          className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg   w-[240px]  lg:w-[390px] max:w-[1536px]  px-5 py-3"
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
//   const [isNamedDonation, setIsNamedDonation] = useState(true);
//   // const [isButtonClick, setButtonClick] = useState(true);
//   const { amount, setAmount, payment_type, setPaymentType } = useAppState();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   // const handleOneTime = () => {
//   //   setButtonClick(true);
//   // };

//   // const handleMonthly = () => {
//   //   setButtonClick(false);
//   // };

//   const handleNamedDonationClick = () => {
//     setIsNamedDonation(true);
//   };

//   const handleAnonymousDonationClick = () => {
//     setIsNamedDonation(false);
//   };

//   function handlePaymentTypeChange(e) {
//     setPaymentType(e.target.value);
//   }

//   function handleAmountChange(e) {
//     if (e.target.value === "") {
//       setAmount(0);
//       return;
//     }
//     setAmount(parseInt(e.target.value)>0 ? parseInt(e.target.value) : 0);
//   }

//   const handlePayment = () => {
//     createOrder({
//       firstName,
//       lastName,
//       email,
//       phone,
//       address,
//       amount,
//       paymentType: payment_type
//     }).then((orderId) => {
//       // Redirect to payment gateway or show a success message
//       console.log("Order created with ID:", orderId);
//     }).catch((error) => {
//       console.error("Error creating order:", error);
//       // Handle error
//     });
//   }

//   return (
//     <div>
//     <div className=" container  p-4">
//       <h1 className="text-center mt-5 font-bold">
//         Make a donation to support our mission!
//       </h1>
//       <div className="flex justify-center mt-5 font-bold font-monserrat text-[10px] md:text-[20px]">
//         <button
//           className={`mx-2 px-4 py-2 rounded ${
//             isNamedDonation
//               ? "bg-[#2196F3] text-white"
//               : "bg-white text-[#2196F3] border border-black "
//           }`}
//           onClick={handleNamedDonationClick}
//         >
//           Named Donation
//         </button>
//         <button
//           className={`mx-2 px-4 py-2 rounded ${
//             !isNamedDonation
//               ? "bg-[#2196F3] text-white"
//               : "bg-white text-[#2196F3] border border-black"
//           }`}
//           onClick={handleAnonymousDonationClick}
//         >
//           Anonymous Donation
//         </button>
//       </div>
//       {isNamedDonation ? (
//         <form onSubmit={handlePayment}>
//           {/* Form for named donation */}
//           <p className="pt-4 text-gray-400  text-[8px] lg:text-[12px]">
//             *In a named donation, your details are proudly displayed, making you
//             a recognized hero! It's like getting the applause you deserve!
//           </p>
//           <div className="flex flex-col lg:flex-row justify-center mt-4 gap-2">
//             <CustomInput label="First Name" type="text" placeholder={"John"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//             <CustomInput label="Last Name" type="text" placeholder={"Doe"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
//           </div>
//           <div className="flex flex-col lg:flex-row justify-center mt-4 gap-2">
//             <CustomInput label="Email" type="email" required placeholder={"xyz@gmail.com"} value={email} onChange={(e) => setEmail(e.target.value)} />
//             <CustomInput label="Phone/Mobile" type="phone" required placeholder={"0000000000"} value={phone} onChange={(e) => setPhone(e.target.value)}/>
//           </div>
//           <div className="mt-4">
            
//             <CustomInput label="Address" type="text" required placeholder={"23 F, New Yotk Street , USA"} value={address} onChange={(e) => setAddress(e.target.value)} />
//             <div className="mt-4">

//               {
//                 DEFAULT_TYPES.map((item, index) => (
//                   <button
//                     key={index}
//                     className={`mx-2 px-4 py-2 rounded ${
//                       item.value === payment_type
//                         ? "bg-[#2196F3] text-white"
//                         : "bg-white text-[#2196F3] border border-black"
//                     }`}
//                     value={item.value}
//                     onClick={handlePaymentTypeChange}
//                   >
//                     {item.text}
//                   </button>
//                 ))

//               }
//             </div>
//             <CustomInput
//               label=""
//               type="number"
//               placeholder={"  Enter an amount"}
//               required
//               value={amount}
//               onChange={handleAmountChange}
//             />
//           </div>
       
//           <Cstbutton text="Donate" />
//         </form>
//       ) : (
//         <form>
//           {/* Form for anonymous donation */}
//           <p className="pt-4 text-gray-400  text-[8px] lg:text-[12px]">
//             *In an anonymous donation website, your details won't be shown, but
//             they'll be securely stored for government compliance. It's like
//             being a secret hero!
//           </p>
//           <div className="flex flex-col justify-center mt-4 gap-2">
//             <CustomInput label="First Name" type="text" placeholder={"John"} />
//             <CustomInput label="Last Name" type="text" placeholder={"Doe"} />
//           </div>
//           <div className="mt-4">
//             <CustomInput label="Email" type="email" required placeholder={"xyz@gmail.com"} />
//             <div className="mt-4">

//               {
//                 DEFAULT_TYPES.map((item, index) => (
//                   <button
//                     key={index}
//                     className={`mx-2 px-4 py-2 rounded ${
//                       item.value === payment_type
//                         ? "bg-[#2196F3] text-white"
//                         : "bg-white text-[#2196F3] border border-black"
//                     }`}
//                     value={item.value}
//                     onClick={handlePaymentTypeChange}
//                   >
//                     {item.text}
//                   </button>
//                 ))

//               }
//             </div>
//             <CustomInput
//               label=""
//               type="number"
//               placeholder={"  Enter an amount"}
//               required
//               value={amount}
//               onChange={handleAmountChange}
//             />
//           </div>
          
//           <Cstbutton text="Donate" />
//         </form>
//       )}
//     </div>



    <div className=" flex flex-row gap-4 md:gap-16 justify-center py-4 text-[20px] md:text-[30px]">
      <div>
      <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OMdi2eP0jUZBEY" async> </script> </form>
      </div>
      <SiPhonepe/>
      <FaGooglePay/>
      <FaPaypal/>
      <FaAmazonPay/>
      <SiPaytm/>
      <FaApplePay/>
      <FaCcMastercard/>
      <BiLogoVisa/>
    </div>
    


  
}
