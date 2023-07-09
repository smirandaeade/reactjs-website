import video1Mp4 from '../assets/coverr-coding-sequences-9906-1080p.mp4';
import { useEffect } from 'react';

const VideoBg = () => {
    useEffect(() => {
        const videoElement = document.getElementById('videoBg');
        videoElement.play();
    }, []);

    return (
        <div className="video-bg">
            <video id="videoBg" className="video-bg__video" autoPlay playsInline loop muted>
                <source src={video1Mp4} type="video/mp4" />
            </video>
            <div className="video-bg__overlay" />
        </div>
    );
};

export default VideoBg;
