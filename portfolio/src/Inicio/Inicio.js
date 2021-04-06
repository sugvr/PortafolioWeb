import './Inicio.css'

import Isai from './../Photos/Yo1.jpg'

function Inicio() {
    return (
        <div className="Inicio">
            <div class="box">
                <div class="card">
                    <div class="imgBx">
                        <img className="photoInicio" src={Isai} alt="images" />
                    </div>
                    <div class="details">
                        <h2>Isaí Delgado Rodríguez</h2>
                    </div>

                    {/* <div id="myPageContent" class="container-fluid">
                        <section id="home">
                            <div id="textSlider" class="row">
                                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4 iamCol">
                                    <p>Soy un</p>

                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
                                    <div class="scroller">
                                        <div class="inner">
                                            <p>Freelancer</p>
                                            <p>Web Developer</p>
                                            <p>Web Designer</p>
                                            <p>FullStack </p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </section>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Inicio