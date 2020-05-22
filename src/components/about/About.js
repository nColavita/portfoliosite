import React from 'react';

import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="headline">
                <h4>Hi! As you can tell, I am</h4>
                <h1>Nick Colavita</h1>
                <h4>Front End Developer</h4>
                <p>
                    Ability to grow, adapt, learn, and build, I have been able
                    to focus on communication through the web. Driven by
                    curiosity &amp; willingness to explore, there has been
                    little that hasn't fascinated me.
                </p>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="skill">
                    <span className="html5" style={skill}></span>
                    <h4>HTML5</h4>
                </div>
                <div className="skill">
                    <span className="css3" style={skill}></span>
                    <h4>CSS3</h4>
                </div>
                <div className="skill">
                    <span className="js" style={skill}></span>
                    <h4>JS</h4>
                </div>
                <div className="skill">
                    <span className="react" style={skill}></span>
                    <h4>React</h4>
                </div>
                <div className="skill">
                    <span className="dataviz" style={skill}></span>
                    <h4>Data Visualization</h4>
                </div>
            </div>
        </div>
    );
};

const skill = {
    display: 'inline-block',
    marginLeft: '10px',
    height: '16px',
    backgroundColor: '#2f94de',
};

export default About;
