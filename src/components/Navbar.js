import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class Navbar extends Component {
  componentDidMount() {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll > 5) {
        $(".navbar").addClass("bg-scrolling");
      } else {
        $(".navbar").removeClass("bg-scrolling");
      }
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-2 px-5">
        <NavLink className="navbar-brand main-color" to="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/MercenaryLogo.svg"}
            className="main-logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link px-4" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#home-service-area" className="nav-link px-4">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-us" className="nav-link px-4" to="/">
                About us
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-4" to="/get-access">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
