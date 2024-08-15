import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getDonationFormById,
 
} from "../../api/user";
import { FaCalendarAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Poll } from "./votingform";

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

