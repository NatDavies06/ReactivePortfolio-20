import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {/* TODO: Render Project components */}
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
