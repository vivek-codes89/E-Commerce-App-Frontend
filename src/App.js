import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer"; 
import Banner from "./components/Banner";
import ProductDetails from "./pages/ProductDetails";
import { Shop } from "@mui/icons-material";

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainContent />
      <Footer />
    </Router>
  );
};

// Extract the main content to manage conditional rendering of Banner
const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Banner />} {/* Show Banner only on Home */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
