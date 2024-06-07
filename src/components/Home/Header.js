import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { title: "Home", path: "home" },
  {
    title: "Donate",
    path: "donate",
  },
  {
    title: "Transactions",
    path: "transaction",
  },
  {
    title: "Works",
    path: "works",
  },
  {
    title: "Vote",
    path: "vote",
  },
];

export const getUserData = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");
  return { userEmail, userName };
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState({ userEmail: "", userName: "" });

  useEffect(() => {
    const userData = getUserData();
    setUser(userData);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <div className=" relative ">
        <header
          className=" md:bg-inherit text-black md:text-black px-2 md:px-10 xl:px-5 z-10 shadow-xl border-x-2 font-medium "
          id="home"
        >
          <div className="flex flex-row justify-between w-full items-center">
            <div className="logo text-lg md:text-2xl font-bold">
              <Link to="/" className="cursor-pointer">
                <img
                  src="./images/logo.png"
                  alt="logo"
                  className=" w-28 md:w-36 p-2"
                />
              </Link>
            </div>

            <nav className="lg:flex hidden">
              <ul className="flex gap-10  items-start  text-2xl font-Roboto ">
               
                {MENU_ITEMS.map(({ path, title }) => (
                  <li
                    className=" transform hover:scale-110 hover:underline hover:text-[#E91E63]"
                    key={title}
                  >
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* <div className="hidden md:flex ">
              <input type="text" name="search"  placeholder="Search..." className="rounded-[200px] shadow-lg border border-black px-5 py-2 " />
              
            </div> */}
            <div className="hidden  md:flex text-[35px] shadow-xl rounded-[20px]">
              <div>
                <Link to="login">
                  <CiUser />
                </Link>
                {/* <h1> {user.userName}</h1>
                <p> {user.userEmail}</p> */}
              </div>
            </div>

            <div
              className="lg:hidden cursor-pointer text-lg text-[#E91E63]  flex items-center"
              onClick={toggleMenu}
            >
              <MdMenu className="mr-1 " /> MENU
            </div>
          </div>
         
        </header>
      </div>
      <div className=" absolute top-17 right-3 sm:right-5 z-30">
        {menuOpen && (
          <nav className="lg:hidden flex flex-col items-start  bg-white border shadow-lg p-3 w-32 ">
            <ul className="flex flex-col gap-3 items-start text-sm font-semibold ">
             
              {MENU_ITEMS.map(({ path, title }) => (
                <li
                  className=" hover:underline hover:text-[#E91E63]"
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
