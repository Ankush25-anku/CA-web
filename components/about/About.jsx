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
                alt="About Keerthi and Co"
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute w-75"
                style={{ top: "25%", left: "25%" }}
              >
                <img
                  src="/img/about-2.jpg"
                  className="img-fluid w-100 rounded"
                  alt="About Keerthi and Co 2"
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
            <h1 className="mb-4">It’s Our Business To Ensure Your Success</h1>
            <p>
              “Keerthi and Co” was established in 2017 by a young and
              knowledgeable Chartered Accountant professional. Since its
              inception, the firm has been delivering reliable and professional
              accounting and tax services to clients across the country with a
              focus on quality, timeliness, and efficiency.
            </p>
            <p className="mb-4">
              Guided by high standards of integrity, we specialize in providing
              the best accounting solutions, tax advisory, and financial
              consulting. With a strong emphasis on quality control and a
              professional team, we are committed to supporting your business
              growth and financial success.
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
