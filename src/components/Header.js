import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar header navbar-dark fixed-top  flex-md-nowrap p-0 ">
          <a class="nav-item nav-link" href="#">
            {" "}
            <p className="head">SAVE MORE ON APP</p>
          </a>
          <a class="nav-item nav-link" href="#">
            {" "}
            <p>SELL MORE ON PAKI SHOPPING</p>
          </a>
          <a class="nav-item nav-link" href="#">
            <p>CUSTOMER CARE</p>
          </a>
          <a class="nav-item nav-link" href="#">
            {" "}
            <p>TRACK MY ORDER</p>
          </a>
          <a class="nav-item nav-link" href="#">
            <p>LOGIN</p>
          </a>
          <a class="nav-item nav-link" href="#">
            <p>SIGNUP</p>
          </a>
        </nav>
      </div>
    );
  }
}
