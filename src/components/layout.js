import Header from "./Home/Header";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMe } from "./api/user";
import AppStateContext from "../utils/appState";
import Notification from "../components/Elements/Notificationbar";

export default function Layout({ children }) {
  const [amount, setAmount] = useState(0);
  const [payment_type, setPaymentType] = useState("one_time");
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState(""); 
  const [notificationMessage, setNotificationMessage] = useState("This is a notification message!");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  async function fetchProfile() {
    try {
      const data = await getMe();
      if (data) {
        setUser(data?.user);
        setUserStatus(data?.user?.status); // Set user status
        if (data?.user?.status === 'false') {
          handleLogout(); // Handle logout if user status is 'false'
        }
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  useEffect(() => {
    fetchProfile();
    // const intervalId = setInterval(fetchProfile, 3000);
    // return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (user && location.pathname === '/login') {
      navigate('/');
    }
  }, [user, location, navigate]);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setUserStatus('false');
    navigate('/login'); 
  };

  const value = {
    amount,
    setAmount,
    payment_type,
    setPaymentType,
    user,
    setUser,
    userStatus,
    setUserStatus, 
    menuOpen,
    setMenuOpen,
    showDropdown,
    setShowDropdown

  };

  function CloseMenuandDropDown(){
    setMenuOpen(false);
    setShowDropdown(false);
  }

  return (
    <div className="flex flex-col min-h-screen" onClick={CloseMenuandDropDown}>

      <AppStateContext.Provider value={value}>
        <Header />
        <div className="flex-1 pt-12 md:pt-20">{children}</div>
      </AppStateContext.Provider>
    </div>
  );
}
