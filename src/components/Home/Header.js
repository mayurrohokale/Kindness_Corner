import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAppState } from "../../utils/appState";


const MENU_ITEMS = [
  { title: "Home", path: "home" },
  { title: "Donate", path: "donate" },
  { title: "Transactions", path: "transaction" },
  { title: "Works", path: "works" },
  { title: "Vote", path: "vote" },
];

export const DropdownMenu = ({ user, handleLogout }) => {
  return (
    <div className="absolute top-full right-0 mt-2 w-30 bg-white border border-gray-200 rounded-md shadow-lg z-10 ">
      <div className="py-2">
        {user ? (
          <>
            <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-[#F70059] hover:underline">
              Profile
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
              Signup
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { user, setUser } = useAppState();
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  
  };

  return (
    <div className="">
      <div className="relative">
        <header
          className="md:bg-inherit text-black md:text-black px-2 md:px-10 xl:px-5 z-10 shadow-xl border-x-2 font-medium"
          id="home"
        >
          <div className="flex flex-row justify-between w-full items-center">
            <div className="logo text-lg md:text-2xl font-bold">
              <Link to="/" className="cursor-pointer">
                <img
                  src="./images/logo.png"
                  alt="logo"
                  className="w-28 md:w-36 p-2"
                />
              </Link>
            </div>

            <nav className="lg:flex hidden">
              <ul className="flex gap-10 items-start text-2xl font-Roboto">
                {MENU_ITEMS.map(({ path, title }) => (
                  <li
                    className="transform hover:scale-110 hover:underline hover:text-[#E91E63]"
                    key={title}
                  >
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex justify-end items-center p-4 bg-gray-100">
              <div className="relative cursor-pointer group" onClick={toggleDropdown}>
                <div className="flex items-center">
                  <span className="mr-2 text-[32px]">
                    <FiUser />
                  </span>
                  <span className="flex flex-col ">
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
              className="lg:hidden cursor-pointer text-lg text-[#E91E63] flex items-center"
              onClick={toggleMenu}
            >
              <MdMenu className="mr-1" /> MENU
            </div>
          </div>
        </header>
      </div>
      <div className="absolute top-17 right-3 sm:right-5 z-30">
        {menuOpen && (
          <nav className="lg:hidden flex flex-col items-start bg-white border shadow-lg p-3 w-32">
            <ul className="flex flex-col gap-3 items-start text-sm font-semibold">
              {MENU_ITEMS.map(({ path, title }) => (
                <li
                  className="hover:underline hover:text-[#E91E63]"
                  key={title}
                >
                  <Link to={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
 