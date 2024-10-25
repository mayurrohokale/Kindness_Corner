import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAppState } from "../../utils/appState";
import Notification from "../Elements/Notificationbar";
import { FaVoteYea, FaRegHandPointRight } from "react-icons/fa";
import Swal from "sweetalert2";
import { BiSupport } from "react-icons/bi";
import { ScaleLoader } from 'react-spinners';

const MENU_ITEMS = [
  { title: "Home", path: "home" },
  { title: "Donate", path: "donate" },
  { title: "Transactions", path: "transaction" },
  { title: "Works", path: "works" },
  { title: "Vote", path: "vote" },
  { title: "Profile", path: "profile" },
  { title: "Login", path: "login" },
  { title: "Logout", path: "logout" },
  { title: "Register", path: "register" },
];

export const DropdownMenu = ({ user, handleLogout }) => {
  return (
    <div className="absolute top-full right-0 mt-2 w-30 text-[#013159] bg-white border border-gray-200 rounded-md shadow-lg z-10">
      <div className="py-2">
        {user ? (
          <>
            <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-[#F70059] hover:underline">
              <Link to="/profile">Profile</Link>
            </div>
            <div
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-[#F70059] hover:underline"
              onClick={handleLogout}
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-[#F70059] hover:underline">
              <Link to="/login">Login</Link>
            </div>
            <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-[#F70059] hover:underline">
              <Link to="/register">Register</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [showDropdown, setShowDropdown] = useState(false);
  const { user, setUser, menuOpen, setMenuOpen, showDropdown, setShowDropdown } = useAppState();
  const catchedVisibleValue = sessionStorage.getItem("isVisible") === "false";
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("isVisible", false);
  };

  useEffect(() => {
    if (!catchedVisibleValue) {
      setIsVisible(true);
    }
  }, [catchedVisibleValue]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you really sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#128AED",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setUser(null);
      }
    });
  };

  const filteredMenuItems = user
    ? MENU_ITEMS.slice(0, 5).concat(
        MENU_ITEMS.find((item) => item.title === "Profile"),
        MENU_ITEMS.find((item) => item.title === "Logout")
      )
    : MENU_ITEMS.slice(0, 5).concat(
        MENU_ITEMS.find((item) => item.title === "Login"),
        MENU_ITEMS.find((item) => item.title === "Register")
      );

  return (
    <div className="bg-transparent">
      <div className="relative bg-white">
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <Notification
            message={
              <div className="flex flex-row my-auto text-center items-start md:items-center text-[10px] lg:text-[18px]">
                <FaVoteYea className="w-10 mt-2 md:mt-0" />
                <h1>{"Vote on our latest initiatives to shape the future!"}</h1>
                <FaRegHandPointRight className="w-5 md:w-10 mt-2 md:mt-0" />
                <h2 className="underline">
                  <Link to="/vote">Vote Now!</Link>
                </h2>
              </div>
            }
            isVisible={isVisible}
            handleClose={handleClose}
          />
        </div>

        <header
          className={`bg-white fixed ${
            isVisible ? "top-10" : "top-0"
          } left-0 right-0 md:bg-inherit text-black md:text-black px-2 md:px-10 xl:px-5 z-50 border-x-2 font-medium`}
          id="home"
        >
          <div className="flex flex-row justify-between w-full items-center">
            <div className="logo text-lg md:text-2xl font-bold">
              <Link to="/" className="cursor-pointer">
                <img
                  src="./images/logo3.png"
                  alt="logo"
                  className="w-28 md:w-36 p-2"
                />
              </Link>
            </div>

            <nav className="lg:flex hidden">
              <ul className="flex gap-10 items-start text-[22px] font-sans font-semibold text-[#013159]">
                {MENU_ITEMS.slice(0, 5).map(({ path, title }) => (
                  <li
                    className="transform hover:scale-110 hover:underline hover:text-[#E91E63]"
                    key={title}
                  >
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex justify-end items-center p-4 bg-gray-100">
              <div
                className="relative cursor-pointer group"
                onClick={toggleDropdown}
              >
                <div className="flex items-center">
                  <span className="mr-2 text-[32px] text-[#013159]">
                    <FiUser />
                  </span>
                  <span className="flex flex-col text-[#013159]">
                    {user ? (
                      <>
                        <span className="text-sm">hello</span>
                        <span className="text-base">{user.name}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm">hello</span>
                        <span className="text-base">Login</span>
                      </>
                    )}
                  </span>
                </div>
                {showDropdown && (
                  <DropdownMenu user={user} handleLogout={handleLogout} />
                )}
              </div>
            </div>

            <div
              className="lg:hidden cursor-pointer text-[25px] text-[#E91E63] flex items-center"
              onClick={toggleMenu}
            >
              <MdMenu className="mr-1" />
            </div>
          </div>
        </header>
      </div>
      <div className="fixed top-12 right-0 z-30">
        {menuOpen && (
          <nav className="lg:hidden flex flex-col items-start bg-white border shadow-lg p-3 w-32">
            <ul className="flex flex-col gap-3 items-start text-sm font-semibold">
              {filteredMenuItems.map(({ path, title }) => (
                <li
                  className="hover:underline hover:text-[#E91E63] cursor-pointer"
                  key={title}
                  onClick={title === "Logout" ? handleLogout : null}
                >
                  {title === "Logout" ? "Logout" : <Link to={path}>{title}</Link>}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
