import React from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
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
              <img src="./images/logo.png" alt="logo" className=" w-28 md:w-32 p-2" />
            </div>

            <nav className="lg:flex hidden">
              <ul className="flex gap-10 text-lg items-start font-inter">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#donate">Donate</a>
                </li>
                <li>
                  <a href="#transaction">Transactions</a>
                </li>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#angels">Angels</a>
                </li>
              </ul>
            </nav>

            <div className="hidden md:flex">
              <button>Search</button>
            </div>

            <div
              className="lg:hidden cursor-pointer text-lg text-gray-400  flex items-center"
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
      <div className=" absolute top-17 right-3 sm:right-5 ">
      {menuOpen && (
            <nav className="lg:hidden flex flex-col items-end  bg-black/20 p-3 ">
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
          )}
      </div>
    </div>
  );
}
