import Currencybutton from "../Elements/currencybutton";
import Custombutton from "../Elements/custombutton";
import { BsCurrencyRupee } from "react-icons/bs";

export default function Donateform(){
    return(
        <div className="bg-[#F6F2F2] flex flex-col w-full sm:w-[493px] max-w-[493px] rounded-[25px]">
            <div className="flex flex-row items-center justify-center gap-6  pt-12">
                <Custombutton theme={"blue"} text={"One Time"}   />
                <Custombutton text={"Monthly"} />

            </div>
            <p className="flex justify-start px-9 py-2 text-[12px] text-[#E91E63] font-itim mt-2 mb-1">Monthly gifts help save lives all years long
             <img src="./images/arrow.png" className="w-[20px] h-[16px] transform rotate-180  ml-2 " alt="arrow" /></p>
            <div className="flex flex-row item-center justify-center gap-3 mt-2 mb-4 " >
                <Currencybutton text={"₹ 100"}/>
                <Currencybutton text={"₹ 500"}/>
                <Currencybutton text={"₹ 1000"}/>
            </div>
            <p className="font-inter text-[23px] mt-2 mb-2">or Enter another amount</p>
            <div className="mt-2 relative">
                <input type="number" name="amount" className="border border-black w-[419px] h-[71px] 
                " 
            />
            <button className="w-[268px] h-[76px] items-center  bg-[#E91E63] text-white text-[28px] font-bold mt-10 mb-2 shadow-lg font-inter">DONATE NOW</button>
            </div>
            <div className="flex flex-row items-center justify-center mt-10 gap-8 mb-8 ">
                <img src="./images/phonepe.png" className="w-[49px] h-[49px]" alt="phonepe" />
                <img src="./images/google-pay.png" className="w-[51px] h-[42px]" alt="googlepe"/>
                <img src="./images/upi-icon.png" className="w-[49px] h-[49px]" alt="upi"/>
                <img src="./images/mastercard.png" className="w-[49px] h-[49px]" alt="mastercard"/>
                <img src="./images/visa.png" className="w-[49px] h-[49px]" alt="visa"/>
            </div>
        </div>
    )
}