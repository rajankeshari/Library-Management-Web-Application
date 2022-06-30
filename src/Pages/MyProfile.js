import React from "react";
import Header from "../Components/Header";
import "../Styles/Pages/MyProfile.css";
import Footer from "../Components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function MyProfile({ user, setUser, isAdmin, setIsAdmin }) {
  const navigate = useNavigate();

  if (!Object.keys(user).length) {
    return <Navigate to="/" replace />;
  }

  const doSignOut = () => {
    axios
      .get("https://library-management-web-app.herokuapp.com/signout")
      .then((res) => {
        alert(res.data.message);
        if (res.data.signout) {
          navigate("/");
        }
      });
  };

  return (
    <div className="profile-container">
      <Header
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <div className="profile-div">
        <div className="user-pic-div">
          <img
            className="user-pic"
            src={require("../Images/user.jpg")}
            alt=""
          />
        </div>
        <div className="user-info">
          <div className="user-info-detail">
            Role: {isAdmin ? "Admin" : "Student"}
          </div>
          <div className="user-info-detail">
            Name: {user.name ? user.name : "Rajan Keshari"}
          </div>
          <div className="user-info-detail">
            Email: {user.email ? user.email : "tempmail@temp.com"}
          </div>
          {!isAdmin && (
            <div className="user-info-detail">
              Book Issued: {user.issued.length}
            </div>
          )}
          <div className="signout-container" onClick={doSignOut}>
            <div className="signout-button">SignOut</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyProfile;
