import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const faqs = [
    {
      question: "how can i make Donation?",
      answer:
        "You can Simply go to Donation page where you can donate Nomously or Anonymously",
    },
    {
      question: "How does the Donation System Work?",
      answer:
        "Our donation Voting system allows user to vote for preferred NGO from a list of options if the vote ratio is above 51% then money will disburseed to that NGO",
    },
    {
      question: "How can i trust that my donation will be used transparently?",
      answer:
        "We ensure transparency by providing real-time transactions system on how funds are being transffered and recieved and you have authority to donate the money from list of options of NGO",
    },
    {
      question: "Can I suggest an NGO that is not on list?",
      answer:
        "Absolutely! We welcome suggestions for NGOs that you would like to see included. just fill out the add NGO Form in the NGO page",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "We work withregistered NGOs that are eligible for tax deductions. You will recieve a donation reciept that you can use for tax purpose.",
    },
    {
      question: "How often can i vote for an NGO?",
      answer:
        "You can vote once for each donation cycle. We believe in giving everyone equal opportunity to support their preffered cause.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq ">
      <div className="pt-8 pb-2">
        <h1 className="font-bold pb-4 text-[26px] md:text-[35px]">
          Frequently Asked Questions ?
        </h1>
        <hr border border-black />
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
            <div className="answer pb-2 px-14 md:px-32 cursor-pointer text-black  text-[10px] md:text-[18px] italic ">
              {faq.answer}
              <hr className="border border-gray-400 border-spacing-1 " />
            </div>
          )}
        </div>
      ))}

      <div className="mt-6 max-w-screen text-white  bg-gray-800  font-itim md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between  ">
          <div className="md:items-center justify-center flex flex-col">
            <img
              src="./images/logo4.png"
              alt="logo"
              className="w-36 md:w-44 p-1 mt-0 md:p-2 md:py-8 "
            />
            <p>Pune, India</p>
            <p>kindness@mail.com</p>
            <p> +91 1234567890</p>
          </div>

          <div className="py-4">
            <h1 className="font-bold font-monserrat py-2">Quick Links</h1>
            <ul className="flex flex-col  md:justify-between md:items-center">
              <li className="py-2">
                <Link
                  to="/donation"
                  className="text-white hover   
                            underline"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/ngo" className="text-white hover underline">
                  NGO
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/about"
                  className="text-white hover underline
                            "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h1 className="font-bold py-2 font-monserrat">Help</h1>
            <div className="flex flex-col md:flex-row gap-0 md:gap-2 text-white">
              <h3>FAQ</h3>
              <h3>Privacy policy</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-0 md:gap-2 text-white">
              <h3>Acess</h3>
              <h3>Contact US</h3>
            </div>
          </div>

          <div className="py-4">
            <h1 className="font-bold py-2 font-monserrat">GET IN TOUCH</h1>
            <form>
              <input
                type="text"
                placeholder="Please Enter Name"
                className="w-full p-2 mb-2 bg-gray-700 rounded"
              />
              <input
                type="email"
                placeholder="Please Enter Email"
                className="w-full p-2 mb-2 bg-gray-700 rounded"
              />
              <button
                type="submit"
                className="w-full p-2 bg-orange-500 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr className="border border-white  " />
        <div className="flex flex-col mt-4 pb-3 md:flex-row justify-center gap-8 ">
          <div>
            <h1>@Kinder2024</h1>
            <h1>All rights Reserved</h1>
          </div>
          <div className="flex flex-row gap-8 text-[20px] pt-4 justify-center">
            <FaXTwitter />
            <SiInstagram />
            <FaLinkedin className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
