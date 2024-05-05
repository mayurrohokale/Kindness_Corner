
const Cstbutton = ({ text }) => {
  return (
    <button className="bg-[#2196F3] mt-3 text-white font-bold py-2 px-4 rounded">
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
          className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg h-[30px] w-[240px] lg:w-[380px] max:w-[1536px] md:h-[40px] px-5 py-2"
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
            <div>
              <CustomInput label="Email" type="text" />
              <CustomInput
                label="Password"
                type="password"
                placeholder={"Enter your password"}
              />
            </div>
            <Cstbutton text={"SignUp"} />
          </form>
          
        </div>

        {/* If user is logged in, display logout button */}
        <div className="w-[200px] h-200px]">
          <img src="./images/img6.jpg" className="rounded-lg " alt="wg" />
        </div>
      </div>
    </div>
  );
}
