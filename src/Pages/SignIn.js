import React, { useState } from "react";
import "../Styles/Pages/SignInSignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn({ setUser, setIsAdmin }) {
  const [currUser, setCurrUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrUser({
      ...currUser,
      [name]: value,
    });
  };

  const doSignIn = () => {
    const { email, password } = currUser;
    if (email && password) {
      axios
        .post(
          "https://library-management-web-app.herokuapp.com/signin",
          currUser
        )
        .then((res) => {
          if (res.data.user) {
            //res.data.user is object with id, name, password, issued
            setUser(res.data.user);
            setIsAdmin(res.data.isAdmin);
            navigate("/");
          }
          alert(res.data.message);
        });
    } else alert("Please enter all the fields.");
  };

  return (
    <div className="container">
      <div className="signin">
        <h1>SignIn</h1>
        <input
          type="text"
          name="email"
          value={currUser.email}
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={currUser.password}
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={doSignIn}>
          SignIn
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/signup")}>
          SignUp
        </div>
      </div>
    </div>
  );
}

export default SignIn;
