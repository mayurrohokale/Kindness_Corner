export default function Custombutton({ text, theme, onClick, value}) {
  return (
    <button
      className={` border w-[130px] md:w-[199px] py-2 text-[15px] md:text-[25px] ${
        theme === "blue"
          ? "  border-black    bg-[#128AED]  text-white"
          : "bg-white text-[#128AED] border-[#128AED]"
      } px-4 py-2 font-monserrat font-semibold`}
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  );
}
