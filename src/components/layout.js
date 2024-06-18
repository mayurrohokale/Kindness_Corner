import Header from "./Home/Header";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMe } from "./api/user";
import AppStateContext from "../utils/appState";
export default function Layout({ children }) {
  const [amount, setAmount] = useState(0);
  const [payment_type, setPaymentType] = useState("one_time");

  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();



  async function fetchProfile(){
    const data = await getMe()
    if (data) {
      setUser(data?.user);
    }
  }
  useEffect( ()=> {
    fetchProfile();

  }, [])

  useEffect( ()=>{
    if(user && location.pathname === '/login'){
      navigate('/');
    }
    // if(user && location.pathname === '/profile'){
    //   navigate('/');
    // }
  }, [user,location, navigate])


  const value = {
    amount,
    setAmount,
    payment_type,
    setPaymentType,
    user,
    setUser,
  };

  return (
    <div className=" justify-center ">
      <AppStateContext.Provider value={value}>
        <Header />
        <div className="pt-12 md:pt-20">{children}</div>
      </AppStateContext.Provider>
    </div>
  );
}
