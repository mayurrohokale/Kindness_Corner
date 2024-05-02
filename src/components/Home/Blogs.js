
import Blogsform from "./Blogs/Blogsform"

export default function Blogs(){
    return(
        <div className="mt-0  max-w-full mx-2">
            <div className="justify-start pt-20 pb-8">
            <p className=" justify-center md:justify-start font-bold text-[40px] md:text-[55px] font-josiefin ">Community <span className="bg-[#E91E63] p-3 text-white">Blogs</span> </p>
            <p className=" justify-center md:justify-end underline font-semibold font-serif mt-3">View all Community Blogs</p>
            </div>
          
        <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 md:gap-10 mt-12 pb-28 ">
            
          <div><Blogsform/></div>
      

        </div>
        <div className=" flex flex-row justify-center">

        </div>
        </div>
    )
}