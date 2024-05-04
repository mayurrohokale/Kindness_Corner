import Currencybutton from "../Elements/currencybutton";
import Custombutton from "../Elements/custombutton";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppState } from "../../utils/appState";


const DEFAULT_VALUES = [
  {
    text: "₹ 100",
    value : 100
  },
  {
    text: "₹ 500",
    value : 500
  },
  {
    text: "₹ 1000",
    value : 1000
  }
]

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


const PAYMENT_OPTIONS = [
  {
    text: "PhonePe",
    value: "phonepe",
    url: "./images/phonepe.png"
  },
  {
    text: "Google Pay",
    value: "google_pay",
    url: "./images/google-pay.png"
  },
  {
    text: "UPI",
    value: "upi",
    url: "./images/upi-icon.png"
  },
  {
    text: "MasterCard",
    value: "mastercard",
    url: "./images/mastercard.png"
  },
  {
    text: "Visa",
    value: "visa",
    url: "./images/visa.png"

  }
]
export default function Donateform() {

  const { amount, setAmount, payment_type, setPaymentType } = useAppState();

  const handleAmountChange = (e) => {
    if (e.target.value === "") {
      setAmount(0);
      return;
    }
    setAmount(parseInt(e.target.value)>0 ? parseInt(e.target.value) : 0);
  }


  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  }

  return (
    <div className="bg-[#F6F2F2] flex flex-col sm:w-[493px] max-w-full sm:max-w-[493px]  rounded-[25px] border border-black lg:border-none shadow-lg py-5 md:py-8  gap-2">
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-6">
        {/* <Custombutton theme={"blue"} text={"One Time"} />
        <Custombutton text={"Monthly"} /> */}
        {
          DEFAULT_TYPES.map((item, index) => (
            <Custombutton 
              key={index}
              text={item.text}
              theme={payment_type === item.value ? "blue" : ""}
              onClick={handlePaymentTypeChange}
              value={item.value}
            />
          ))
        }
      </div>
      <p className="flex justify-start px-10 py-2 text-[10px] md:text-[12px] text-[#E91E63] font-itim">
        Monthly gifts help save lives all years long
        <img
          src="./images/arrow.png"
          className="w-[20px] md:w-[20px] h-[11px] md:h-[16px] transform rotate-180  ml-2 "
          alt="arrow"
        />
      </p>
      <div className="flex flex-row item-center justify-center gap-1 sm:gap-3 ">
        {/* <Currencybutton text={"₹ 100"} />
        <Currencybutton text={"₹ 500"} />
        <Currencybutton text={"₹ 1000"} /> */}
        {
          DEFAULT_VALUES.map((item, index) => (
            <Currencybutton 
              key={index}
              text={item.text}
              value={item.value}
              onClick={handleAmountChange}
              isSelected={amount === item.value}
            />
          ))
        }
      </div>
      <p className="font-inter text-[16px] md:text-[23px] ">
        or Enter another amount
      </p>
      <div className=" relative flex flex-col gap-2 justify-center items-center px-3">
        <div className="absolute top-0 left-0 px-5 pt-3 text-xl sm:px-16 sm:pt-4 sm:text-3xl md:px-14  md:pt-5  md:text-4xl ">
          <BsCurrencyRupee />
        </div>

        <input
          type="number"
          name="amount"
          value={amount === 0 ? "Please enter an amount" : amount}
          className="border border-black w-full max-w-[285px] h-[43px]  md:max-w-[419px] md:h-[71px] hover:shadow-lg px-10 text-[lg]  md:px-16 font-bold md:text-3xl md:pt-0 font-ititm
                " 
          onChange={handleAmountChange}
        />

        <p>
          {amount === 0 ? "Please enter an amount" : `You are donating ₹ ${amount}`}
        </p>

        <button className=" w-[150px] h-[48px] md:w-[260px] md:h-[70px] items-center  bg-[#E91E63] text-white text-[15px] md:text-[25px] font-bold  shadow-lg font-inter hover:scale-110">
         <Link to="/donate">DONATE NOW</Link>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-3 md:gap-8 pt-3 md:pt-5 ">
        {
          PAYMENT_OPTIONS.map((item, index) => (
            <img
              key={index}
              src={item.url}
              className=" w-[40px] h-[39px] md:w-[49px] md:h-[49px]"
              alt={item.text}
            />
          ))
        }
      </div>
    </div>
  );
}
