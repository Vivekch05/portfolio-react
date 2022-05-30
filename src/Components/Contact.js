import React, { useState } from "react";
import contactimg from "../images/vk10.jpg";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, email, message);
  };
  return (
    <section id="contact" className="contact_wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
            <span className="subtitle">Let's Say Hi</span>
            <h2>Hire Me.</h2>
            <div className="row call_details mb-4">
              <label className="col-sm-3">Call us directly:</label>
              <div className="col-sm-9 mb-3 mb-lg-2">
                <a
                  href="tel:+917062424346"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 7062424346
                </a>
              </div>
              <label className="col-sm-3">Contact Email:</label>
              <div className="col-sm-9 mb-3 mb-lg-2">
                <a href="mailto:example@gmail.com">vivek.kch05@gmail.com</a>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Your Name..."
                  autocomplete="off"
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  placeholder="Your Phone..."
                  autocomplete="off"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Your Email..."
                  autocomplete="off"
                />
              </div>
              <div className="mb-4">
                <textarea
                  cols="40"
                  rows="4"
                  className="form-control"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  placeholder="Write a Message..."
                  autocomplete="off"
                />
              </div>
              {/* <button type="submit" className="main-btn">
                Submit
              </button> */}
              <input type="submit" value="submit" className="main-btn" />
            </form>
          </div>
          <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0">
            <img src={contactimg} className="img-fluid contact-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
