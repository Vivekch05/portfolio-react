import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo3.png";
import Home from "./Home";
export default function Layout() {
  // // Header Scroll
  // let nav = document.querySelector(".navbar");
  // window.onscroll = function () {
  //   if (document.documentElement.scrollTop > 20) {
  //     nav.classList.add("header-scrolled");
  //   } else {
  //     nav.classList.remove("header-scrolled");
  //   }
  // };
  return (
    <>
      <header className="header_wrapper">
        <nav className="header-scrolled navbar navbar-expand-lg fixed-top">
          <div className="container">
            {/* <a className="navbar-brand" href="#">
              <img src={logo} className="img-fluid" alt="logo" />
            </a> */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span>  */}
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav menu-navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="services">
                    Services
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item mt-3 mt-lg-0">
                  <Link className="main-btn" to="contact">
                    Hire Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <Home /> */}
    </>
  );
}
