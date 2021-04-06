import "./Know.css";

import web from "./../Photos/HTML_CSS.png";
import React from "./../Photos/React.png";
import git from "./../Photos/git.png";
import bootstrap from "./../Photos/bootstrap.png";
import sql from "./../Photos/sql.png";
import js from "./../Photos/js.png";

import py from "./../Photos/Python.png";
import cplu from "./../Photos/C++.png";
import java from "./../Photos/Java.png";

function Know() {
  return (
    <>
      <section class="section services-section" id="Know">
        <div class="container">
          <div class="section-title">
            <h2>
              Que puedo <span style={{ color: "#00adb5" }}>aportar</span>?
            </h2>
            <h5 style={{color: "white", textAlign:"center", textTransform: "uppercase", fontSize: "12px", letterSpacing: "4px"}}>Mis conocimientos</h5>
          </div>
          {/* <div class="row">
            <div class="col-lg-6">
              <div class="section-title">
                <h3>Habilidades principales</h3>
                <p>Diseño de sistemas web, para cualuier tipo de negocio.</p>
              </div>
            </div>
          </div> */}
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={React} />
                </div>
                <div class="feature-content">
                  <h5>React.JS</h5>
                  <p>Framework para crear paginas web con gran eficiencia </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow2" src={web} />
                </div>
                <div class="feature-content">
                  <h5>HTML y CSS</h5>
                  <p>
                    Diseño simple para lado de cliente con sentido minimalista e
                    innovador.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={git} />
                </div>
                <div class="feature-content">
                  <h5>GitHub and Git</h5>
                  <p>
                    Creando repositorios y compartiendo codigo con otros
                    compañeros para colaboraciones y proyectos que nos
                    solicitan.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={bootstrap} />
                </div>
                <div class="feature-content">
                  <h5>Bootstrap</h5>
                  <p>
                    Eficiencia en la decoracion y la manera de visualizar la
                    pagina.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={sql} />
                </div>
                <div class="feature-content">
                  <h5>SQL</h5>
                  <p>
                    Manera de utilizar las tablas de la base de datos con su
                    data, interactuar entre tablas y poder manipularla.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={js} />
                </div>
                <div class="feature-content">
                  <h5>Javascript</h5>
                  <p>Manipular lo que hace la data de cierto sistema. </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="row">
            <div class="col-lg-6">
              <div class="section-title">
                <h3>Conocimientos basicos</h3>
              </div>
            </div>
          </div> */}
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={py} />
                </div>
                <div class="feature-content">
                  <h5>Python</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={cplu} />
                </div>
                <div class="feature-content">
                  <h5>C++</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <img alt=" " className="imgKnow" src={java} />
                </div>
                <div class="feature-content">
                  <h5>Java</h5>
                </div>
              </div>
            </div>
          </div>

          <h5
            style={{ color: "#eeeeee", textAlign: "center", marginTop: "20px" }}
          >
            habilidades <span style={{ color: "#00adb5" }}>fuera</span> de la{" "}
            <span style={{ color: "#00adb5" }}>programación</span>
          </h5>

          <div className="otherSkills">
            <div className="creatividad">
              <i class="fa fa-lightbulb-o fa-4x" aria-hidden="true"></i>
              <p>Creatividad</p>
            </div>
            <div className="Desarrollo">
              <i class="fa fa-address-card fa-4x" aria-hidden="true"></i>
              <p>Desarrollo Empresarial</p>
            </div>
            <div className="learner">
              <i class="fa fa-desktop fa-4x" aria-hidden="true"></i>
              <p>Autodidacta</p>
            </div>
            <div className="speaker">
            <i class="fa fa-microphone fa-4x" aria-hidden="true"></i>
            <p>Bilingüe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Know;
