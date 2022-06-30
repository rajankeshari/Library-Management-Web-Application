import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Components/Nav.css";
import { FaBars } from "react-icons/fa";

function StudentNav() {
  return (
    <div className="student-nav">
      <div className="dropdown">
        <div className="navbar-list">
          <Link to={"/"} className="navlink">
            <span>Home</span>
          </Link>
          <Link to={"/search"} className="navlink">
            <span>Search</span>
          </Link>
          <Link to={"/issued"} className="navlink">
            <span>Issued</span>
          </Link>
          <Link to={"/about"} className="navlink">
            <span>About</span>
          </Link>
        </div>
        <button className="toggle-button" type="button">
          <FaBars />
        </button>
      </div>
      <Link to={"/myprofile"}>
        <img
          className="current-user-picture"
          src={require("../Images/user.jpg")}
          alt=""
        />
      </Link>
    </div>
  );
}

export default StudentNav;
