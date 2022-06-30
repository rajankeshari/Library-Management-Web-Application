import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Search from "./Pages/Search";
import Edit from "./Pages/Edit";
import Issue from "./Pages/Issue";
import Add from "./Pages/Add";
import Return from "./Pages/Return";
import Profiles from "./Pages/Profiles";
import About from "./Pages/About";
import Issued from "./Pages/Issued";
import MyProfile from "./Pages/MyProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/signin"
            element={
              <SignIn
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route path="/edit" element={<Edit />} />
          <Route
            path="/issue"
            element={
              <Issue
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route
            path="/add"
            element={
              <Add
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route path="/return" element={<Return />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route
            path="/about"
            element={
              <About
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route
            path="/issued"
            element={
              <Issued
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route
            path="/myprofile"
            element={
              <MyProfile
                user={user}
                setUser={setUser}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
