import React, { useState, useEffect } from "react";
import { getDonationForm } from "../../api/user";
import { Link } from "react-router-dom";
import { ScaleLoader } from 'react-spinners';
import { Poll } from "./votingform";

export default function AllCampaigns() {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDonationForm();
      const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setDonationData(sortedData);
      console.log(sortedData);
    }
    fetchData();
  }, []);

  if (!donationData || donationData.length === 0) {
    return <div className="h-12 mt-11"><ScaleLoader color="#E91E63" /></div>;
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center py-10 mt-4">
      {donationData.map((donation) => (
        <div key={donation._id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 flex flex-col gap-2 border-2 rounded-lg hover:border-blue-500 border-black p-3 hover:scale-105 hover:shadow-lg">
          <img
            src={donation.image}
            alt="ngoimage"
            className="object-fit w-full h-[200px] "
          />
          <h1 className="font-monserrat text-center font-bold">{donation.title}</h1>
          <div className="w-full flex flex-col items-center">
            <p className="text-center max-w-[300px] text-black/60 h-10 truncate">
              {donation.description}
            </p>
          </div>
          <h1 className="font-bold text-xl text-center">{donation.amount}</h1>
          <div>
            <Poll voteFormId={donation._id} /> {/* Pass the appropriate voteFormId */}
          </div>
          <Link to={`/donationdetail/${donation._id}`} className="text-blue-500 underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

