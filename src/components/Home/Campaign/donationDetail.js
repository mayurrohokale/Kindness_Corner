import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getDonationFormById,
  hasVoted,
  getCurrentVotes,
  castVote,
} from "../../api/user";
import { FaCalendarAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB"); // Format as "dd/mm/yyyy"
};

export default function DonationDetail() {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDonationFormById(id);
        setDonation(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching donation form by ID", error);
      }
    }
    fetchData();
  }, [id]);

  if (!donation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="flex flex-col lg:flex-row w-full max-w-[800px]">
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={donation.image}
            alt="ngoimage"
            className="object-contain w-full max-h-[200px]"
          />
          <div className="pt-8 font-inter">
            <p className="text-justify">{donation.description}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="font-monserrat text-start font-bold">
            {donation.title}
          </h1>
          <h2 className="text-start pt-4">{donation.contact}</h2>
          <h2 className="flex items-center gap-2">
            <FaCalendarAlt className="mt-1 text-[#E91E63]" />
            {formatDate(donation.eventFromDate)} to{" "}
            {formatDate(donation.eventToDate)}
          </h2>
          <h1 className="flex items-center gap-1 font-bold text-xl text-start pt-2">
            <RiMoneyRupeeCircleFill className="mt-1 text-[#E91E63]" />
            {donation.amount}
          </h1>
          <div>
            <Poll voteFormId={donation._id} /> {/* Pass the appropriate voteFormId */}
          </div>
          <hr />
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
  const [message, setMessage] = useState("");

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
              height: "10px",
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
