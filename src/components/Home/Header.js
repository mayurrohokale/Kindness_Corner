import React from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";


const MENU_ITEMS = [ 
    { title: 'Home', path:'home' },
    { 
        title: 'Donate', path:'donate'
    },
    {
         title: 'Transactions', path:'transaction'
    },
    {
         title: 'Works', path: 'works'
    },
    {
        title: 'Vote', path: 'vote'
    }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <div className=" relative ">
        <header
          className=" md:bg-inherit text-black md:text-black px-2 md:px-10 xl:px-5 z-10 shadow-xl border-x-2"
          id="home"
        >
          <div className="flex flex-row justify-between w-full items-center">
            <div className="logo text-lg md:text-2xl font-bold">
            <Link to="/" className="cursor-pointer">
              <img src="./images/logo.png" alt="logo" className=" w-28 md:w-32 p-2" />
              </Link>
            </div>

            <nav className="lg:flex hidden">
              <ul className="flex gap-10 text-lg items-start font-inter">
                {/* <li className=" transform hover:scale-110 hover:underline hover:text-[#E91E63]">
                  <a href="#home">Home</a>
                </li>
                <li className=" transform hover:scale-110 hover:underline hover:text-[#E91E63]">
                  <a href="#donate">Donate</a>
                </li>
                <li className=" transform hover:scale-110 hover:underline hover:text-[#E91E63]">
                  <a href="#transaction">Transactions</a>
                </li>
                <li className=" transform hover:scale-110 hover:underline hover:text-[#E91E63]">
                  <a href="#works">Works</a>
                </li>
                <li className=" transform hover:scale-110 hover:underline hover:text-[#E91E63]">
                  <a href="#angels">Angels</a>
                </li> */}
               {
                MENU_ITEMS.map(({ path, title }) => (
                    <li className=" transform hover:scale-110 hover:underline hover:text-[#E91E63]"  key={title}>
                  <Link to={path}>{title}</Link>
                </li>
               ))}
              </ul>

            </nav>

            <div className="hidden md:flex">
              <input type="text" name="search"  placeholder="Search..." className="rounded-[200px] shadow-lg border border-black p-1 md:p-2  " />
              
            </div>
            <div className="hidden  md:flex text-[35px] shadow-xl rounded-[20px]">
            <CiUser/>
            </div>
            

            <div
              className="lg:hidden cursor-pointer text-lg text-[#E91E63]  flex items-center"
              onClick={toggleMenu}
            >
              <MdMenu className="mr-1 " /> MENU
            </div>
          </div>
          {/* {menuOpen && (
            <nav className="lg:hidden flex flex-col items-end">
              <ul className="flex flex-col gap-3 items-start text-sm font-semibold">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">Donate</a>
                </li>
                <li>
                  <a href="#resume">Transactions</a>
                </li>
                <li>
                  <a href="#page-2">Skills</a>
                </li>
                <li>
                  <a href="#services">Works</a>
                </li>
                <li>
                  <a href="#projects">Angels</a>
                </li>
              </ul>
            </nav>
          )} */}
        </header>
       
      </div>
      <div className=" absolute top-17 right-3 sm:right-5 z-30">
      {menuOpen && (
            <nav className="lg:hidden flex flex-col items-start  bg-white border shadow-lg p-3 w-32 ">
              <ul className="flex flex-col gap-3 items-start text-sm font-semibold ">
                {/* <li className="hover:text-lg hover:underline hover:text-[#E91E63]">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-lg hover:underline hover:text-[#E91E63]">
                  <a href="#about">Donate</a>
                </li>
                <li className="hover:text-lg hover:underline hover:text-[#E91E63]">
                  <a href="#resume">Transactions</a>
                </li>
               
                <li className="transform hover:text-lg hover:underline hover:text-[#E91E63]">
                  <a href="#services">Works</a>
                </li>
                <li className="hover:text-lg hover:underline hover:text-[#E91E63]">
                  <a href="#projects">Angels</a>
                </li> */}
                 {
                MENU_ITEMS.map(({ path, title }) => (
                    <li className=" hover:underline hover:text-[#E91E63]" key={title}>
                  <Link to={path}>{title}</Link>
                </li>
               ))}
              </ul>
            </nav>
          )}
      </div>
      <hr className="mt-1"/>
    </div>
  );
}
