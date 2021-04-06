import Video2 from './../Photos/2020-12-30 19-22-07.mp4'
import Video3 from './../Photos/PythonAlexa.mp4'
import DropSalon from './../Photos/DropSalon.jpg'
import DropSalon2 from './../Photos/DropSalon2.JPG'
function Jobs() {
    return (
        <>
            <div class="container sub" id="Jobs">
                <div class="section-title">
                    <h2>Que he <span style={{color:"#00adb5"}}>realizado</span>?</h2>
                    <h5 style={{color: "white", textAlign:"center", textTransform: "uppercase", fontSize: "12px", letterSpacing: "4px"}}>Portafolio</h5>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 pull-right" >

                        <div class="embed-responsive embed-responsive-16by9">
                            <video width="100%" height="90%" controls>
                                <source class="embed-responsive-item" src={Video2} type="video/mp4" />
                            </video>
                        </div>

                        <hr />
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="well">
                            <h2 style={{color: '#eeeeee'}} >Movie Data</h2>
                            <p style={{color: '#00adb5'}} class="">React.js</p>
                            <a href="https://master.d319l7bkou6ao.amplifyapp.com/">Movie Data Link</a>
                        </div>
                        <p style={{color: 'white'}}>
                            Use un API de IMDB para obtener la informacion de las peliculas, entonces usando el javascript y el componente de React Axios para poder consumir el API.</p>
                    </div>
                </div>
            </div>



            <div class="container sub" >
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 pull-right" >
                            <img src={DropSalon} alt="foto de header de DropSalon" width="80%" height="50%"/>
                            <img src={DropSalon2} alt="foto de header de DropSalon" width="80%" height="50%"/>
                        <hr />
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="well">
                            <h2 style={{color: '#eeeeee'}}>Drop Salon</h2>
                            <p style={{color: '#00adb5'}} class="">React.js // Node.js</p>
                            <a href="https://github.com/sugvr/DropSalon">Repositorio de GitHub </a>
                        </div>
                        <p style={{color: 'white'}}>
                            Aplicacion web para citas para un salon de belleza, con 3 niveles de usuarios y una seccion para cada uno. Rol de cliente donde puede sacar citas, role de empleado donde puede ver sus citas y rol administrador.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container sub" >
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 pull-right" >
                    <div class="embed-responsive embed-responsive-16by9">
                            <video width="100%" height="90%" controls>
                                <source class="embed-responsive-item" src={Video3} type="video/mp4" />
                            </video>
                        </div> 
                           
                        <hr />
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="well">
                            <h2 style={{color: '#eeeeee'}}>Asistente Virtual</h2>
                            <p style={{color: '#00adb5'}} class="">Python</p>
                            {/* <a href="https://github.com/sugvr/DropSalon">Repositorio de GitHub </a> */}
                        </div>
                        <p style={{color: 'white'}}>
                           Sistema para programar tu propio asistente virtual. Mas adelante se añadira el comando por voz.
                           </p>
                    </div>
                </div>
            </div>

          
        </>
    )
}

export default Jobs