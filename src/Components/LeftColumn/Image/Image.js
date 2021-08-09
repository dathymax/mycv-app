import './Image.css';
import '../../css/grid.css';
import React from 'react';
import Me from './img/avatar_hat.jpg';

const Image = () => {
    return (
        <>
            <div id="cv-img">
                <img src={Me} alt="Me" className="cv-img"/>
                <div className="cv-name">
                    <span id="cv-name">Jane Doe</span>
                </div>
            </div>
        </>
    )
}

export default Image;