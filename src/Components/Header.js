import React, { useEffect } from "react";
import AdminNav from "./AdminNav";
import SignInNav from "./SignInNav";
import StudentNav from "./StudentNav";
import { useNavigate } from "react-router-dom";
import "../Styles/Components/Header.css";
import axios from "axios";

function Header({ user, setUser, isAdmin, setIsAdmin }) {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://library-management-web-app.herokuapp.com/user")
      .then((res) => {
        setUser(res.data.user);
        setIsAdmin(res.data.isAdmin);
      });
  }, []);

  return (
    <div className="header">
      <img
        className="logo"
        src={require("../Images/logo.webp")}
        alt="Central Library Logo"
        onClick={() => navigate("/")}
      />
      {!Object.keys(user).length ? (
        <SignInNav />
      ) : isAdmin ? (
        <AdminNav />
      ) : (
        <StudentNav />
      )}
    </div>
  );
}

export default Header;
