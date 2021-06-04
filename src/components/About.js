import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="container-fluid about-container py-5">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="card about-card">
                <img
                  className="card-img-top text-center"
                  src={process.env.PUBLIC_URL + "/assets/vector.svg"}
                  className="about-mercenary-img"
                  alt="mercenary"
                />
                <div className="card-body about-card-body">
                  <p className="card-title about-card-title">
                    What is mercenary?
                  </p>
                  <p className="card-text about-card-text">
                    Mercenary is an application that brings all the services to
                    your smartphones and saves your most precious time. You
                    don’t need to go anywhere for the basic home chores get to
                    be done, Mercenary brings all the workers like carpenters,
                    plumbers, electricians, housekeepers, painters, etc. all
                    together in one place, on your smartphone. Mercenary
                    provides workers near to your location so that they can
                    reach you in seconds. <br />
                    So what exactly is this Mercenary??
                  </p>
                  <ol className="about-card-text pt-3">
                    <li>
                      A place where I can find people who can help me with my
                      household works.
                    </li>
                    <li>
                      A place which allows me to analyze and select the best.
                    </li>
                    <li>
                      A place where I can call for help 24/7 and that too in a
                      low cost.
                    </li>
                    <li>
                      And if I'm a person who can work and is good in skills, I
                      want a place where I can showcase my work and can get
                      employed.
                    </li>
                    <li>
                      A place that do not charge much for being an
                      intermediate!!
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 pt-lg-0 pt-3">
              <div className="row">
                <div className="col-md-6 col-12 py-2">
                  <div className="card profile-card">
                    <div className="background-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/Liquid-Cheese-blue.svg"
                        }
                        alt="profile-bg"
                        className="background"
                      />
                    </div>
                    <div className="profile-thumb-block">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/chetan.jpg"}
                        alt="profile-image"
                        className="profile"
                      />
                    </div>
                    <div className="card-content">
                      <h2>
                        Chetan Malviya<small>Backend Developer</small>
                      </h2>
                      <div className="icon-block">
                        <a href="https://github.com/devvrat02" target="_blank">
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/chetan-malviya-425b48179"
                          target="_blank"
                        >
                          {" "}
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/_devvrat1"
                          target="_blank"
                        >
                          {" "}
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 py-2">
                  <div className="card profile-card">
                    <div className="background-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/Liquid-Cheese-blue.svg"
                        }
                        alt="profile-bg"
                        className="background"
                      />
                    </div>
                    <div className="profile-thumb-block">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/siddharth.jpg"}
                        alt="profile-image"
                        className="profile"
                      />
                    </div>
                    <div className="card-content">
                      <h2>
                        Siddharth Khandelwal<small>Frontend Developer</small>
                      </h2>
                      <div className="icon-block">
                        <a
                          target="_blank"
                          href="https://github.com/khandelwal20sid"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/siddharth-khandelwal-980992173/"
                        >
                          {" "}
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/khandelwal20sid"
                        >
                          {" "}
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 py-2">
                  <div className="card profile-card">
                    <div className="background-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/Liquid-Cheese-blue.svg"
                        }
                        alt="profile-bg"
                        className="background"
                      />
                    </div>
                    <div className="profile-thumb-block">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/taher.jpg"}
                        alt="profile-image"
                        className="profile"
                      />
                    </div>
                    <div className="card-content">
                      <h2>
                        Taher Kapadia<small>UI/UX Developer</small>
                      </h2>
                      <div className="icon-block">
                        <a href="#" target="_blank">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href="#" target="_blank">
                          {" "}
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" target="_blank">
                          {" "}
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 py-2">
                  <div className="card profile-card">
                    <div className="background-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/Liquid-Cheese-blue.svg"
                        }
                        alt="profile-bg"
                        className="background"
                      />
                    </div>
                    <div className="profile-thumb-block">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/sourabh.jpg"}
                        alt="profile-image"
                        className="profile"
                      />
                    </div>
                    <div className="card-content">
                      <h2>
                        Sourabh Jaiswal<small>Backend Developer</small>
                      </h2>
                      <div className="icon-block">
                        <a
                          href="https://github.com/sourabh8jaiswal"
                          target="_blank"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/sourabh-jaiswal-292249176/"
                          target="_blank"
                        >
                          {" "}
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/sourabh8jaiswal/"
                          target="_blank"
                        >
                          {" "}
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
