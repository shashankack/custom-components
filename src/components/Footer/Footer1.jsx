// Footer1.js
import React, { useState } from "react";
import "./Footer.scss";
import forest from "../../assets/forest.jpg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Footer1 = ({ navLinks, socialLinks }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <footer className="footer">
      <img src={forest} alt="" className="footer-bg" />
      <div className="footer-content container">
        {/* Social Media Section */}
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <ul className="social-links">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Sections */}
        {navLinks.map((section, index) => (
          <div className="footer-section" key={index}>
            {isMobile ? (
              <h4 onClick={() => toggleDropdown(index)}>
                {section.title} {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </h4>
            ) : (
              <h4>{section.title}</h4>
            )}

            <ul className={isMobile && activeIndex !== index ? "dropdown" : "dropdown open"}>
              {section.links.map((link, subIndex) => (
                <li key={subIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom Links */}
      <div className="footer-bottom">
        <ul>
          {navLinks.map((section, index) => (
            <li key={index}>
              <a href={section.titleHref}>{section.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer1;
