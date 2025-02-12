import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/CollapsibleHeader/Header";
import Footer1 from "./components/Footer/Footer1";
import Footer from "./components/SM-Footer/Footer";
import ScrollComponent from "./components/ScrollComponent/ScrollComponent";
import GridGallery from "./components/GridGallery/GridGallery";

import image from "./assets/forest.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGooglePlusG,
  FaPinterest,
  FaBehance,
} from "react-icons/fa";

const App = () => {
  const headerLinks = [
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

  const navLinks = [
    {
      title: "Title 1",
      titleHref: "#title1",
      links: [
        { text: "link 1", href: "#link1" },
        { text: "link 2", href: "#link2" },
        { text: "link 3", href: "#link3" },
        { text: "link 4", href: "#link4" },
      ],
    },
    {
      title: "Title 2",
      titleHref: "#title2",
      links: [
        { text: "link 1", href: "#link1" },
        { text: "link 2", href: "#link2" },
        { text: "link 3", href: "#link3" },
        { text: "link 4", href: "#link4" },
      ],
    },
    {
      title: "Title 3",
      titleHref: "#title3",
      links: [
        { text: "link 1", href: "#link1" },
        { text: "link 2", href: "#link2" },
        { text: "link 3", href: "#link3" },
        { text: "link 4", href: "#link4" },
      ],
    },
    {
      title: "Title 4",
      titleHref: "#title4",
      links: [
        { text: "link 1", href: "#link1" },
        { text: "link 2", href: "#link2" },
        { text: "link 3", href: "#link3" },
        { text: "link 4", href: "#link4" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaGooglePlusG />, href: "https://google.com" },
    { icon: <FaPinterest />, href: "https://pinterest.com" },
    { icon: <FaBehance />, href: "https://behance.net" },
  ];

  const images = {
    one: [image, image, image, image],
    two: [image, image, image, image],
    three: [image, image, image, image],
    four: [image, image, image, image],
  }

  return (
    <Router>
      {/* <Header navLinks={headerLinks} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scroll" element={<ScrollComponent />} />
        <Route
          path="/gallery"
          element={
            <GridGallery
              title="THE WORKS"
              subtitle="Community Yoga Session"
              images={images}
              descriptionTitle="Breathe. Stretch. Connect."
              descriptionText="Join us for a free outdoor yoga session designed to rejuvenate your mind and body.
      Whether you're a beginner or an experienced yogi, this session will help you find balance and peace."
              buttonText="REGISTER"
            />
          }
        />
      </Routes>
      {/* <Footer1 socialLinks={socialLinks} navLinks={navLinks} /> */}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
