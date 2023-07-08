import { useEffect } from 'react';
import video1 from '../assets/blurry.webm';

const CustomVideoBg = () => {
    useEffect(() => {
        const videoElement = document.getElementById('customVideoBg');
        videoElement.play();
    }, []);

    return (
        <div className="custom-video-bg">
            <video id="customVideoBg" className="custom-video-bg__video" loop muted>
                <source src={video1} type="video/webm" />
            </video>
            <div className="custom-video-bg__overlay" />
        </div>
    );
};

export default CustomVideoBg;
