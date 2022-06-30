import React, { useState } from "react";
import "../Styles/Pages/SignInSignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    issued: [],
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const doSignUp = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && reEnterPassword) {
      if (password === reEnterPassword) {
        axios
          .post("https://library-management-web-app.herokuapp.com/signup", user)
          .then((res) => {
            alert(res.data.message);
            navigate("/signin");
          });
      } else alert("Password and confirm password are different.");
    } else alert("Please enter all the fields.");
  };

  return (
    <div className="container">
      <div className="signup">
        <h1>SignUp</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={doSignUp}>
          SignUp
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/signin")}>
          SignIn
        </div>
      </div>
    </div>
  );
}

export default SignUp;
