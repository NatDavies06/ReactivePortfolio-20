import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <div className="resume-content">
                <p>Add your resume content here...</p>
                <a href="/path/to/resume.pdf" download>
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;
