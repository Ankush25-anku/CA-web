"use client";

import React from "react";

export default function About() {
  return (
    <div id="about-us" className="container-fluid py-5 my-5">
      <div className="container pt-5">
        <div className="row g-5">
          {/* Left Images Section */}
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s"
          >
            <div className="h-100 position-relative">
              <img
                src="/img/about-1.jpg"
                className="img-fluid w-75 rounded"
                alt="About Ikshvaku Corporate Services"
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute w-75"
                style={{ top: "25%", left: "25%" }}
              >
                <img
                  src="/img/about-2.jpg"
                  className="img-fluid w-100 rounded"
                  alt="About Ikshvaku Corporate Services 2"
                />
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s"
          >
            <h5 className="text-primary">About Us</h5>
            <h1 className="mb-4">Your Trusted Partner for Corporate Success</h1>
            <p>
              <b>Ikshvaku Corporate Services Pvt Ltd</b> is a professional
              corporate services firm specializing in{" "}
              <b>Accounts, Audit, Taxation, Payroll, and Legal Compliances</b>.
              We are proudly associated with Mahesh N &amp; Co., Chartered
              Accountants, ensuring top-quality financial and legal advisory for
              businesses of all sizes.
            </p>
            <p className="mb-4">
              Guided by high standards of integrity and excellence, we are
              committed to providing reliable, efficient, and result-oriented
              solutions tailored to your business needs. With our expert team
              and client-focused approach, we aim to support your growth and
              long-term success.
            </p>
            <a
              href="#"
              className="btn btn-secondary rounded-pill px-5 py-3 text-white"
            >
              More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
