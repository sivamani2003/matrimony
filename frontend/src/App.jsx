// import { useState } from "react";

import "./App.css";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import FindPartner from "./Pages/FindPartner/FindPartner";
import Guide from "./Pages/Guide/Guide";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registration";
import ResetPassword from "./Pages/Authentication/ResetPassword";
import { Toaster } from "react-hot-toast";


import Page_404 from "./Pages/404/Page_404";

Toaster;
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

        {" "}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/findpartner" element={<FindPartner />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/reset" element={<ResetPassword />} />

              <Route path="/*" element={<Page_404 />} />
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
