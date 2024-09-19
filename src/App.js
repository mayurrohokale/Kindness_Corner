import "./App.css";

import Main from "./components/Home/Main";
// import Layout from "./components/layout";
import {  Route, Routes } from "react-router-dom";
// import {useEffect, useState } from "react"
import Donation from "./components/Donate/Donation";
// import Volentier from "./components/Home/Volentier";
import Completedworks from "./components/Home/Completedworks";
import Campaign from "./components/Home/Campaign/Campaign";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// import { ToastContainer } from "react-toastify";
// import { getMe } from "./components/api/user";
import Volunteerform from "./components/Home/Volunteer/volunteerform";
import Profile from "./components/Home/Profile/Profile";
import AllVolunteers from "./components/Home/Volunteer/allvolunteers";
import Transactions from "./components/Donate/Transactions";
import AllCampaign from "./components/Home/Campaign/allCampaign";
import DonationDetail from "./components/Home/Campaign/donationDetail";
import AboutUS from './components/Home/About/AboutUs';
import AddBlog from './components/Home/Blogs/AddBlog';
import AllBlog from "./components/Home/Blogs/AllBlogs";
import BlogDetail from "./components/Home/Blogs/BlogDetails";
import PrivacyPolicy from "./components/Home/Policy/privacyPolicy";
import ForgotPassword from "./components/Auth/ForgotPass";
import ResetPassword from "./components/Auth/ResetPass";
import VerifyOTP from "./components/Auth/VerifyOTP";

function App() {

  // const [user, setUser] = useState(null);
  // const location = useLocation();
  // const navigate = useNavigate();



  // async function fetchProfile(){
  //   const data = await getMe()
  //   if (data) {
  //     setUser(data?.user);
  //   }
  // }
  // useEffect( ()=> {
  //   fetchProfile();

  // }, [])

  // useEffect( ()=>{
  //   if(user && location.pathname === '/login'){
  //     navigate('/');
  //   }
  // }, [user,location, navigate])






  return (
    <div className="App">
      {/* <BrowserRouter>
        <Layout> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/works" element={<Completedworks/>}/>
            <Route path="/vote" element={<Campaign/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/volunteer" element={<Volunteerform/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/allvolunteers" element={<AllVolunteers/>}/>
            <Route path="/transaction" element={<Transactions/>}/>
            <Route path="/allcampaign" element={<AllCampaign/>}/>
            <Route path="/donationdetail/:id" element={<DonationDetail/>} />
            <Route path="/aboutus" element={<AboutUS/>} />
            <Route path="/addblog" element={<AddBlog/>} />
            <Route path="/allblog" element={<AllBlog/>} />
            <Route path="/blog/:id" element={<BlogDetail/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/reset-password/:token" element={<ResetPassword/>}/>
            <Route path="/verify-otp" element={<VerifyOTP/>}/>
          </Routes>
        {/* </Layout>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
