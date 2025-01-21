import { useState, useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";

import "./Footer.scss";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [expandedSection, setExpandedSection] = useState(null); // Track the currently expanded section

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section)); // Collapse if already expanded, otherwise expand
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="footer-main">
      <div className="footer-one"></div>
      <div className="footer-two">
        {/* Footer Two One */}
        <div className="footer-two-one">
          <h1>STUDIO MASON</h1>
          <div className="footer-two-one-two">
            <p>@STUDIO MASON</p>
            <p>KSSIDC INDUSTRIAL ESTATE, 74,</p>
            <p>BOMMASANDRA</p>
            <p>BANGALORE, INDIA</p>
          </div>
          <p className="footer-followus">FOLLOW US</p>
          <div className="footer-follow-us">
            <FaFacebookSquare size={30} className="footer-facebook" />
            <FaSquareInstagram size={30} className="footer-instagram" />
          </div>
        </div>

        {/* Footer Two Two */}
        <div
          className={`footer-two-two ${
            isMobile && expandedSection === "two" ? "expanded" : "collapsed"
          }`}
        >
          <p
            className={`section-title ${
              isMobile && expandedSection === "two" ? "expanded" : ""
            }`}
            onClick={() => isMobile && toggleSection("two")}
          >
            01/ MASON
            {isMobile && (
              <IoIosArrowForward
                className={`arrow-icon ${
                  expandedSection === "two" ? "expanded" : ""
                }`}
              />
            )}
          </p>
          <a href="/" className="about-link">
            <p className="section-item">ABOUT STUDIO MASON</p>
          </a>
          <a href="/enquiry" className="about-link">
            <p className="section-item">CONTACT</p>
          </a>
          <a href="/bulkOrders" className="about-link">
            <p className="section-item">BULK ORDERS</p>
          </a>
          <a href="/buyGuide" className="about-link">
            <p className="section-item">BUY GUIDE</p>
          </a>
        </div>

        {/* Footer Two Three */}
        <div
          className={`footer-two-three ${
            isMobile && expandedSection === "three" ? "expanded" : "collapsed"
          }`}
        >
          <p
            className={`section-title ${
              isMobile && expandedSection === "three" ? "expanded" : ""
            }`}
            onClick={() => isMobile && toggleSection("three")}
          >
            02/ CUSTOMER SERVICE
            {isMobile && (
              <IoIosArrowForward
                className={`arrow-icon ${
                  expandedSection === "three" ? "expanded" : ""
                }`}
              />
            )}
          </p>
          <a href="/bespokeint" className="about-link">
            <p className="section-item">BESPOKE</p>
          </a>
          <a href="/shipping-policy" className="about-link">
            <p className="section-item">SHIPPING POLICY</p>
          </a>
          <a href="/return-policy" className="about-link">
            <p className="section-item">RETURN & EXCHANGE</p>
          </a>
          <a href="/return-policy" className="about-link">
            <p className="section-item">TERMS OF TRADE</p>
          </a>
          <a href="/return-policy" className="about-link">
            <p className="section-item">PRIVACY POLICY</p>
          </a>
          <a href="/care-instructions" className="about-link">
            <p className="section-item">CARE INSTRUCTIONS</p>
          </a>
        </div>

        {/* Footer Two Four */}
        <div
          className={`footer-two-four ${
            isMobile && expandedSection === "four" ? "expanded" : "collapsed"
          }`}
        >
          <p
            className={`section-title ${
              isMobile && expandedSection === "four" ? "expanded" : ""
            }`}
            onClick={() => isMobile && toggleSection("four")}
          >
            03/ POPULAR NOW
            {isMobile && (
              <IoIosArrowForward
                className={`arrow-icon ${
                  expandedSection === "four" ? "expanded" : ""
                }`}
              />
            )}
          </p>
          <a href="/test-comp" className="about-link">
            <p className="section-item">PLANTERS</p>
          </a>
          <a href="/test-comp2" className="about-link">
            <p className="section-item">DESK PLANTERS</p>
          </a>
          <a href="/test-comp4" className="about-link">
            <p className="section-item">TABLES</p>
          </a>
        </div>

        {/* Footer Two Five */}
        <div
          className={`footer-two-five ${
            isMobile && expandedSection === "five" ? "expanded" : "collapsed"
          }`}
        >
          <p
            className={`section-title ${
              isMobile && expandedSection === "five" ? "expanded" : ""
            }`}
            onClick={() => isMobile && toggleSection("five")}
          >
            REACH OUT SAVE 10% ON EVERYTHING NEW
            {isMobile && (
              <IoIosArrowForward
                className={`arrow-icon ${
                  expandedSection === "five" ? "expanded" : ""
                }`}
              />
            )}
          </p>
          <div className="footer-icons">
            <a href="mailto:example@example.com">
              <IoMdMail color="black" size={30} />
            </a>
            <a href="https://wa.me/+919980547044">
              <FaSquareWhatsapp color="black" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
