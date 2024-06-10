import { MdArrowOutward } from "react-icons/md";

export default function VolunteerForm() {
  return (
    <div>
      <div className="relative max-w-[1536px] h-screen lg:h-screen xl:h-[66vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./images/img2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative flex flex-col justify-center items-center pt-36 text-white font-bold text-[52px] gap-6 font-monserrat">
            <h1>
              Add Purpose To Your
              <br /> Weekends
            </h1>
            <button className="bg-[#F70059] text-[25px] p-2 flex items-center gap-2">
              Volunteer Now
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div className="p-8 flex flex-col gap-4 justify-center items-center ">
            <h1 className="text-[36px] font-bold font-monserrat">Why Volunteer With <span className="text-[#F70059]"> Kindness Corner</span></h1>
            <h2 className=" font-monserrat text-[16px]">"Join us in making a difference through Kindness Corner, where every volunteer<br/> effort amplifies our impact and spreads compassion. Together, we can transform lives and build a stronger,<br/> more caring community."</h2>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      <div className="">
        <h1>Register For the Volunteer </h1>
        <div>
            
        </div>
      </div>
    </div>
  );
}
