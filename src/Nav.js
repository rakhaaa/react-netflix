import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt="Netflix Logo"
        />

        <img
          className="nav__avatar"
          src="https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Nav;
