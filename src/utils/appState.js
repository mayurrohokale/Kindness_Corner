import React from "react";

const defaultValue = {
    amount: 0,
    setAmount: () => {},
    payment_type: "one_time",
    setPaymentType: () => {},
    user: {},
    setUser: () => {},
    volunteer: {},
    setVolunteer: ()=> {},
    user_status: {},
    setUserStatus: () => {},
    isMenuOpen: () => {},
    setisMenuOpen: false,
    showDropdown: false,
    setShowDropdown: () => {}

};

const AppStateContext = React.createContext(defaultValue);

export const useAppState = () => React.useContext(AppStateContext);

export default AppStateContext;
