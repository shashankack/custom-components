import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/CollapsibleHeader/Header";

const App = () => {
  const navLinks = [
    { name: "Home", link: "/#" },
    { name: "About", link: "#about" },
    {
      name: "Services",
      link: "#services",
      children: [
        { name: "Web Development", link: "#web-development" },
        { name: "Mobile Development", link: "#mobile-development" },
      ],
    },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Router>
      <Header navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
