import React from "react";

const Contact = () => {
  return (
    <div id="contact-us" className="container-fluid py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Get In Touch</h5>
          <h1 className="mb-3">Contact for any query</h1>
          <p className="mb-2">
            Reach out to <b>Ikshvaku Corporate Services Pvt Ltd</b> for all your
            queries related to Accounts, Audit, Taxation, Payroll & Legal
            Compliances. Our team will be happy to assist you.
          </p>
        </div>

        <div className="contact-detail position-relative p-5">
          <div className="row g-5 mb-5 justify-content-center">
            {/* Address */}
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-primary">Address</h4>
                  <a
                    href="https://www.google.com/maps?q=No.3/2,+Ground+Floor,+Pushkara,+Sharada+Vidhya+Mandir+Road,+Varthur,+Bengaluru,+Karnataka+560087"
                    target="_blank"
                    rel="noreferrer"
                    className="h5"
                  >
                    No.3/2, Ground Floor, Pushkara, Sharada Vidhya Mandir Road,
                    Varthur, Bengaluru Urban, Karnataka – 560087
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa fa-phone text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-primary">Call Us</h4>
                  <a className="h5 d-block" href="tel:+918553830398">
                    +91 85538 30398
                  </a>
                  <a className="h5 d-block" href="tel:+9188296301351">
                    +91 82963 01351
                  </a>
                  <a className="h5 d-block" href="tel:08068708560">
                    080-68708560
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex bg-light p-3 rounded">
                <div
                  className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa fa-envelope text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 className="text-primary">Email Us</h4>
                  <a
                    className="h5 d-block text-break"
                    style={{ wordBreak: "break-word", whiteSpace: "normal" }}
                    href="mailto:ikshvakucorpservices@gmail.com"
                  >
                    ikshvakucorpservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map + Contact Form */}
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
              <div className="p-5 h-100 rounded contact-map">
                <iframe
                  className="rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.405504826028!2d77.74798697411855!3d12.94737748736145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13dc9d91e4a5%3A0x7c41a7b4f0b97c7d!2sVarthur%2C+Bengaluru%2C+Karnataka+560087!5e0!3m2!1sen!2sin!4v1695032100000!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
              <div className="p-5 rounded contact-form">
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control border-0 py-3"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-100 form-control border-0 py-3"
                    rows="6"
                    cols="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-start">
                  <button
                    className="btn bg-primary text-white py-3 px-5"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
