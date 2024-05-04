import React, { useState } from 'react';

const Cstbutton = ({text}) =>{
    return(
        <button className='bg-[#E91E63] mt-3 text-white font-bold py-2 px-4 rounded'>{text}</button>
    )
}

const CustomInput = ({ label, type }) => {
    return (
        <div>
            <label>{label}</label><br />
            <input className='border border-black' type={type} />
        </div>
    );
};

export default function Donation() {
    const [isNamedDonation, setIsNamedDonation] = useState(true);

    const handleNamedDonationClick = () => {
        setIsNamedDonation(true);
    };

    const handleAnonymousDonationClick = () => {
        setIsNamedDonation(false);
    };

    return (
        <div>
            <h1 className="text-center mt-5 font-bold">
                Make a donation to support our mission!
            </h1>
            <div className="flex justify-center mt-5 font-bold font-monserrat">
                <button className={`mx-2 px-4 py-2 rounded ${isNamedDonation ? 'bg-[#2196F3] text-white' : 'bg-white text-[#2196F3] border border-[#2196F3] '}`} onClick={handleNamedDonationClick}>Named Donation</button>
                <button className={`mx-2 px-4 py-2 rounded ${!isNamedDonation ? 'bg-[#2196F3] text-white' : 'bg-white text-[#2196F3] border border-black'}`} onClick={handleAnonymousDonationClick}>Anonymous Donation</button>
            </div>
            {isNamedDonation ? (
                <form>
                    {/* Form for named donation */}
                    <CustomInput label="Name" type="text" />
                    <CustomInput label="Amount" type="text" />
                   <Cstbutton text="Donate"/>
                </form>
            ) : (
                <form>
                    {/* Form for anonymous donation */}
                    <CustomInput label="Amount" type="text"/>
                    <Cstbutton text="Donate"/>
                </form>
            )}
        </div>
    );
}
