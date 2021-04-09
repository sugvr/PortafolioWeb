import React, { Component } from "react";

import "./Sidebar.css";

function SideBar() {
  function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className="navbar">
      <header class="header">
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </button> */}

        <div>
          <h1 className="nav-logo">Isaí Delgado</h1>
        </div>

        <div class="topnav" id="myTopnav">
          <a href="#Inicio">
            <i style={{ color: "yellow" }} class="fa fa-fw fa-home" />
            Inicio
          </a>
          <a href="#About">
            <i style={{ color: "tomato" }} class="fa fa-fw fa-user" />
            Acerca de mi
          </a>
          <a href="#Experience">
            <i
              style={{ color: "blueviolet" }}
              class="fa fa-clock-o"
              aria-hidden="true"
            ></i>{" "}
            Experiencia
          </a>
          <a href="#Know">
            <i style={{ color: "yellow" }} class="fa fa-book"></i> Conocimiento
          </a>
          <a href="#Jobs">
            {" "}
            <i style={{ color: "tomato" }} class="fa fa-briefcase" /> Trabajos
          </a>
          <a href="#Contact">
            <i style={{ color: "blueviolet" }} class="fa fa-fw fa-envelope" />
            Contactarme
          </a>
          <a href="javascript:void(0);" class="icon" onclick={myFunction}>
            <i class="fa fa-bars "></i>
          </a>
        </div>

        {/* <ul class="main-nav ">
          <li className="linksnav">
            <a href="#Inicio">Inicio</a>
          </li>
          <li className="linksnav">
            <a href="#About">Acerca de mi</a>
          </li>
          <li className="linksnav">
            <a href="#Experience">Experiencia</a>
          </li>
          <li className="linksnav">
            <a href="#Know">Conocimiento</a>
          </li>
          <li className="linksnav">
            <a href="#Jobs">Trabajos</a>
          </li>
          <li className="linksnav">
            <a href="#Contact">Contactarme</a>
          </li>
        </ul> */}
      </header>
    </div>
  );
}

export default SideBar;
