"use client";
import React from "react";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="container-fluid footer bg-dark wow fadeIn"
      data-wow-delay=".3s"
    >
      <div className="container pt-5 pb-4">
        <div className="row g-5">
          {/* Brand & Description */}
          <div className="col-lg-3 col-md-6">
            <h1 className="text-white fw-bold d-block">
              Ikshvaku Corporate Services{" "}
              <span className="text-secondary">Pvt Ltd</span>
            </h1>
            <p className="mt-4 text-light">
              Ikshvaku Corporate Services Pvt Ltd is a Chartered Accountant firm
              committed to providing reliable, timely, and professional services
              in accounting, taxation, and business advisory across India.
            </p>
            <div className="d-flex hightech-link">
              <a
                href="#"
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <i className="fab fa-facebook-f text-primary"></i>
              </a>
              <a
                href="#"
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <i className="fab fa-twitter text-primary"></i>
              </a>
              <a
                href="#"
                className="btn-light nav-fill btn btn-square rounded-circle me-2"
              >
                <i className="fab fa-instagram text-primary"></i>
              </a>
              <a
                href="#"
                className="btn-light nav-fill btn btn-square rounded-circle me-0"
              >
                <i className="fab fa-linkedin-in text-primary"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h3 className="text-secondary">Quick Links</h3>
            <div className="mt-4 d-flex flex-column short-link">
              <button
                onClick={() => handleScroll("about-us")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                About Us
              </button>
              <button
                onClick={() => handleScroll("services")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Our Services
              </button>
              {/* <button
                onClick={() => handleScroll("ourprojects")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Our Projects
              </button> */}
              <button
                onClick={() => handleScroll("ourteam")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Our Team
              </button>
              <button
                onClick={() => handleScroll("contact-us")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Contact Us
              </button>
            </div>
          </div>

          {/* Client Support */}
          <div className="col-lg-3 col-md-6">
            <h3 className="text-secondary">Client Support</h3>
            <div className="mt-4 d-flex flex-column help-link">
              <button
                onClick={() => handleScroll("terms")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Terms of Service
              </button>
              <button
                onClick={() => handleScroll("privacy")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Privacy Policy
              </button>
              <button
                onClick={() => handleScroll("faq")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                FAQs
              </button>
              <button
                onClick={() => handleScroll("client-portal")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Client Portal
              </button>
              <button
                onClick={() => handleScroll("support")}
                className="mb-2 text-white btn btn-link text-start p-0"
              >
                <i className="fas fa-angle-right text-secondary me-2"></i>
                Support
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h3 className="text-secondary">Contact Us</h3>
            <div className="text-white mt-4 d-flex flex-column contact-link">
              <span className="pb-3 text-light border-bottom border-primary">
                <i className="fas fa-map-marker-alt text-secondary me-2"></i>
                No.3/2, Ground Floor, Pushkara, Sharada Vidhya Mandir Road,
                Varthur, Bengaluru, Bengaluru Urban, Karnataka, 560087
              </span>
              <span className="py-3 text-light border-bottom border-primary">
                <i className="fas fa-phone-alt text-secondary me-2"></i>
                080-68708560, +91 82963 01351, +91 85538 30398
              </span>
              <span className="py-3 text-light border-bottom border-primary">
                <i className="fas fa-envelope text-secondary me-2"></i>
                ikshvakucorpservices@gmail.com
              </span>
            </div>
          </div>
        </div>

        <hr className="text-light mt-5 mb-4" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <span className="text-light">
              <i className="fas fa-copyright text-secondary me-2"></i>
              {new Date().getFullYear()} Ikshvaku Corporate Services Pvt Ltd,
              All rights reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span className="text-light">
              Designed By{" "}
              <a
                href="https://www.rctechbox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none"
              >
                RC Erp Technologies Pvt Ltd
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
