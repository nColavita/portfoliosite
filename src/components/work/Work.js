import React from 'react';

import arconic from '../../assets/img/arconic.png';
import devry from '../../assets/img/devry.png';
import reebok from '../../assets/img/reebok.png';
import restaurant from '../../assets/img/restaurant-landing.jpg';
import sprout from '../../assets/img/sprout.png';
import pantrymate from '../../assets/vid/pantrymate.mp4';

import './Work.css';

const Work = () => {
    return (
        <div className="wrapper">
            <div className="grid-container">
                <div className="grid-item">
                    <video src={pantrymate} autoplay alt="pantrymate" />
                </div>
                <div className="grid-item">
                    <img src={arconic} alt="arconic" />
                </div>
                <div className="grid-item">
                    <img src={devry} alt="arconic" />
                </div>
                <div className="grid-item">
                    <img src={reebok} alt="arconic" />
                </div>
                <div className="grid-item">
                    <img src={restaurant} alt="arconic" />
                </div>
                <div className="grid-item">
                    <img src={sprout} alt="arconic" />
                </div>
            </div>
        </div>
    );
};

export default Work;
