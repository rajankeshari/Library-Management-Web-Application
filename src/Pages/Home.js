import React from "react";
import "../Styles/Pages/Home.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home({ user, setUser, isAdmin, setIsAdmin }) {
  return (
    <div className="home">
      <Header
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <div className="main">
        <img
          className="lib-image"
          src={require("../Images/Lib.jpg")}
          alt="Central Library"
        />
        <div className="main-content">
          <h1>Welcome to Central Library</h1>
          <p>
            The Central Library of Indian Institute of Technology (Indian School
            of Mines) Dhanbad is the heart of the institute providing direct
            academic and research supports to all departments.The Central
            Library is an automated library in terms of records organisation and
            management of all its different sections, search and discovery,
            information retrieval and service delivery.The library has reached
            all the departments, hostels, and quarters on the campus wide LAN.
            <br />
            The staff of the library strive their best to help push the
            boundaries of IIT (ISM) Dhanbad in national and international
            spaces.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
