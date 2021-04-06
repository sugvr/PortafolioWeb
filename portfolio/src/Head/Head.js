import React from "react";
import "./Head.css";
import Inicio from "./../Inicio/Inicio";
import { Link } from "react-router-dom";

import brand from "./../Photos/brand.gif";
import multi from "./../Photos/multi.png";
import pc from "./../Photos/pc.png";

function Head() {
  return (
    <div class="headcover" id="Inicio">
      <div class="hero-title">
        <h1>
          {" "}
          <img src={pc} alt="PC" width="300px" />
          {/* <span>Developer</span> */}
        </h1>
        <div className="wrapper2">
          <ul className="dynamic-txts">
            <li>
              <span>Diseñador Web</span>
            </li>
            <li>
              <span>Desarrollador</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
          </ul>
        </div>
        <div class="socila-icons">
          <div class="icons">
            <div class="icon-d">
              <i class="fa fa-facebook-f"></i>
            </div>
            <div class="icon-d">
              <i class="fa fa-github"></i>
            </div>
            <div class="icon-d">
              <i class="fa fa-linkedin"></i>
            </div>
            <div class="icon-d">
              <i class="fa fa-instagram"></i>
            </div>
          </div>
        </div>

        {/* <p className="text-moti">
          Si quieres triunfar en la vida, haz de la perseverancia tu amigo del
          alma, de la experiencia tu sabio consejero, de la advertencia tu
          hermano mayor y de la esperanza tu genio guardián
        </p> */}
      </div>
      <div class="btns">
        <button class="hear-me">
          <a href="https://www.facebook.com/100007610884050/videos/2841545672775768/">
            Escuchame
          </a>
        </button>
        <button class="download-cv">
          <a href="https://1drv.ms/b/s!AgjNa2EZeJk2nGjR99WFWGdSGvCx">
            Resume Completo
          </a>
        </button>
      </div>

      <div class="scroll">
        <a href="#About" class="shape"></a>
      </div>
    </div>
  );
}

export default Head;
