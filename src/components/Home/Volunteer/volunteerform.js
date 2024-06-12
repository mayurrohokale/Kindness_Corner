import { MdArrowOutward } from "react-icons/md";

const Cstbutton = ({ text }) => {
  return (
    <button className="bg-[#E91E63] mt-3 text-white font-monserrat font-bold py-2 px-4  rounded">
      {text}
    </button>
  );
};

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <div className="">
        <label className="">{label}</label>
        <br />
        <input
          className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg   w-[240px]  lg:w-[390px] max:w-[1536px]  px-5 py-3"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default function VolunteerForm() {
  



  return (
    <div>
      <div className="relative max-w-[1536px] h-[460px] lg:h-[56vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./images/img2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative flex flex-col justify-center items-center  text-white font-bold text-[30px] md:text-[52px] gap-6 font-monserrat h-full">
            <h1 className="text-center">
              Add Purpose To Your
              <br /> Weekends
            </h1>
            <button className="bg-[#F70059] text-[20px] md:text-[25px] p-2 flex items-center gap-2">
              Volunteer Now
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div className="p-8 flex flex-col gap-4 justify-center items-center ">
            <h1 className="text-[20px] md:text-[36px] font-bold font-monserrat">Why Volunteer With <span className="text-[#F70059]"> Kindness Corner</span></h1>
            <h2 className=" font-monserrat text-[8px] md:text-[16px]">"Join us in making a difference through Kindness Corner, where every volunteer<br/> effort amplifies our impact and spreads compassion. Together, we can transform lives and build a stronger,<br/> more caring community."</h2>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-4 p-6">
        <h1 className=" font-monserrat font-bold text-[20px] md:text-[36px]">Register For the Volunteer </h1>
        <div className="flex flex-col gap-2">
            <CustomInput label="name" type="text" placeholder={"Enter Your Full Name"} />
            <CustomInput label="email" type="email" placeholder={"Enter Your Email"} />
            <CustomInput label="phone" type="phone" placeholder={"Enter Your Phone Number"} />
            <CustomInput label="address" type="textarea" placeholder={"Enter Your Address"} />
            <Cstbutton text="submit" />
        </div>
      </div>
    </div>
  );
}
