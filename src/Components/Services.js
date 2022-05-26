import React from "react";
import service1 from "../images/service/service-1.svg";
import service2 from "../images/service/service-2.svg";
import service3 from "../images/service/service-3.svg";
import service4 from "../images/service/service-4.svg";

export default function Services() {
  return (
    <section id="services" className="services_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-4">
            <span className="subtitle">What I can do for you</span>
            <h2>My Awesome Service</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              <br className="d-none d-md-block" />
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={service1} alt="service" className="img-fluid mb-4" />
                <h3>Business Stratagy</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={service2} alt="service" className="img-fluid mb-4" />
                <h3>Website Development</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={service3} alt="service" className="img-fluid mb-4" />
                <h3>Marketing & Reporting</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={service3} alt="service" className="img-fluid mb-4" />
                <h3>Mobile App Development</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={service4} alt="service" className="img-fluid mb-4" />
                <h3>Marketing & Reporting</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <img src={service3} alt="service" className="img-fluid mb-4" />
                <h3>Mobile App Development</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
