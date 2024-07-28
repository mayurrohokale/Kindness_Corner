import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  const faqs = [
    {
      question: "How can I make a donation?",
      answer:
        "You can simply go to the Donation page where you can donate anonymously or openly.",
    },
    {
      question: "How does the donation system work?",
      answer:
        "Our donation voting system allows users to vote for their preferred NGO from a list of options. If the vote ratio is above 51%, the money will be disbursed to that NGO.",
    },
    {
      question: "How can I trust that my donation will be used transparently?",
      answer:
        "We ensure transparency by providing real-time transaction systems showing how funds are being transferred and received. You have the authority to donate the money from a list of NGO options.",
    },
    {
      question: "Can I suggest an NGO that is not on the list?",
      answer:
        "Absolutely! We welcome suggestions for NGOs that you would like to see included. Just fill out the add NGO form on the NGO page.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "We work with registered NGOs that are eligible for tax deductions. You will receive a donation receipt that you can use for tax purposes.",
    },
    {
      question: "How often can I vote for an NGO?",
      answer:
        "You can vote once for each donation cycle. We believe in giving everyone an equal opportunity to support their preferred cause.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="pt-8 pb-2">
        <h1 className="font-bold pb-4 text-[26px] md:text-[35px]">
          Frequently Asked Questions
        </h1>
        <hr className="border border-black" />
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="faq-item"
          onClick={() => toggleAnswer(index)}
        >
          <div className="question font-semibold p-2 cursor-pointer text-gray-500 text-[13px] md:text-[20px]">
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="answer pb-2 px-14 md:px-32 cursor-pointer text-black text-[10px] md:text-[18px] italic">
              {faq.answer}
              <hr className="border border-gray-400" />
            </div>
          )}
        </div>
      ))}

      <div className="mt-6 bg-gray-800 text-white font-itim lg:px-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:justify-between  ">
          <div className="justify-center items-center lg:justify-start lg:items-start  flex flex-col">
            <img
              src="./images/logo4.png"
              alt="logo"
              className="w-40 md:w-52 p-1 mt-0 py-4  md:py-6"
            />
            <div className="flex flex-col items-start text-[12px] md:text-[19px] font-josiefin gap-2">
            <p className="flex flex-row gap-2"><IoLocationSharp/>  Pune, India</p>
            <p className="flex flex-row gap-2"><IoIosMail/>  kindness@mail.com</p>
            <p className="flex flex-row gap-2"><IoCall/>  +91 1234567890</p>
            </div>
            
          </div>

          <div className="py-4 font-josiefin">
            <h1 className="font-bold font-monserrat py-2 text-[15px] md:text-[22px]  ">QUICK LINKS</h1>
            <ul className="flex flex-col lg:justify-between lg:items-start text-[12px] md:text-[19px]">
              <li className="py-2">
                <Link to="/donate" className="text-white hover:underline">
                  Donate
                </Link>
              </li>
             
              <li>
                <Link to="/transaction" className="text-white hover:underline">
                  Transactions
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about" className="text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vote" className="text-white hover:underline">
                  Vote
                </Link>
              </li>
              <li className="py-2">
                <Link to="/profile" className="text-white hover:underline">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="py-4 font-josiefin">
            <h1 className="font-bold py-2 text-[27px]">Help</h1>
            <div className="flex flex-col text-white">
              <h3 className="py-1">FAQ</h3>
              <h3 className="py-1">Privacy Policy</h3>
              <h3 className="py-1">Access</h3>
              <h3 className="py-1">Contact Us</h3>
            </div>
          </div> */}

          <div className="py-4 font-josiefin">
            <h1 className="font-bold font-monserrat py-2 text-[15px] md:text-[22px] text-center lg:text-start ">HELP</h1>
            <ul className="flex flex-col lg:justify-between lg:items-start text-[12px]  md:text-[19px]">
              <li className="py-2">
                <Link to="/donate" className="text-white hover:underline">
                  FAQ
                </Link>
              </li>
            
              <li>
                <Link to="/ngo" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="py-2">
                <Link to="/allvolunteers" className="text-white hover:underline">
                   Volunteers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
        
          </div>

          <div className="py-4 px-2 items-start font-josiefin">
            <h1 className="font-bold py-2 text-center  lg:text-start text-[15px] md:text-[22px]">GET IN TOUCH</h1>
            <form className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
              <input
                type="text"
                placeholder="Please Enter Name"
                className="w-[300px] p-2 mb-2 bg-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Write your Query"
                className="w-[300px] p-2 mb-2 bg-gray-700 rounded"
              />
              <button
                type="submit"
                className="w-[300px] md:w-[160px] p-2 mb-2 bg-[#E91E63] rounded"
              >
                Submit
              </button>
            </form>
            <div className="flex flex-row gap-8 text-[20px] pt-4 justify-center lg:justify-start">
              <FaXTwitter />
              <SiInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <hr/>
        <div className="flex flex-col mt-4 pb-8 lg:flex-row justify-center gap-8">
          <div>
            <h1>@Kindness2024</h1>
            <h1>All rights Reserved</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
