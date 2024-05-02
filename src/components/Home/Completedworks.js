import Worksform from "./Campaign/Worksform";




export default function Completedworks(){


    return(
        <div className="mt-6  max-w-full mx-2  h-full bg-gradient-to-b from-[#90CAF9] to-[#557793]">
            <div className="justify-start pt-8 pb-8">
            <p className=" justify-center md:justify-start font-bold text-[55px] font-josiefin ">Completed <span className="bg-[#E91E63] p-3 text-white">Works</span> </p>
            <p className=" justify-center md:justify-end underline font-semibold font-serif mt-3">View all Completed Works</p>
            </div>
          
        <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 md:gap-10 mt-12 pb-44 ">
            
          <div><Worksform/></div>
          <div><Worksform/></div>
          <div><Worksform/></div>

        </div>
        </div>
    )
}