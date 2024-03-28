import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../App";
import "../layouts/mainLayoutStyle.css";
import { checkToken, getUser } from "../client.js";

function NavbarComponent() {
  const { setToken, setUser, user } = useContext(AppContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("guest");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Stored token:", storedToken);
    if (storedToken) {
      validateToken(storedToken);
    } else {
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setLoggedIn(true);
    } else {
      setUsername("guest");
      setLoggedIn(false);
    }
  }, [user]);

  const validateToken = async (storedToken) => {
    const isValidToken = await checkToken(storedToken);
    if (isValidToken) {
      setToken(storedToken);
      const fetchedUser = await getUser(storedToken);
      setUser(fetchedUser);
    }
  };

  return (
    <div className="navbar">
      <Link className="navbar-brand " to="/">
        <h2>k-travel</h2>
      </Link>
      <nav className="navbar-nav">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/about">
          About
        </NavLink>
        <NavLink className="nav-item" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-item" to="/trips">
          Trips
        </NavLink>
        <NavLink className="nav-item" to="/blog">
          Blog
        </NavLink>
        <NavLink className="nav-item" to="/guides">
          Guides
        </NavLink>
      </nav>
      <div className="log--btn">
        {loggedIn ? (
          <div>
            <p>Welcome back {username}</p>
            <NavLink className="btn-primary" to="/logout">
              Logout
            </NavLink>
          </div>
        ) : (
          <NavLink className="btn" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavbarComponent;

// function NavbarComponent() {
//   const { setToken, setUser, user } = useContext(AppContext);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState('gest')

//   useEffect (() => {
//     if (user){
//       setUsername(user.username)
//     } else {
//       setUsername('gest')
//     }
//   },[user])

//   const validateToken = async (storedToken) => {
//     const isValidToken = await checkToken(storedToken);
//     if (isValidToken) {
//       setToken(storedToken);
//       const user = await getUser(storedToken);
//       setUser(user);
//       setLoggedIn(true);
//     } else {
//       setLoggedIn(false);
//     }
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     console.log("Stored token:", storedToken);
//     if (storedToken) {
//       validateToken(storedToken);
//     } else {
//       setLoggedIn(false);
//     }
//   }, []);

//   return (
//     <div>
//       <Link className="main--siteTitle" to="/">
//         <h2>k-travel</h2>
//       </Link>
//       <nav className="main--navBar">
//         <NavLink className="main--navLink" to="/">
//           Home
//         </NavLink>
//         <NavLink className="main--navLink" to="/about">
//           About
//         </NavLink>
//         <NavLink className="main--navLink" to="/contact">
//           Contact
//         </NavLink>
//         <NavLink className="main--navLink" to="/trips">
//           Trips
//         </NavLink>
//         <NavLink className="main--navLink" to="/blog">
//           Blog
//         </NavLink>
//         <NavLink className="main--navLink" to="/guides">
//           Guides
//         </NavLink>
//         <div className="log--btn">
//           {loggedIn ? (
//             <div>
//               <p>
//                 Welcome back {username}
//               </p>
//               <NavLink className="main--navLink" to="/logout">
//                 Logout
//               </NavLink>
//             </div>
//           ) : (
//             <NavLink className="main--navLink" to="/login">
//               Login
//             </NavLink>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavbarComponent;
