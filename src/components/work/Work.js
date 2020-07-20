import React from 'react';
// Components
import WorkItem from './WorkItem';
// Style
import './Work.css';
// Assets
import preyemer from '../../assets/img/preyemer.jpg';
import devry from '../../assets/img/devry.png';
import reebok from '../../assets/img/reebok.png';
import restaurant from '../../assets/img/restaurant-landing.jpg';
import sprout from '../../assets/img/sprout.png';
import pantrymate from '../../assets/vid/pantrymate.mp4';

const Work = () => {
    return (
        <div className="wrapper">
            <div className="grid-container">
                <WorkItem
                    type="vid"
                    size="lg"
                    alt="pantrymate"
                    src={pantrymate}
                    link="https://ncolavita.com/projects/pantrymate"
                />
                <WorkItem
                    type="img"
                    size="lg"
                    alt="preyemer"
                    src={preyemer}
                    link="https://ncolavita.com/projects/preyemer"
                />
                <WorkItem
                    type="img"
                    size="lg"
                    alt="restaurant"
                    src={restaurant}
                    link="https://ncolavita.com/projects/restaurant_landing_page"
                />
                <WorkItem
                    type="img"
                    size="md"
                    alt="devry"
                    src={devry}
                    link="https://ncolavita.com/projects/DEVRY"
                />
                <WorkItem
                    type="img"
                    size="md"
                    alt="reebok"
                    src={reebok}
                    link="https://ncolavita.com/projects/REEBOK"
                />
                <WorkItem
                    type="img"
                    size="md"
                    alt="sprout"
                    src={sprout}
                    link="https://ncolavita.com/projects/SPROUT"
                />
            </div>
        </div>
    );
};

export default Work;
