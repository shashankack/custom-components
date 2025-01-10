import React, { useState, useEffect } from "react";
import "./Header.scss";
import { HashLink } from "react-router-hash-link";
import { RiArrowRightSLine } from "react-icons/ri";

const Header = ({ navLinks }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <header className="header">
      <h1 className="logo">Logo</h1>
      <div
        className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`nav-item ${link.children ? "has-children" : ""}`}
            onMouseEnter={() => {
              if (!isMobile && link.children) {
                setDropdownOpen({ [index]: true });
              }
            }}
            onMouseLeave={() => {
              if (!isMobile && link.children) {
                setDropdownOpen({ [index]: false });
              }
            }}
          >
            <HashLink
              smooth
              to={link.link}
              className="link"
              onClick={() => {
                if (isMobile) setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </HashLink>
            {link.children && (
              <>
                {/* Dropdown toggle button for mobile */}
                {isMobile && (
                  <button
                    className={`dropdown-toggle ${
                      dropdownOpen[index] ? "open" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(index);
                    }}
                  >
                    <RiArrowRightSLine
                      className={`arrow ${
                        dropdownOpen[index] ? "rotated" : ""
                      }`}
                    />
                  </button>
                )}
                {/* Dropdown menu */}
                <div
                  className={`dropdown ${dropdownOpen[index] ? "open" : ""}`}
                >
                  {link.children.map((child, childIndex) => (
                    <HashLink
                      key={childIndex}
                      smooth
                      to={child.link}
                      className="dropdown-link"
                      onClick={() => {
                        if (isMobile) {
                          setDropdownOpen({ [index]: false });
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {child.name}
                    </HashLink>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
