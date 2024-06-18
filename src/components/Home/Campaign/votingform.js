import React, { useState, useEffect } from "react";
import { castVote, hasVoted, getCurrentVotes } from "../../api/user"; // Adjust the path as necessary

export default function Votingform() {
  return (
    <div className="flex flex-col md:flex-row justify-center py-2 w-full hover:shadow-lg">
      <div className="w-full flex flex-col gap-2 md:max-w-[391px] md:h-max border-2 rounded-lg hover:border-blue-500 border-black p-3">
        <img
          src="./images/img1.jpg"
          alt="ngoimage"
          className="object-contain w-full max-h-[200px]"
        />
        <h1 className="font-monserrat text-center font-bold">Food for thought</h1>
        <div className="w-full flex flex-col items-center">
          <p className="text-center max-w-[300px] text-black/60">
            Sevadeep foundation feed 1000 homeless people at New York street next week!
          </p>
        </div>
        <h1 className="font-bold text-xl text-center">Rs. 10000</h1>
        <div>
          <Poll voteFormId="12345" /> {/* Pass the appropriate voteFormId */}
        </div>
      </div>
    </div>
  );
}

const Poll = ({ voteFormId }) => {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const [hasVotedStatus, setHasVotedStatus] = useState(false);
  const [userVote, setUserVote] = useState(null);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkIfVoted = async () => {
      if (token) {
        try {
          const result = await hasVoted(voteFormId);
          setHasVotedStatus(result.hasVoted);
          setUserVote(result.vote);
        } catch (error) {
          setMessage(error.message);
        }
      }
    };

    checkIfVoted();

    // Fetch the current votes from the server
    const fetchCurrentVotes = async () => {
      const currentVotes = await getCurrentVotes(voteFormId);
      setYesVotes(currentVotes.yes);
      setNoVotes(currentVotes.no);
    };

    fetchCurrentVotes();
  }, [voteFormId, token]);

  const handleVote = async (option) => {
    try {
      const result = await castVote(voteFormId, option);
      setMessage(result.message);
      setHasVotedStatus(true);
      setUserVote(option);
      if (option === "yes") {
        setYesVotes((prevVotes) => prevVotes + 1);
      } else if (option === "no") {
        setNoVotes((prevVotes) => prevVotes + 1);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const totalVotes = yesVotes + noVotes;
  const yesPercentage = totalVotes === 0 ? 0 : ((yesVotes / totalVotes) * 100).toFixed(2);
  const noPercentage = totalVotes === 0 ? 0 : ((noVotes / totalVotes) * 100).toFixed(2);

  return (
    <div>
      <div className="justify-center">
        <p className="text-start font-bold">Total votes: {totalVotes}</p>
        <div className="flex flex-row justify-between">
          <div className="text-start">
            <span>Yes: </span>
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
          className="rounded-lg"
        >
          <div
            style={{
              width: `${yesPercentage}%`,
              backgroundColor: "#2196F3",
              height: "20px",
            }}
            className="rounded-lg"
          ></div>
        </div>
      </div>
      <div className="flex flex-row justify-between py-2 text-xl md:text-[25px]">
        {token ? (
          !hasVotedStatus ? (
            <>
              <button
                className="bg-[#2196F3] px-8 py-1 font-bold border rounded-lg border-black/50 text-white"
                onClick={() => handleVote("yes")}
              >
                Donate
              </button>
              <button
                className="text-end font-bold px-8 border rounded-lg border-black/50 py-1 shadow-lg"
                onClick={() => handleVote("no")}
              >
                No
              </button>
            </>
          ) : (
            <p className="text-[16px] text-green-500">You have already voted!</p>
          )
        ) : (
          <p className="text-[16px] text-red-500">Please log in to vote</p>
        )}
      </div>
    </div>
  );
};
