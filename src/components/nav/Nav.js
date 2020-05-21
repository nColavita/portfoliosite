import React from 'react';

import './Nav.css';
import logo from '../../assets/img/logo2.svg';

const Nav = () => {
    return (
        <header>
            <nav>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href="./portfolio.html">Work</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
