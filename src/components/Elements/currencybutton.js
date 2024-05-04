
export default function Currencybutton({text, value, onClick, isSelected=false,}) {
  //   const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };
    
    return(
        <button
        className={`border border-[#2196F3] w-[87px] md:w-[134px] px-2 py-2 font-itim text-[16px] md:text-[25px] ${isSelected ? 'bg-[#2196F3] text-white border-black' : ''}`}
        onClick={onClick}
        value={value}
      >
        {text}
      </button>
    )
}