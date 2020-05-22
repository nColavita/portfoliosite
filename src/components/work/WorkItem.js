import React from 'react';

const WorkItem = ({ type, src, size, alt, link }) => {
    const contentType = type;
    if (contentType === 'vid') {
        return (
            <a href={link} target="_blank">
                <div className="grid-item">
                    {' '}
                    <video autoPlay loop>
                        <source src={src} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </a>
        );
    }
    return (
        <a href={link} target="_blank">
            <div className="grid-item">
                <img className={size} src={src} alt={alt} />
            </div>
        </a>
    );
};

export default WorkItem;
