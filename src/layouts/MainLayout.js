import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

function MainLayout() {
  return (
    // <div className="background-video">
    //   <video autoPlay muted loop>
    //       <source src="./public/videos/video-1.mp4" type="video/mp4"/>
    //   </video>
      <div className="site-container">
        <header className="header">
          <NavbarComponent className="navbar" />
        </header>

        <main className="main-content">
          <Outlet />
        </main>

        <footer className="footer">
          <NavLink className="footerLink" to="/">
            Home
          </NavLink>
          <NavLink className="footerLink" to="/about">
            About
          </NavLink>
        </footer>
      </div>
    // </div>
  );
}

export default MainLayout;
