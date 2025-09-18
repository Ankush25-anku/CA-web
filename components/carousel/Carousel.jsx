"use client";

import React from "react";

export default function Carousel() {
  return (
    <div className="container-fluid px-0">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Second slide"
          ></li>
        </ol>

        {/* Slides */}
        <div className="carousel-inner" role="listbox">
          {/* First Slide */}
          <div className="carousel-item active">
            <img
              src="/img/carousel-1.jpg"
              className="img-fluid"
              alt="First slide"
            />
            <div className="carousel-caption">
              <div className="container carousel-content">
                <h6 className="text-secondary h4 animated fadeInUp">
                  Trusted Accounting Experts
                </h6>
                <h1 className="text-white display-1 mb-4 animated fadeInRight">
                  We Are Leaders In Accounting & Tax Services
                </h1>
                <p className="mb-4 text-white fs-5 animated fadeInDown">
                  Providing high-quality accounting, auditing, and tax solutions
                  to help businesses and individuals achieve financial success.
                </p>
                <a href="#" className="me-2">
                  <button
                    type="button"
                    className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft"
                  >
                    Read More
                  </button>
                </a>
                <a href="#" className="ms-2">
                  <button
                    type="button"
                    className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight"
                  >
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img
              src="/img/carousel-2.jpg"
              className="img-fluid"
              alt="Second slide"
            />
            <div className="carousel-caption">
              <div className="container carousel-content">
                <h6 className="text-secondary h4 animated fadeInUp">
                  Professional Chartered Accountants
                </h6>
                <h1 className="text-white display-1 mb-4 animated fadeInLeft">
                  High-Quality Accounting & Tax Solutions
                </h1>
                <p className="mb-4 text-white fs-5 animated fadeInDown">
                  From bookkeeping to strategic tax planning, we deliver
                  personalized services tailored to meet your financial goals.
                </p>
                <a href="#" className="me-2">
                  <button
                    type="button"
                    className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft"
                  >
                    Read More
                  </button>
                </a>
                <a href="#" className="ms-2">
                  <button
                    type="button"
                    className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight"
                  >
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
