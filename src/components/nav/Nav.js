import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';
import logo from '../../assets/img/logo2.svg';

const Nav = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <ul>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
