import React from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import "../Styles/Components/SignInNav.css";
import { useNavigate } from "react-router-dom";

function SignInNav() {
  const navigate = useNavigate();

  return (
    <div className="SignInNav">
      <div className="signUpDiv" onClick={() => navigate("/signup")}>
        <BsFillPersonPlusFill style={{ width: "50px", height: "50px" }} />
        <button className="signUpButton">Sign Up</button>
      </div>
      <div className="signInDiv" onClick={() => navigate("/signin")}>
        <FaSignInAlt style={{ width: "50px", height: "50px" }} />
        <button className="signInButton">Sign In</button>
      </div>
    </div>
  );
}

export default SignInNav;
