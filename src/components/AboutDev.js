import React from 'react'
import "./AboutDev.css"
import aboutphoto from "../images/About.jpg"

const AboutDev = () => {
    return (
        <><section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src={aboutphoto} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Full Stack Developer</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 10 Feb 1997</li>
                                    <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> www.learnwithsanjeet.com</li>
                                    <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> +91 7008 726 317</li>
                                    <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> Bhubaneswar, Odisha, India</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 25</li>
                                    <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Bachelor</li>
                                    <li><i className="bi bi-rounded-right"></i> <strong>Email:</strong> sanjitkumarmishra4@gmail.com</li>
                                    <li><i className="bi bi-rounded-right"></i> <strong>Employement Status:</strong> Open to work</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p>
                    </div>
                </div>

            </div>
        </section>


            {/* ------------------------------
    Resume section
    ------------------------------ */}
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Sanjeet Kumar Mishra</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <p>
                                    <ul>
                                        <li>Bhubaneswar, Odisha, India</li>
                                        <li>(+91) 7008 726 317</li>
                                        <li>sanjitkumarmishra4@gmail.com</li>
                                    </ul>
                                </p>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor of Science in Physical Science</h4>
                                <h5>2015 - 2018</h5>
                                <p><em>Utkal University, Bhubaneswar, Odisha, India</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>
                            <div className="resume-item">
                                <h4>Intermediate of Science</h4>
                                <h5>2013 - 2015</h5>
                                <p><em>Raghunatha Samabaya Mahabidyalaya, Nayagarh, Odisha, India</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Skills</h3>
                            <div className="resume-item">
                                <h4>Senior graphic design specialist</h4>
                                <p>
                                    <ul>
                                        <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                        <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                        <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="resume-item">
                                <h4>Graphic design specialist</h4><p>
                                    <ul>
                                        <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                        <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                        <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                        <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutDev
