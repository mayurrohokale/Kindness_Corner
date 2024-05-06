import { Link } from "react-router-dom";


const Cstbutton = ({ text }) => {
  return (
    <button className="bg-[#2196F3] mt-3 w-full text-white font-bold py-3 rounded">
      {text}
    </button>
  );
};

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <div className=" flex flex-col gap-1">
        <label className="text-start">{label}</label>
  
        <input
          className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-5 py-3"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default function Register() {
  return (
    <div className="container flex justify-center items-center h-screen p-4 ">
      <div className="shadow-2xl border border-gray-400 hover:border-blue-500 p-10 rounded-md flex-col flex md:flex-row gap-12 ">
        <div>
        <h1 className="font-bold text-2xl">Register!</h1>
          <form action="/login" method="post">
            <div className="text-start flex flex-col gap-2">
            <CustomInput label="User Name" type="text" placeholder={"John Doe"} />
              <CustomInput label="Email" type="text" />            
              <CustomInput
                label="Password"
                type="password"
                placeholder={"Enter your password"}
              />
              <CustomInput label="Confirm Password" type="password" placeholder={"Re-Enter Passsword"} />
            </div>
            <Cstbutton text={"SignUp"} />
          </form>
          <p>Aleready Registered?<Link to="/login">Login Here!</Link></p>
        </div>

        {/* If user is logged in, display logout button */}
        <div className="w-[200px] h-200px]">
          <img src="./images/img7.jpg" className="rounded-lg " alt="wg" />
        </div>
      </div>
    </div>
  );
}
