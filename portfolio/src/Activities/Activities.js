import "./Activities.css";
import Gallery1 from "./Gallery/ActivitiesGallery";

function Activities() {
  return (
    <div class="container" id="Activities">
      <div class="section-title">
        <h2>Actividades Extracurriculares</h2>
      </div>
      <div className="ULcontainer">
        <ul >
          <div>
            <li class="list-group-item">Miembro de AMUS 2016-2017</li>
            <li class="list-group-item">
              Miembro Asociasion de Fotografos Universitarios 2016-2017
            </li>
            <li class="list-group-item">Vicepresidente de AMUS 2017-2018</li>
            <li class="list-group-item">
              Presidente de jóvenes en la iglesia 2018
            </li>
            <li class="list-group-item">
              Competencias de programación locales UPRP 2017
            </li>
          </div>

          <div>
            <li class="list-group-item">
              Competencias de programación locales UPRP de ACM-ICPC 2019
            </li>
            <li class="list-group-item">
              Competencias de programación Nacionales de ACM-ICPC UPRB 2019
            </li>
            <li class="list-group-item">
              Miembro ALPHA computers Asociation 2018-2020
            </li>
            <li class="list-group-item">
              Podcast Con La Boca es un Mamey 2020
            </li>
            <li class="list-group-item">
              Miembro de Strike Out Sports Show 2020
            </li>
          </div>
        </ul>
      </div>
      <div className="photosView">
        <Gallery1 />
      </div>
    </div>
  );
}

export default Activities;
