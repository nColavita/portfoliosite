import React from 'react';
import { Tween, SplitChars } from 'react-gsap';

const AnimChar = () => {
    return (
        <Tween from={{ autoAlpha: 0, y: '-50px' }} stagger={0.1}>
            <SplitChars
                wrapper={
                    <h1
                        style={{
                            display: 'inline-block',
                        }}
                    />
                }
            >
                nick colavita
            </SplitChars>
        </Tween>
    );
};

export default AnimChar;
