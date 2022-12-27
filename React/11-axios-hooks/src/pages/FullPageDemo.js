import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import React from 'react';

//import video from '../assets/img/video_sample.mp4';
import '../assets/css/style.css';


const FullPageDemo = () => {
  
    return (
    <div>``
    <FullPage controls controlsProps={{ className: "slide-navigation" }}>
      <Slide>
        <div className="section-common section-area1">
            <video data-autoplay loop muted>
                <source src="https://cdn.jsdelivr.net/gh/alvarotrigo/blog-assets/videos/flowers_kgvvqw.mp4" type="video/mp4" />
            </video>
        </div>
          </Slide>
       <Slide>
       <div className="section-common section-area2">
        </div>
        </Slide>``````
        <Slide>
        <div className="section-common section-area3">
        </div>
      </Slide>
     </FullPage>
    </div>
  )
 
};

export default FullPageDemo;