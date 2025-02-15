import { useState, useEffect, useRef } from "react";
import "./Nav.css";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavVisible(false);
    }
  };

  useEffect(() => {
    if (isNavVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavVisible]);

  return (
    <div className="navbar-container">
      <div className="logo">
        <h2>
          <a href="#section">Nafis.</a>
        </h2>
      </div>
      <button className="hamburger" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`navbar ${isNavVisible ? "visible" : ""}`} ref={navRef}>
        <ul className="navbar-items">
          <li className="items">
            <a href="#about">A Propos </a>
          </li>
          <li className="items">
            <a href="#experience"> Experience </a>
          </li>
          <li className="items">
            <a href="#projet"> Projets </a>
          </li>
          <li className="items">
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
