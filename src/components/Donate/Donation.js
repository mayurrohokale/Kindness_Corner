import React, { useEffect, useRef, useState } from "react";
import { useAppState } from "../../utils/appState";

const payment_btn_id = process.env.PAYMENT_BTN_ID || "pl_OMdi2eP0jUZBEY";

const Cstbutton = ({ text, theme, onClick, value }) => {
  return (
    <button
      className={`border w-[100px] md:w-[150px] py-2 font-monserrat text-[12px] md:text-[18px] ${
        theme === "blue"
          ? "border-black bg-[#128AED] text-white"
          : "bg-white text-[#128AED] border-[#128AED]"
      } px-4 font-montserrat font-semibold`}
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  );
};

export default function Donation() {
  const { payment_type, setPaymentType } = useAppState();
  const formRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const DEFAULT_TYPES = [
    {
      text: "One Time",
      value: "one_time",
    },
    {
      text: "Monthly",
      value: "monthly",
    },
  ];

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/payment-button.js"]'
    );
    if (existingScript) {
      setIsScriptLoaded(true);
      return;
    }

    if (formRef.current && !isScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", payment_btn_id);
      script.async = true;

      script.onload = () => setIsScriptLoaded(true);
      script.onerror = () => console.error("Failed to load the script");

      formRef.current.appendChild(script);
    }

    return () => {
      if (formRef.current && isScriptLoaded) {
        const script = formRef.current.querySelector(
          'script[src="https://checkout.razorpay.com/v1/payment-button.js"]'
        );
        if (script) {
          formRef.current.removeChild(script);
        }
      }
    };
  }, [isScriptLoaded]);

  return (
    <div className="relative pt-8 min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('./images/img10.jpg')" }}
      ></div>
      <div className="relative flex flex-col gap-4 z-10">
        <h1 className="font-bold text-[18px] md:text-2xl font-montserrat text-center text-[#013159]  bg-white bg-opacity-75 p-4 rounded">
          Support Our Mission to <span className="text-[#F70059]">Help</span> Those in Need
        </h1>
        <div className="flex items-center justify-center gap-2">
          {DEFAULT_TYPES.map((item, index) => (
            <Cstbutton
              key={index}
              text={item.text}
              theme={payment_type === item.value ? "blue" : ""}
              onClick={handlePaymentTypeChange}
              value={item.value}
            />
          ))}
        </div>
      </div>
      <div className="pt-4 relative z-10">
        <form ref={formRef}></form>
      </div>
    </div>
  );
}

const RazorpayButton = () => {
  return (
    <form
      dangerouslySetInnerHTML={{
        __html: `
          <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OMdi2eP0jUZBEY" async></script>
        `,
      }}
    />
  );
};
