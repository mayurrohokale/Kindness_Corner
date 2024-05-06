import { Link } from "react-router-dom";



const Cstbutton = ({ text }) => {
  return (
    <button className="bg-[#2196F3] mt-3 text-white font-bold py-2 px-6  rounded text-xl">
      {text}
    </button>
  );
};

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <div className="">
        <label className="flex flex-col gap-1 ">{label}</label>
        
        <input
          className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg  px-10 py-3"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default function Login() {
  return (
    <div className="flex justify-center items-center md:h-screen p-4 ">
      <div className="shadow-2xl border border-gray-400 hover:border-blue-500 p-5 md:p-10 rounded-md flex-col flex md:flex-row gap-12 ">
        <div>
          <h1 className="font-bold text-3xl">Login</h1>
          <form action="/login" method="post">
            <div className="text-start flex flex-col gap-2">
              <CustomInput label="Email" type="text" />
              <CustomInput
                label="Password"
                type="password"
                placeholder={"Enter your password"}
              />
            </div>
            <Cstbutton text={"Sign In"} />
          </form>
          <p>
            Not Registered? <Link to="/register">Register Now!</Link>
          </p>
        </div>

        {/* If user is logged in, display logout button */}
        <div className=" hidden  md:flex items-center max-w-[270px] w-full md:w-[200px] h-200px] ">
          <img src="./images/img6.jpg" className="rounded-lg flexx justify-center items-center " alt="wg" />
        </div>
      </div>
    </div>
  );
}
