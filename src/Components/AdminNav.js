import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Components/Nav.css";
import { FaBars } from "react-icons/fa";

function AdminNav() {
  return (
    <div className="admin-nav">
      <div className="dropdown">
        <div className="navbar-list">
          <Link to={"/"} className="navlink">
            <span>Home</span>
          </Link>
          <Link to={"/edit"} className="navlink">
            <span>Edit</span>
          </Link>
          <Link to={"/issue"} className="navlink">
            <span>Issue</span>
          </Link>
          <Link to={"/add"} className="navlink">
            <span>Add</span>
          </Link>
          <Link to={"/return"} className="navlink">
            <span>Return</span>
          </Link>
          <Link to={"/profiles"} className="navlink">
            <span>Profiles</span>
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

export default AdminNav;
