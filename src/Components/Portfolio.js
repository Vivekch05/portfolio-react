import React from "react";
import img1 from '../images/portfolio/Foodies.png'
import img2 from '../images/portfolio/App-Landing-Page.png';
import img3 from '../images/portfolio/E-Commerce-Website-Using-Bootstap-5.png';
import img4 from '../images/portfolio/HeadPhones.png';
import img5 from '../images/portfolio/Ecommerce-Jewellery-Website.png';
import img6 from '../images/portfolio/Hashtag-Landing-Page.png';
import img7 from '../images/portfolio/Christmas-Landing-Page.png';
import img8 from '../images/portfolio/SEO-Landing-Page.png'
export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-4">
            <span className="subtitle">My Complete project</span>
            <h2>My Latest Project</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              <br className="d-none d-md-block" />
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img1})`}}></span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img2})`}}></span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img3})`}}></span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img4})`}}></span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img5})`}}></span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img6})`}}></span>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img7})`}}></span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card p-0">
              <span style={{backgroundImage:`url(${img8})`}}></span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
