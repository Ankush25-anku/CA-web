"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="container-fluid bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          {/* Brand */}
          <a href="/" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">Ikshvaku</h1>
          </a>

          {/* Toggler */}
          <button
            type="button"
            className="navbar-toggler me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className="collapse navbar-collapse bg-transparent"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              <a href="/" className="nav-item nav-link active text-secondary">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/service" className="nav-item nav-link">
                Services
              </a>
              <a href="/project" className="nav-item nav-link">
                Projects
              </a>

              {/* Dropdown */}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded">
                  <a href="/blog" className="dropdown-item">
                    Our Blog
                  </a>
                  <a href="/team" className="dropdown-item">
                    Our Team
                  </a>
                  <a href="/testimonial" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="/404" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>

              <a href="/contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="d-none d-xl-flex flex-shirink-0">
            <div
              id="phone-tada"
              className="d-flex align-items-center justify-content-center me-4"
            >
              <a href="#" className="position-relative animated tada infinite">
                <i className="fa fa-phone-alt text-white fa-2x"></i>
                <div
                  className="position-absolute"
                  style={{ top: "-7px", left: "20px" }}
                >
                  <span>
                    <i className="fa fa-comment-dots text-secondary"></i>
                  </span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column pe-4 border-end">
              <span className="text-white-50">Have any questions?</span>
              <span className="text-secondary">Call: + 0123 456 7890</span>
            </div>
            <div className="d-flex align-items-center justify-content-center ms-4 ">
              <a href="#">
                <i className="bi bi-search text-white fa-2x"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
