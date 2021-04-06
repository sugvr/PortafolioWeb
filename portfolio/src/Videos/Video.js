import './Videos.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Video1 from './../Photos/MNSL1977.MP4'
function Videos() {
    return (
        <div className="Videos">
            <div class="embed-responsive embed-responsive-16by9">
                <video width="100%" height="90%" controls>
                    <source class="embed-responsive-item" src={Video1} type="video/mp4" />
                </video>
            </div>
            
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fpedro.a.floresvargas%2Fvideos%2F10208160979205047%2F&show_text=false&width=560"
                    width="100%" height="500px" title="video on fb" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

            </div>

            {/* <div>
                <p>Uno de mis sueños siempre fue ser parte de las comunicaciones. Ser un productor de videos o ya sea salir en programas de televiosn.</p>
            </div> */}

        </div>
    )
}

export default Videos