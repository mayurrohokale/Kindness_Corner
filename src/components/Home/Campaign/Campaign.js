import Votingform from "./votingform";
import { Link } from "react-router-dom";

export default function Campaign(){
    return(
        <div className="mt-6  max-w-full mx-2  h-full">
            <div className="justify-start">
            <p className=" justify-center md:justify-start font-bold text-[40px] md:text-[55px] font-josiefin ">Ongoing <span className="bg-[#E91E63] p-3 text-white">Campaign</span> </p>
            {/* <p className=" justify-center md:justify-end underline font-semibold font-serif mt-3"><Link to="/allcampaign">View All Campaign</Link></p> */}
            </div>
          
        <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 md:gap-10 mt-12 ">
            
            <div><Votingform/></div>
         
        </div>
        <button className="bg-[#2196F3] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"><Link to="/allcampaign">View All Campaign</Link></button>
        </div>
    )
}