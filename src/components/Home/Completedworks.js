import Worksform from "./Campaign/Worksform";




export default function Completedworks(){


    return(
        <div className="mt-6  max-w-full mx-2  h-full bg-[#132B3F] text-white " id="works">
            <div className="justify-start pt-20 pb-8">
            <p className=" justify-center md:justify-start font-bold text-[40px] md:text-[55px] font-josiefin text-white">Completed <span className="bg-[#E91E63] p-3 text-white">Works</span> </p>
            <p className=" justify-center md:justify-end underline font-semibold font-Roboto mt-3">View all Completed Works</p>
            </div>
          
        <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 md:gap-10 mt-12 pb-28 ">
            
          <div><Worksform/></div>
      

        </div>
        </div>
    )
}