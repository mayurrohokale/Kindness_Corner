import React, { useState, useEffect } from "react";
import {
  castVote,
  hasVoted,
  getCurrentVotes,
  getDonationForm,
} from "../../api/user";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { ScaleLoader } from "react-spinners";
import { FaVoteYea } from "react-icons/fa";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB");
};

export default function Votingform() {
  const [donationData, setDonationData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getDonationForm();
      setDonationData(data);
      console.log(data);
    }
    fetchData();
  }, []);

  if (!donationData || donationData.length === 0) {
    return (
      <div className="h-14">
        <ScaleLoader color="#E91E63" />
      </div>
    );
  }

  return (
    <div className="flex mb-8 flex-col lg:flex-row gap-4 h-auto justify-center py-2 w-full ">
      {donationData
        .slice(0, showAll ? donationData.length : 3)
        .map((donation) => (
          <div
            key={donation._id}
            className="w-full flex flex-col gap-2 md:max-w-[391px] md:h-max border-2 rounded-lg hover:border-blue-500 border-black p-3 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={donation.image}
              alt="ngoimage"
              className="object-fit w-full h-[200px]"
            />
            <h1 className="font-monserrat text-start font-bold">
              {donation.title}
            </h1>
            <div className="w-full flex flex-col items-start text-black/60">
              <p className="text-start max-w-[300px] h-10 truncate">
                {donation.description}
              </p>
              <h1>{donation.contact}</h1>
            </div>
            <h2 className="flex flex-row gap-2">
              <FaCalendarAlt className="mt-1 text-[#E91E63]" />
              {formatDate(donation.eventFromDate)} to{" "}
              {formatDate(donation.eventToDate)}
            </h2>
            <h1 className="flex flex-row gap-1 font-bold text-xl text-start">
              <RiMoneyRupeeCircleFill className="mt-1 text-[#E91E63]" />{" "}
              {donation.amount}
            </h1>
            <div>
              <Poll voteFormId={donation._id} />{" "}
              {/* Pass the appropriate voteFormId */}
            </div>
            <Link
              to={`/donationdetail/${donation._id}`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
    </div>
  );
}

export const Poll = ({ voteFormId }) => {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const [hasVotedStatus, setHasVotedStatus] = useState(false);
  const [userVote, setUserVote] = useState(null);
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

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

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "You have successfully voted",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  const totalVotes = yesVotes + noVotes;
  const yesPercentage =
    totalVotes === 0 ? 0 : ((yesVotes / totalVotes) * 100).toFixed(2);
  const noPercentage =
    totalVotes === 0 ? 0 : ((noVotes / totalVotes) * 100).toFixed(2);

  return (
    <div className="">
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
              height: "6px",
            }}
            className="rounded-lg"
          ></div>
        </div>
      </div>
      <div className="flex flex-row justify-between font-Roboto font-semibold py-2 text-xl md:text-[25px]">
        {token ? (
          !hasVotedStatus ? (
            <>
              {/* <button
                className="bg-[#2196F3] px-8 py-1 font-bold border rounded-lg border-black/50 text-white"
                onClick={() => handleVote("yes")}
              >
                Donate
              </button> */}
              <button
                className="relative bg-[#2196F3] shadow-xl w-32 px-8 py-1 font-semibold  rounded-lg text-white overflow-hidden"
                onClick={() => handleVote("yes")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span
                  className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                    isHovered ? "-translate-x-full" : "translate-x-0"
                  }`}
                >
                  Donate
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
                    isHovered ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <FaVoteYea />
                </span>
              </button>

              <button
                className="text-end px-8 border rounded-lg border-black/50 py-1  hover:shadow-xl "
                onClick={() => handleVote("no")}
              >
                No
              </button>
            </>
          ) : (
            <p className="text-[16px] pt-3 text-green-500">
              You have already voted!
            </p>
          )
        ) : (
          <p className="text-[16px] text-red-500">
            Please{" "}
            <Link to="/login" className="underline">
              Log In
            </Link>{" "}
            to vote
          </p>
        )}
      </div>
    </div>
  );
};
