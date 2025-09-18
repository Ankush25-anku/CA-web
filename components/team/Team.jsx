// src/components/team/Team.jsx
import React from "react";

const Team = () => {
  return (
    <div id="ourteam" className="container-fluid py-5 mb-5 team">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Our Team</h5>
          <h1>Meet our expert Team</h1>
        </div>

        {/* Team Carousel */}
        <div
          className="owl-carousel team-carousel wow fadeIn"
          data-wow-delay=".5s"
        >
          {/* Team Member 1 */}
          <div className="rounded team-item">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle">
                  <img
                    src="img/team-1.jpg"
                    className="img-fluid w-100 rounded-circle"
                    alt="Keerthi M"
                  />
                </div>
                <div className="team-name text-center py-3">
                  <h4>Keerthi M</h4>
                  <p className="m-0">Chartered Accountant</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="rounded team-item">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle">
                  <img
                    src="img/team-2.jpg"
                    className="img-fluid w-100 rounded-circle"
                    alt="Harshith Gowda"
                  />
                </div>
                <div className="team-name text-center py-3">
                  <h4>Harshith Gowda</h4>
                  <p className="m-0">Business Head</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="rounded team-item">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle">
                  <img
                    src="img/team-3.jpg"
                    className="img-fluid w-100 rounded-circle"
                    alt="Vaishaka B.E, MBA"
                  />
                </div>
                <div className="team-name text-center py-3">
                  <h4>Vaishaka B.E, MBA</h4>
                  <p className="m-0">HR and Management</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 4 (Optional, can remove or keep as placeholder) */}
          <div className="rounded team-item">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle">
                  <img
                    src="img/team-4.jpg"
                    className="img-fluid w-100 rounded-circle"
                    alt="Team Member"
                  />
                </div>
                <div className="team-name text-center py-3">
                  <h4>Full Name</h4>
                  <p className="m-0">Designation</p>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary text-white rounded-circle m-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Carousel */}
      </div>
    </div>
  );
};

export default Team;
