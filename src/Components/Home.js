import React from "react";
import Typical from "react-typical";
import resume from "../resume/resume.pdf";
export default function Home() {
  return (
    <section id="home" className="banner_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center text-md-start">
            <h6>WELCOME TO MY WORLD</h6>
            <h1>I’m Vivek Chaurasia</h1>
            {/* <span> React JS Developer😍.</span> */}
            <Typical
              steps={["Web Developer👨‍💻.", 3000, "React Js Developer😍.", 3000, "I Love Coding❤.", 3000]}
              loop={Infinity}
            />
            <br />
            <h1>based in India.</h1>
            <div className="mt-4">
              <a className="main-btn" href={resume} download="vivek_resume" target="_blank">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
