/**
 * FsLightBoxEx
 * 어떤 요소 (img, button, a 등)를 클릭했을 때 
 * 지정된 이미지, 영상 등을 팝업으로 표시하는 기능
 * 
 * https://fslightbox.com/
 * 
 * yarn add fslightbox-react
 * 
 * [Youtube 썸네일]
 * - 동영상 배경 썸네일(480x360): http://img.youtube.com/vi/영상코드/0.jpg
 * - 동영상 시작지점 썸네일(120x90): http://img.youtube.com/vi/영상코드/1.jpg
 * - 동영상 중간지점 썸네일(120x90) : http://img.youtube.com/vi/영상코드/2.jpg
 * -동영상 끝지점 썸네일(120x90) : http://img.youtube.com/vi/영상코드/3.jpg
 * -고해상도 썸네일(1280x720) : http://img.youtube.com/vi/영상코드/maxresdefault.jpg
 * -중간해상도 썸네일(640x480) : http://img.youtube.com/vi/영상코드/sddfault.jpg
 * -고품질 썸네일(480x360) : http://img.youtube.com/vi/영상코드/hqdefault.jpg
 * -중간품질 썸네일(320x180) :http://img.youtube.com/vi/영상코드/medafault.jpg
 * -보통품질 썸네일(120x90) : http://img.youtube.com/vi/영상코드/default.jpg
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';

import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpeg'
import img3 from '../assets/img/img3.jpeg'
import img4 from '../assets/img/img4.jpg'
import img5 from '../assets/img/img5.jpg'

const Button = styled.button`
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0 5px;
`;

const FsLightboxEx = memo(() => {
    // 단일 이미지를 사용할 경우 모달창 표시 여부에 대한 상태값
    const [singleToggler, setSingleToggler] = useState(false);

    // 복수 이미지를 사용할 경우 모달창 표시 여부와 몇 번째 이미지를 표시할지에 대한 상태값
    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1
    });

    // 단일 Youtube 영상을 사용할 경우 모달창 표시 여부에 대한 상태값
    const [youtubeToggler, setYoutubeToggler] = useState(false);

    // 복수 Youtube 영상을 사용할 경우 모달창 표시 여부와 몇 번째 영상을 표시할지에 대한 상태값
    const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
        open: false,
        index: 1
    });

    return (
        <div>
            <h2>FsLightboxEx</h2>

            <h3>Single Gallery</h3>
            <div>
                <Button onClick={e => {setSingleToggler(!singleToggler)}}>
                    <img src={img1} width='150' alt='img1' />
                </Button>
                <FsLightbox sources={[img1]} toggler={singleToggler} />
            </div>

            <h3>Multi Gallery</h3>
            <div>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 1})}>
                    <img src={img1} width='150' alt='img1' />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 2})}>
                    <img src={img2} width='150' alt='img2' />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 3})}>
                    <img src={img3} width='150' alt='img3' />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 4})}>
                    <img src={img4} width='150' alt='img4' />
                </Button>
                <Button onClick={e => setMultiToggler({open: !multiToggler.open, index: 5})}>
                    <img src={img5} width='150' alt='img5' />
                </Button>
                <FsLightbox toggler={multiToggler.open} sources={[img1, img2, img3, img4, img5]} slide={multiToggler.index} />
            </div>

            <h3>Youtube Single Link</h3>
            <div>
                <Button onClick={e => setYoutubeToggler(!youtubeToggler)}>
                    <img src='http://img.youtube.com/vi/229oddMV438/0.jpg' width='150' alt='youtube' />
                </Button>
                <FsLightbox toggler={youtubeToggler} sources={['https://www.youtube.com/watch?v=229oddMV438']} />
            </div>

            <h3>Youtube Multi Link</h3>
            <div>
                <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index:1})}>
                    <img src='http://img.youtube.com/vi/229oddMV438/0.jpg' width='150' alt='youtube' />
                </Button>
                <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index:1})}>
                    <img src='http://img.youtube.com/vi/dZepQ_cWBoo/0.jpg' width='150' alt='youtube' />
                </Button>
                <Button onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index:1})}>
                    <img src='http://img.youtube.com/vi/alLs9S4pwo0/0.jpg' width='150' alt='youtube' />
                </Button>
                <FsLightbox toggler={youtubeToggler} sources={[
                    'https://www.youtube.com/watch?v=229oddMV438',
                    'https://www.youtube.com/watch?v=dZepQ_cWBoo',
                    'https://www.youtube.com/watch?v=alLs9S4pwo0'
                    ]} slide={youtubeMultiToggler.index}/>
            </div>
        </div>
    );
});

export default FsLightboxEx;