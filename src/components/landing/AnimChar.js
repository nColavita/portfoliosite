import React from 'react';
import { Tween, SplitChars } from 'react-gsap';

const AnimChar = () => {
    return (
        <Tween from={{ autoAlpha: 0, y: '-50px' }} stagger={0.15}>
            <SplitChars
                wrapper={
                    <h1
                        style={{
                            display: 'inline-block',
                            fontSize: '11rem',
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
