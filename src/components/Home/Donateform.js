import Currencybutton from "../Elements/currencybutton";
import Custombutton from "../Elements/custombutton";
import { BsCurrencyRupee } from "react-icons/bs";

export default function Donateform() {
  return (
    <div className="bg-[#F6F2F2] flex flex-col sm:w-[493px] max-w-full sm:max-w-[493px]  rounded-[25px] border border-black lg:border-none shadow-lg">
      <div className="flex flex-row items-center justify-center gap-6 pt-8 md:pt-12">
        <Custombutton theme={"blue"} text={"One Time"} />
        <Custombutton text={"Monthly"} />
      </div>
      <p className="flex justify-start px-10 py-2 text-[10px] md:text-[12px] text-[#E91E63] font-itim mt-2 mb-1">
        Monthly gifts help save lives all years long
        <img
          src="./images/arrow.png"
          className="w-[20px] md:w-[20px] h-[11px] md:h-[16px] transform rotate-180  ml-2 "
          alt="arrow"
        />
      </p>
      <div className="flex flex-row item-center justify-center gap-3 mt-2 mb-4 ">
        <Currencybutton text={"₹ 100"} />
        <Currencybutton text={"₹ 500"} />
        <Currencybutton text={"₹ 1000"} />
      </div>
      <p className="font-inter text-[16px] md:text-[23px] mt-2 mb-2">
        or Enter another amount
      </p>
      <div className=" mt-4 md:mt-2 relative">
        <div className="absolute top-0 left-0 px-16 pt-3 text-xl sm:px-16 sm:pt-4 sm:text-3xl md:px-14  md:pt-5  md:text-4xl ">
          <BsCurrencyRupee />
        </div>

        <input
          type="number"
          name="amount"
          className="border border-black w-[285px] h-[43px]  md:w-[419px] md:h-[71px] hover:shadow-lg px-10 text-[lg]  md:px-16 font-bold md:text-3xl md:pt-0
                " 
        />

        <button className=" w-[150px] h-[48px] md:w-[260px] md:h-[70px] items-center  bg-[#E91E63] text-white text-[15px] md:text-[25px] font-bold mt-10 mb-2 shadow-lg font-inter hover:scale-110">
          DONATE NOW
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-10 gap-3 md:gap-8 mb-8 ">
        <img
          src="./images/phonepe.png"
          className=" w-[40px] h-[39px] md:w-[49px] md:h-[49px]"
          alt="phonepe"
        />
        <img
          src="./images/google-pay.png"
          className="w-[42px] h-[42px] md:w-[51px] md:h-[42px]"
          alt="googlepe"
        />
        <img
          src="./images/upi-icon.png"
          className=" w-[49px] h-[49px]"
          alt="upi"
        />
        <img
          src="./images/mastercard.png"
          className="w-[43px] h-[42px] md:w-[49px] md:h-[49px]"
          alt="mastercard"
        />
        <img
          src="./images/visa.png"
          className="w-[50px] h-[44px] md:w-[60px] md:h-[55px]"
          alt="visa"
        />
      </div>
    </div>
  );
}
