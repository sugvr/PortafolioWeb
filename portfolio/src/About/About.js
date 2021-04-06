import "./About.css";

import Isai from "./../Photos/Yo2.jpg";
import Isai2 from "./../Photos/Yo3.JPG";
import Isai3 from "./../Photos/Yo4.JPG";
import PR from "./../Photos/PR.png"

function About() {
  return (
    <div class="container" id="About">
      <div class="section-title">
        <h2>
          Quien soy <span style={{ color: "#00adb5", font: "900" }}>YO</span>?
        </h2>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-6">
              <div class="row">
                <div class="col-lg-12 col-md-12 mt-4 pt-2">
                  <div class="card2 work-desk rounded border-0 shadow-lg overflow-hidden">
                    <div class="image-area">
                      <div class="img-wrapper">
                        <img
                          className="Aboutphoto"
                          src={Isai}
                          alt="Foto de Isai"
                        />
                      </div>
                    </div>
                    <div class="img-overlay bg-dark"></div>
                  </div>
                </div>

                {/* <div class="col-12">
                                    <div class="mt-4 pt-2 text-right">
                                        <a href="javascript:void(0)" class="btn btn-info">Read More <i class="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div> */}
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-6">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="card2 work-desk rounded border-0 shadow-lg overflow-hidden">
                    <div class="image-area">
                      <div class="img-wrapper">
                        <img
                          className="Aboutphoto"
                          src={Isai2}
                          alt="Foto de Isai"
                        />
                      </div>
                    </div>
                    <div class="img-overlay bg-dark"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12 mt-4 pt-2">
                  <div class="card2 work-desk rounded border-0 shadow-lg overflow-hidden">
                    <div class="image-area">
                      <div class="img-wrapper">
                        <img
                          className="Aboutphoto"
                          src={Isai3}
                          alt="Foto de Isai"
                        />
                      </div>
                    </div>
                    <div class="img-overlay bg-dark"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
          <div class="section-title ml-lg-5">
            <h5 class="text-custom font-weight-normal mb-3">Acerca de mi</h5>
            <h4 style={{ color: "white" }} class="title mb-4">
              Ser mejor cada día <br />
              es mi vision y mision.
            </h4>
            <h5 style={{color: "#eeeeee"}}>Puerto Rico <img alt="" src={PR} width="10%"/></h5>

            <p className="PContainer">
              Oportunidades en diferentes ámbitos y diferentes disciplinas, ha
              permitido que Isaí sea lo que es hoy día. Con diferentes logros en
              las diferentes áreas, pero eso no es lo que le ha importado. Sino
              lo aprendido, las personas que conoció, los diferentes lugares que
              visitó. Eso es lo que realmente importa. Tiene muchas
              aspiraciones. De hecho, su mentalidad siempre ha sido ser mejor de
              lo que ayer fue. Así que creemos que Isaí es una persona
              inconformista. Piensa en siempre subir un escalón en su vida y no
              estancarse en lo mismo. Cree que el ser humano fue hecho siempre
              para superarse a sí mismo. Competir con su “yo” del ayer. Espera
              convertirse en una buena persona, un buen ser humano y realizar
              cambios que ayuden a estar en un mejor mundo.
            </p>
            {/* <div class="row">
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-play h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Responsive</a></h6>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-file-download h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Free Download</a></h6>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-user h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Support</a></h6>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-image h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Development</a></h6>
                                    </div>
                                </div>
                            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
