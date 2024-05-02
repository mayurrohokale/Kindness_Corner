

export default function Worksform() {
    

    return (
      <div className=" flex flex-col md:flex-row justify-center py-2  w-full  hover:shadow-lg">
        <div className="w-full flex flex-col gap-2 md:max-w-[391px] md:h-max  rounded-lg hover:border-blue-500 border-black p-3">
          <img
            src="./images/img1.jpg"
            alt="ngoimage"
            className="object-contain w-full max-h-[200px] "
          />
         
          <div className="w-full flex flex-col items-center p-2">
            <p className="text-start  max-w-[300px] text-black/60">
            Your Donation can help to provide food to people who are struggling to feed themselves and their families 
            </p>
          </div>
          <h1 className=" font-bold text-xl text-start underline pt-8 px-1 ">READ MORE</h1>
          
        </div>
      </div>
    );
}



