import React from 'react';

import './Footer.css';
import resume from '../../assets/Resume_Nicholas_Colavita.pdf';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/nickcolavita"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.github.com/nColavita"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
