import React from "react";
import logo from "../images/logo3.png";
export default function Footer() {
  return (
    <section id="contact" className="footer_wrapper mt-3 mt-md-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <div className="footer-logo mb-3 mb-md-0">
              <img src={logo} />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center jus social-icon mb-3 mb-md-0">
              <li>
                <a
                  href="http://www.linkedin.com/in/vivekch123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://www.instagram.com/_simplydifferent_i/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://www.facebook.com/vivekkch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>{" "}
                </a>
              </li>
              <li>
                <a
                  href="http://www.github.com/Vivekch05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://www.mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://www.twitter.com/vivekch123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
              <p className="mb-0">
                Vivek Chaurasia <a href="#">Senior Engineer</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
