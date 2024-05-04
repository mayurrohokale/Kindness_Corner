import Header from "./Home/Header";
import { useState } from "react";
import AppStateContext from "../utils/appState";
export default function Layout({ children }) {
  const [amount, setAmount] = useState(0);
  const [payment_type, setPaymentType] = useState("one_time");

  const value = {
    amount,
    setAmount,
    payment_type,
    setPaymentType,
  };

  return (
    <div className=" max-w-[1536px] flex justify-center flex-col mx-auto">
      <AppStateContext.Provider value={value}>
        <Header />
        <div>{children}</div>
      </AppStateContext.Provider>
    </div>
  );
}
