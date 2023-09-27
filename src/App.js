import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/homepage";
import ProductsData from "./components/products/index";
import ProductsDetails from "./components/products/details";
import ContactUS from "./pages/contactus";
import LogSignIn from "./pages/login/signin";
import LogSignUp from "./pages/login/signup";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }
  return (
    !loading && (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/items/:slug" element={<ProductsData />} />
          <Route path="/products/details/:slug" element={<ProductsDetails />} />
          <Route path="/contact/" element={<ContactUS />} />
          <Route path="/user/login" element={<LogSignIn />} />
          <Route path="/register/user" element={<LogSignUp />} />
        </Routes>
        <Footer />
      </>
    )
  );
}

export default App;
