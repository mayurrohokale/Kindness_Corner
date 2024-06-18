import { MdArrowOutward } from "react-icons/md";
import { useAppState } from "../../../utils/appState";
import { useState } from "react";
import { setVolunteer } from "../../api/user";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate} from "react-router-dom";

const Cstbutton = ({ text, type }) => {
  return (
    <button className="bg-[#E91E63] mt-3 text-white font-monserrat font-bold py-2 px-4 rounded" type={type} >
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
          className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg w-[240px] lg:w-[390px] px-5 py-3"
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
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { user, setUser } = useAppState();
  const [phoneError, setPhoneError] = useState("");
  const [isPhoneValid, setisPhoneValid] = useState(false);

  const navigate = useNavigate();


  const handlePhoneChange = (value) => {
    setPhone(value);
    const regex = /^[0-9]{10}$/;
    setisPhoneValid(regex.test(value));
    setPhoneError(regex.test(value) ? "" : "Please enter a valid 10-digit phone number.");
  }

  async function handleVolunteer(e) {
    e.preventDefault();
    if (!isPhoneValid) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }
    try {
      const data = { phone, address };
      const res = await setVolunteer(data);
      console.log(res);
      toast.success("You are now a volunteer" || res?.message, { position: "top-center" });
      setUser((prev) => ({
        ...prev,
        is_volunteer: true
      }));
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong", { position: "top-center" });
    }
  }

  return (
    <div>
      <div className="relative h-[460px] lg:h-[56vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./images/img2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative flex flex-col justify-center items-center text-white font-bold text-[30px] md:text-[52px] gap-6 font-monserrat h-full">
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
        <div className="p-8 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-[20px] md:text-[36px] font-bold font-monserrat">
            Why Volunteer With{" "}
            <span className="text-[#F70059]"> Kindness Corner</span>
          </h1>
          <h2 className="font-monserrat text-[8px] md:text-[16px]">
            "Join us in making a difference through Kindness Corner, where every volunteer
            <br /> effort amplifies our impact and spreads compassion. Together,
            we can transform lives and build a stronger,
            <br /> more caring community."
          </h2>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {!user ? (
        <div className="m-4">
          
          <Link to="/register">
          <Cstbutton text="Register Here!"  /></Link>
          
        </div>
      ) : user?.is_volunteer ? (
        <div className="m-4 pb-8">
          <span className="inline-block font-courier border-4 border-green-600 transform rotate-[-8deg] text-green-600 font-bold uppercase tracking-wide px-4 py-2 rounded-lg text-[11px] md:text-2xl">
            Already Volunteer!
          </span>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center m-4 p-6">
          <h1 className="font-monserrat font-bold text-[20px] md:text-[36px]">
            Register For the Volunteer
          </h1>
          <form className="flex flex-col gap-2" onSubmit={handleVolunteer}>
            <CustomInput
              label="Phone"
              type="phone"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
            {phoneError && <p className="text-red-500">{phoneError}</p>}
            <CustomInput
              label="Address"
              type="textarea"
              value={address}
              placeholder="Enter Your Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Cstbutton text="Submit" type="submit" />
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
