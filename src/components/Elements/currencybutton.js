import { useState } from "react";

export default function Currencybutton({text}){
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
    
    return(
        <button
        className={`border border-[#2196F3] w-[134px] h-[52px] px-2 py-2 font-itim text-[25px] ${clicked ? 'bg-[#2196F3] text-white border-black' : ''}`}
        onClick={handleClick}
      >
        {text}
      </button>
    )
}