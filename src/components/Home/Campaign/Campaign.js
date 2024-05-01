import Votingform from "./votingform"

export default function Campaign(){
    return(
        <div className="mt-6  max-w-full mx-2  h-full">
            <div className="justify-start">
            <p className=" justify-center md:justify-start font-bold text-[55px] font-josiefin ">Current <span className="bg-[#E91E63] p-3">Campaign</span> </p>
            <p className=" justify-center md:justify-end underline font-semibold font-serif">View all Campaign</p>
            </div>
          
        <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 md:gap-10 mt-12 ">
            
            <div><Votingform/></div>
            <div><Votingform/></div>
            <div><Votingform/></div>
            

        </div>
        </div>
    )
}