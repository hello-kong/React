/**
 * React Simple Image Slider
 * 
 * https://github.com/kimcoder/react-simple-image-slider#readme
 * 
 * yarn add react-simple-image-slider
 */
import React, { memo } from 'react';
import ImageSlider from 'react-simple-image-slider';

import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpeg'
import img3 from '../assets/img/img3.jpeg'
import img4 from '../assets/img/img4.jpg'
import img5 from '../assets/img/img5.jpg'

const Slider = memo(() => {
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 }
    ];

    return (
        <div>
            <h2>Slider</h2>
            <ImageSlider
                width='90%'
                height={700}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={2.0}
                loop={true}
                style={{margin: 'auto'}}
            />
        </div>
    );
});

export default Slider;