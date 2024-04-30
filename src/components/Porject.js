import React from 'react';

const Project = ({ title, image, deployLink, repoLink }) => {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p><a href={deployLink}>Deployed Application</a></p>
            <p><a href={repoLink}>GitHub Repository</a></p>
        </div>
    );
};

export default Project;
