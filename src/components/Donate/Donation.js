import React, { useEffect, useRef, useState } from "react";
import { useAppState } from "../../utils/appState";

const payment_btn_id = process.env.PAYMENT_BTN_ID || "pl_OMdi2eP0jUZBEY";

const Cstbutton = ({ text, theme, onClick, value }) => {
  return (
    <button
      className={`border w-[100px] md:w-[150px] rounded-[5px] py-2 font-monserrat text-[12px] md:text-[18px] ${
        theme === "blue"
          ? " bg-[#128AED] text-white"
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
    <div className="relative  pt-8 h-[93vh] md:h-[89vh]">
      <div
        className="absolute inset-0 bg-cover bg-center h-[93vh] sm:h-[89vh] w-[100vw] z-0"
        style={{ backgroundImage: "url('./images/img10.jpg')" }}
      ></div>
      <div className="relative flex flex-col gap-4 z-10">
        <h1 className="font-bold text-[18px] md:text-2xl font-montserrat text-center text-[#013159] bg-opacity-75 p-4">
          Support Our Mission to <span className="text-[#F70059]">Help</span>{" "}
          Those in Need
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
        <div class="inline-flex items-center justify-center">
          <label
            class="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-3 w-3 md:h-5 md:w-5 cursor-pointer appearance-none  rounded-sm md:rounded-md border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
              id="check"
            />
            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            class="mt-px font-monserrat text-[10px] md:text-[16px] text-black cursor-pointer select-none"
            htmlFor="check"
          >
            Donate Anonymously! 
          </label>
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
