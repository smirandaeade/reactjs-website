import video1 from '../assets/coverr-coding-sequences-9906-1080p.webm';
import { useEffect } from 'react';

const VideoBg = () => {
    useEffect(() => {
        const videoElement = document.getElementById('videoBg');
        videoElement.play();
    }, []);

    return (
        <div className="video-bg">
            <video id="videoBg" className="video-bg__video" loop muted>
                <source src={video1} type="video/webm" />
            </video>
            <div className="video-bg__overlay" />
        </div>
    );
};

export default VideoBg;
