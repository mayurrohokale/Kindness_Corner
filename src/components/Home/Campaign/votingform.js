import React, { useState } from "react";

export default function Votingform() {
    

    return (
      <div className=" flex flex-col md:flex-row justify-center py-2  w-full  hover:shadow-lg">
        <div className="w-full flex flex-col gap-2 md:max-w-[391px] md:h-max border-2 rounded-lg hover:border-blue-500 border-black p-3">
          <img
            src="./images/img1.jpg"
            alt="ngoimage"
            className="object-contain w-full max-h-[200px] "
          />
          <h1 className=" font-monserrat text-center font-bold  ">
            Food for thought
          </h1>
          <div className="w-full flex flex-col items-center">
            <p className="text-center  max-w-[300px] text-black/60">
              Sevadeep foundation feed 1000 homeless people at New York street
              next week!
            </p>
          </div>
          <h1 className=" font-bold text-xl text-center">Rs. 10000</h1>
          <div className="">
            <Poll />
          </div>
        </div>
      </div>
    );
}



const Poll = () => {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  const handleVote = (option) => {
    if (option === "yes") {
      setYesVotes((prevVotes) => prevVotes + 1);
    } else if (option === "no") {
      setNoVotes((prevVotes) => prevVotes + 1);
    }
  };

  const totalVotes = yesVotes + noVotes;
  const yesPercentage =
    totalVotes === 0 ? 0 : ((yesVotes / totalVotes) * 100).toFixed(2);
  const noPercentage =
    totalVotes === 0 ? 0 : ((noVotes / totalVotes) * 100).toFixed(2);

  return (
    <div>
      <div className="justify-center ">
        <p className="text-start font-bold">Total votes: {totalVotes}</p>
        <div className=" flex flex-row justify-between">
          <div className="text-start">
            <span className="">Yes: </span>
            <span>{yesPercentage}%</span>
          </div>
          <div className="text-end">
            <span>No: </span>
            <span>{noPercentage}%</span>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#D9D9D9",
            display: "inline-block",
          }}
          className="rounded-lg "
        >
          <div
            style={{
              width: `${(yesVotes / totalVotes) * 100}%`,
              backgroundColor: "#2196F3",
              height: "20px",
            }}
            className="rounded-lg"
          ></div>
        </div>
      </div>

      <div className=" flex flex-row justify-between py-2 text-xl md:text-[25px]">
        <button
          className="bg-[#2196F3] px-8 py-1 font-bold border  rounded-lg  border-black/50 text-white "
          onClick={() => handleVote("yes")}
        >
          Donate
        </button>
        <button
          className="text-end font-bold  px-8 border rounded-lg border-black/50 py-1 shadow-lg "
          onClick={() => handleVote("no")}
        >
          No
        </button>
      </div>
    </div>
  );
};