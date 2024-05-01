import React, { useState } from "react";

export default function Votingform() {
    const Poll = () => {
        const [yesVotes, setYesVotes] = useState(0);
        const [noVotes, setNoVotes] = useState(0);

        const handleVote = (option) => {
            if (option === 'yes') {
                setYesVotes((prevVotes) => prevVotes + 1);
            } else if (option === 'no') {
                setNoVotes((prevVotes) => prevVotes + 1);
            }
        };

        return (
            <div>
                <div className="justify-center">
                    <span className="text-start">Yes: </span>
                    <div style={{ width: '350px', backgroundColor: 'grey', display: 'inline-block' }}>
                        <div style={{ width: `${(yesVotes / (yesVotes + noVotes)) * 100}%`, backgroundColor: '#2196F3', height: '20px' }}></div>
                    </div>
                    <span>{yesVotes}</span>
                </div>
                <div>
                    <span>No: </span>
                    <div style={{ width: '350px', backgroundColor: '#D9D9D9', display: 'inline-block' }}>
                        <div style={{ width: `${(noVotes / (yesVotes + noVotes)) * 100}%`, backgroundColor: '#918C92', height: '20px' }}></div>
                    </div>
                    <span>{noVotes}</span>
                </div>
                <div className=" flex flex-row justify-between p-4">
                <button className="bg-[#E91E63] px-8 py-1 font-bold border text-[25px] border-black " onClick={() => handleVote('yes')}>Yes  </button>
                <button className="text-end font-bold text-[25px] px-8 border border-black py-1 shadow-lg " onClick={() => handleVote('no')}>No</button>
                </div>
                
            </div>
        );
    }

    return (
        <div className=" flex flex-col md:flex-row justify-center p-2 w-full h-screen hover:shadow-lg">
            <div className=" md:w-[391px] md:h-[589px] border border-black">
                <img src="./images/img1.jpg" alt="ngoimage" className="w-[360px] h-[200px] m-4" />
                <h1 className=" font-monserrat text-start font-bold p-4">Food for thought</h1>
                <p className="text-start px-4">Sevadeep foundation feed 1000 homeless people at New York street next week!</p>
                <h1 className="px-4 py-2 font-bold text-[20px] text-start">10000</h1> 
                <div className="m-2">
                <Poll  />
                </div>
                
            </div>
           
        </div>
    );
}
