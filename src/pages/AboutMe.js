import React from 'react';

const AboutMe = () => {
    return (
        <section id="about-me">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>About Me</h2>
                        <p>
                            Hello, I'm Nathan.
                        </p>
                        <p>
                            My journey in web development started at the UMN coding bootcamp. Since then, I have been continuously learning and improving my skills. I have experience working with HTML, CSS, JavaScript, and various libraries and frameworks.
                        </p>
                        <p>
                            In my free time, I enjoy exploring nature, disc golfing with friends, and spending time with my family.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="avatar.jpg" alt="Avatar" className="img-fluid rounded-circle" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
