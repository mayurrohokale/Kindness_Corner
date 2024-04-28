export default function Custombutton({ text, theme }) {
  return (
    <button
      className={` border w-[199px] h-[59px] text-[25px] ${
        theme === "blue"
          ? "  border-black    bg-[#2196F3]  text-white"
          : "bg-white text-[#2196F3] border-[#2196F3]"
      } px-4 py-2 font-monserrat font-semibold`}
    >
      {text}
    </button>
  );
}
