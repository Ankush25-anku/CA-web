import React from "react";
import Link from "next/link";

const services = [
  {
    slug: "legal-matters",
    title: "Legal Matters",
    icon: "fa fa-balance-scale",
    desc: "Comprehensive legal advisory to ensure your business complies with statutory and regulatory requirements.",
  },
  {
    slug: "roc-compliances",
    title: "ROC Compliances",
    icon: "fa fa-file-alt",
    desc: "End-to-end ROC filing and compliance support to keep your business legally sound and up to date.",
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    icon: "fa fa-briefcase",
    desc: "Strategic financial and business advisory services to support growth, profitability, and sustainability.",
  },
  {
    slug: "management-support",
    title: "Management Support",
    icon: "fas fa-users",
    desc: "Helping businesses with management support and decision making to improve efficiency and compliance.",
  },
  {
    slug: "auditing-assurance",
    title: "Auditing & Assurance",
    icon: "fa fa-search",
    desc: "Independent auditing and assurance services to ensure transparency, accuracy, and compliance in financials.",
  },
  {
    slug: "tax-services",
    title: "Tax Services",
    icon: "fas fa-receipt",
    desc: "Expert tax planning, filing, and advisory services to help minimize liabilities and maximize savings.",
  },
];

const Services = () => {
  return (
    <div id="services" className="container-fluid services py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Our Services</h5>
          <h1>What Service We Offer</h1>
        </div>
        <div className="row g-5 services-inner">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className="col-md-6 col-lg-4 wow fadeIn"
              data-wow-delay={`${0.3 + idx * 0.2}s`}
            >
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className={`${service.icon} fa-7x mb-4 text-primary`} />
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.desc}</p>
                    <Link
                      href={`/service/${service.slug}`}
                      className="btn btn-secondary text-white px-5 py-3 rounded-pill"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
