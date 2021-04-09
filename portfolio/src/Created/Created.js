import "./Created.css";
import Nerd from "./../Photos/NerdCode.png";
function Created() {
  return (
    <div className="CreatorContainer">
      <div class="section-title">
        <h2>
          Que he <span style={{ color: "#00adb5" }}>creado</span>?
        </h2>
        <h5
          style={{
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "12px",
            letterSpacing: "4px",
          }}
        >
          Marca personal o ayuda
        </h5>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-6">
              <div class="row">
                <div class="col-lg-12 col-md-12 mt-4 pt-2">
                  <div>
                    <img alt=" " src={Nerd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
          <div class="section-title ml-lg-5">
            <h5 style={{ color: "white" }}>Acerca de Codigo Nerd</h5>

            <p style={{ color: "#00adb5" }}>
              Perfil de Instagram para compartir conocimientos de tecnologías,
              programación. Un espacio para aprender juntos, los que ya sabemos
              un poco y los que quieran aprender
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Created;
