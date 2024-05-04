import "./App.css";

import Main from "./components/Home/Main";
import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Donation from "./components/Donate/Donation";
import Volentier from "./components/Home/Volentier";
import Completedworks from "./components/Home/Completedworks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/transaction" element={<Volentier/>}/>
            <Route path="/works" element={<Completedworks/>}/>

          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
