import React from "react";
import aboutimg from "../images/vk7.jpg";
export default function About() {
  return (
    <section id="about" className="about_wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img
              src={aboutimg}
              className="img-fluid rounded-3 contact-img"
              alt="About Us"
            />
          </div>
          <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
            <div className="my-3 my-lg-0">
              <span className="subtitle">My About Details</span>
              <h2>About Me</h2>
              <p>
                Hello, I am Vivek Chaurasia. I am a Web Developer from India,
                Bihar. I have rich experience in website design and building.
                Apart from my Professional Life, I love Travelling and wants to
                Explore New New Places😍.
              </p>
            </div>
            <div className="pt-4">
              <ul
                className="nav nav-pills justify-content-center justify-content-lg-between mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-skill-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-skill"
                    type="button"
                    role="tab"
                    aria-controls="pills-skill"
                    aria-selected="true"
                  >
                    Main Skills
                  </button>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Award-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Award"
                    type="button"
                    role="tab"
                    aria-controls="pills-Award"
                    aria-selected="false"
                  >
                    Awards
                  </button>
                </li> */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-experiance-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-experiance"
                    type="button"
                    role="tab"
                    aria-controls="pills-experiance"
                    aria-selected="false"
                  >
                    Experiance
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-education-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-education"
                    type="button"
                    role="tab"
                    aria-controls="pills-education"
                    aria-selected="false"
                  >
                    Education
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-skill"
                  role="tabpanel"
                  aria-labelledby="pills-skill-tab"
                >
                  <div className="single-progress">
                    <h6>Development</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="label">95%</span>
                  </div>
                  <div className="single-progress">
                    <h6>Designing</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="label">70%</span>
                  </div>
                  {/* <div className="single-progress">
                    <h6>Marketing</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width:"75%"}}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="label">75%</span>
                  </div> */}
                  <div className="single-progress">
                    <h6>Management</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="label">50%</span>
                  </div>
                </div>
                {/* <div
                  className="tab-pane fade"
                  id="pills-Award"
                  role="tabpanel"
                  aria-labelledby="pills-Award-tab"
                >
                  <ul className="text-start ps-0">
                    <li>
                      <a href="#">
                        Awwwards.com
                        <span>- Winner</span>
                      </a>{" "}
                      2019 - 2020
                    </li>
                    <li>
                      <a href="#">
                        CSS Design Awards
                        <span>- Winner</span>
                      </a>{" "}
                      2017 - 2018
                    </li>
                    <li>
                      <a href="#">
                        Design nominees
                        <span>- site of the day</span>
                      </a>{" "}
                      2013- 2014
                    </li>
                    <li>
                      <a href="#">
                        Awwwards.com
                        <span>- Winner</span>
                      </a>{" "}
                      2019 - 2020
                    </li>
                  </ul>
                </div> */}
                <div
                  className="tab-pane fade"
                  id="pills-experiance"
                  role="tabpanel"
                  aria-labelledby="pills-experiance-tab"
                >
                  <ul className="text-start ps-0">
                    {/* <li>
                      <a href="#">
                        Sr. Front-end Engineer<span> - Google</span>
                      </a>{" "}
                      2018 - Current
                    </li> */}
                    <li>
                      <a href="#">
                        Senior Engineer<span> - Nagarro</span>
                      </a>{" "}
                      2021 - Present
                    </li>
                    <li>
                      <a href="#">
                        SDE-II<span> - Mobcoder</span>
                      </a>{" "}
                      2020- 2021
                    </li>
                    <li>
                      <a href="#">
                        Software Engineer<span> - Globallogic</span>
                      </a>{" "}
                      2018- 2020
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-education"
                  role="tabpanel"
                  aria-labelledby="pills-education-tab"
                >
                  <ul className="text-start ps-0">
                    {/* <li>
                      <a href="#">
                        BSc In CSE<span>- ABC University, Los Angeles, CA</span>
                      </a>{" "}
                      2010
                    </li> */}
                    <li>
                      <a href="#">
                        B.Tech
                        <span> - JECRC College, Jaipur, Rajasthan, India</span>
                      </a>{" "}
                      2014-2018
                    </li>
                    <li>
                      <a href="#">
                        XII
                        <span> - R.K.D College, Patna, Bihar, India</span>
                      </a>{" "}
                      2013
                    </li>
                    <li>
                      <a href="#">
                        X<span> - R.S.H.S, Parasauni Farm, Bihar, India</span>
                      </a>{" "}
                      2011
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
