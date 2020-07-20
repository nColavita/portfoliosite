import React, { Fragment } from 'react';
import AnimChar from './AnimChar';
import { Timeline, Tween } from 'react-gsap';

import './Landing.css';

const Landing = () => {
    return (
        <section id="landing">
            <div id="landing-copy-container">
                <div className="words">
                    <div className="name-desktop">
                        <AnimChar />
                    </div>
                    <div className="name-mobile">
                        <h1>nick</h1>
                        <h1>colavita</h1>
                    </div>
                    <Timeline
                        target={
                            <Fragment>
                                <h2 id="developer">Developer</h2>
                                <h2 id="designer">Designer</h2>
                                <h2 id="creator">Creator</h2>
                            </Fragment>
                        }
                    >
                        <Tween
                            from={{ autoAlpha: 0, x: '-100px' }}
                            target={0}
                            ease="power2.out(1.7)"
                        />
                        <Tween
                            from={{ autoAlpha: 0, x: '-100px' }}
                            target={1}
                            ease="power2.out(1.7)"
                        />

                        <Tween
                            from={{ autoAlpha: 0, x: '-100px' }}
                            target={2}
                            ease="power2.out(1.7)"
                        />
                    </Timeline>
                </div>
            </div>
        </section>
    );
};

export default Landing;
