import Custombutton from "../Elements/custombutton";


export default function Donateform(){
    return(
        <div className="bg-[#F6F2F2] flex flex-col w-full sm:w-[493px] max-w-[493px] rounded-[25px]">
            <div className="flex flex-row items-center justify-center gap-3 p-2 pt-[269px] ">
                <Custombutton theme={"blue"} text={"One Time"}   />
                <Custombutton text={"Monthly"} />

            </div>
            <p>Monthly gifts help save lives all years long</p>
        </div>
    )
}