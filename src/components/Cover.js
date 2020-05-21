import React from 'react';
import { Tween } from 'react-gsap';

export default function Cover() {
    return (
        <Tween to={{ autoAlpha: '0' }} duration={5} ease="back.out(1.7)">
            <div style={cover}></div>
        </Tween>
    );
}

const cover = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'black',
    zIndex: 2,
};
