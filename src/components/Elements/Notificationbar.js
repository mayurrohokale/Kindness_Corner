import { ImCross } from "react-icons/im";




const Notification = ({ message, isVisible, handleClose }) => {
 
  return (
    isVisible && (
        <div className="fixed top-0 left-0 right-0  bg-[#128AED] font-josiefin text-white py-2 px-2 lg:px-4 flex text-center items-start gap-5 md:items-center justify-between">
        <div className=" text-center ">
          <span>
            {message}
          </span>
        </div>        
        <button onClick={handleClose} className="text-[8px] right-0 lg:text-xs font-bold w-5 mt-2 md:mt-0 ">
          <ImCross  />
        </button>
      </div>
      
    )
  );
};

export default Notification;
