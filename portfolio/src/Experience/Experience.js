import './Experience.css'

import repair from './../Photos/repair.png'
import monitor from './../Photos/monitor.png'

function Experience() {
    return (
        <>
            <section class="section3" id="Experience">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <h2>Experiencia</h2>
                                {/* <p>No tengo mucho tiempo trabajando, pero lo que he hecho me ha servido como aprendizaje y desarrollo.</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 m-15px-tb">
                            <div class="resume-box">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-book"></i>
                                        </div>
                                        <span class="time">Agosto 2016 - Diciembre 2020</span>
                                        <h5>Universidad de Puerto Rico, Recinto de Ponce</h5>
                                        <p>Bachillerato Ciencias en Computadoras con Grado menor en Desarrollo Empresarial</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-book"></i>
                                        </div>
                                        <span class="time">Agosto 2013 - mayo 2016</span>
                                        <h5>Escuela Bernandino Cordeno Bernard</h5>
                                        <p>Diploma de escuela superior</p>
                                        <p>Diploma en mecanica herramentista</p>
                                    </li>
                                </ul>
                                <img src={repair} width="200px"/>
                                 <img src={monitor} width="200px"/>
                            </div>
                            
                        </div>
                       
                        <div class="col-lg-6 m-15px-tb">
                            <div class="resume-box">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-briefcase"></i>
                                        </div>
                                        <span class="time">Agosto 2019 - Diciembre 2019</span>
                                        <h5>Universidad de Puerto Rico, Recinto de Ponce</h5>
                                        <p>Instalaci??n y configuraci??n de hardware y software
                                        componentes para garantizar la usabilidad. Soluci??n de problemas de hardware
                                        y problemas de software. Reparar o reemplazar da??ado
                                        hardware. Actualizar todo el sistema para habilitar
                                        software compatible en todas las computadoras. Instalaci??n y
                                        Actualizaci??n del software antivirus para garantizar la seguridad del usuario.
                                        nivel. Realizaci??n de pruebas y evaluaciones en software nuevo
                                        y hardware. Dar soporte a los usuarios y ser el primero
                                        punto de contacto para informar de errores. Estableciendo bien
                                        relaciones con todos los departamentos y colegas.
                                        Realizaci??n de operaciones de respaldo diarias. Gesti??n t??cnica
                                        documentaci??n.</p>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fa fa-briefcase"></i>
                                        </div>
                                        <span class="time">Agosto 2020 - Diciembre 2020</span>
                                        <h5>Web Developer</h5>
                                        <p>Dise??o y desarrollo de una aplicaci??n de programaci??n para un
                                        sal??n de belleza. Amplio uso de React.js, bootstrap y
                                        SQL. Implementaci??n de GitHub para garantizar la agilidad
                                        desarrollo con los miembros del equipo. Evaluar c??digo para
                                        asegurarse de que cumpla con los est??ndares de la industria, sea v??lido,
                                        estructurado, y es compatible con navegadores, dispositivos o
                                        sistemas operativos. Determinar las necesidades del usuario analizando
                                        requerimientos t??cnicos.</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience