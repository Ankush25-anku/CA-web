// src/components/testimonial/Testimonial.jsx
import React from "react";

const Testimonial = () => {
  return (
    <div className="container-fluid testimonial py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Our Testimonial</h5>
          <h1>What Our Clients Say!</h1>
        </div>

        {/* Carousel */}
        <div
          className="owl-carousel testimonial-carousel wow fadeIn"
          data-wow-delay=".5s"
        >
          {/* Testimonial Item 1 */}
          <div className="testimonial-item border p-4">
            <div className="d-flex align-items-center">
              <div>
                <img src="img/testimonial-1.jpg" alt="Client" />
              </div>
              <div className="ms-4">
                <h4 className="text-secondary">Anil Kumar</h4>
                <p className="m-0 pb-3">Business Owner</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                </div>
              </div>
            </div>
            <div className="border-top mt-4 pt-3">
              <p className="mb-0">
                Keerthi & Co. has been managing my company accounts for the past
                3 years. Their expertise in tax planning and compliance has
                saved us significant time and money.
              </p>
            </div>
          </div>

          {/* Testimonial Item 2 */}
          <div className="testimonial-item border p-4">
            <div className="d-flex align-items-center">
              <div>
                <img src="img/testimonial-2.jpg" alt="Client" />
              </div>
              <div className="ms-4">
                <h4 className="text-secondary">Priya Sharma</h4>
                <p className="m-0 pb-3">Entrepreneur</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                </div>
              </div>
            </div>
            <div className="border-top mt-4 pt-3">
              <p className="mb-0">
                The firm provides clear guidance on financial structuring and
                GST compliance. I can fully focus on growing my business while
                they take care of the numbers.
              </p>
            </div>
          </div>

          {/* Testimonial Item 3 */}
          <div className="testimonial-item border p-4">
            <div className="d-flex align-items-center">
              <div>
                <img src="img/testimonial-3.jpg" alt="Client" />
              </div>
              <div className="ms-4">
                <h4 className="text-secondary">Rajesh Nair</h4>
                <p className="m-0 pb-3">Startup Founder</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                </div>
              </div>
            </div>
            <div className="border-top mt-4 pt-3">
              <p className="mb-0">
                Their team is highly professional and approachable. They guided
                me step-by-step in setting up proper accounting systems for my
                startup.
              </p>
            </div>
          </div>

          {/* Testimonial Item 4 */}
          {/* <div className="testimonial-item border p-4">
            <div className="d-flex align-items-center">
              <div>
                <img src="img/testimonial-4.jpg" alt="Client" />
              </div>
              <div className="ms-4">
                <h4 className="text-secondary">Meera Iyer</h4>
                <p className="m-0 pb-3">Freelancer</p>
                <div className="d-flex pe-5">
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                  <i className="fas fa-star me-1 text-primary"></i>
                </div>
              </div>
            </div>
            <div className="border-top mt-4 pt-3">
              <p className="mb-0">
                Filing taxes used to be stressful, but with Keerthi & Co., it’s
                completely hassle-free. Their personal attention makes all the
                difference.
              </p>
            </div>
          </div> */}
        </div>
        {/* End Carousel */}
      </div>
    </div>
  );
};

export default Testimonial;
