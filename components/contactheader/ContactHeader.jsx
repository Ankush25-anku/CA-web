// File: src/components/contactheader/ContactHeader.jsx
import React from "react";
import Link from "next/link";
 // We'll create this CSS file

const ContactHeader = () => {
  return (
    <div className="container-fluid page-header py-5">
      <div className="container text-center py-5">
        <h1 className="display-2 text-white mb-4 animated slideInDown">
          Contact Us
        </h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link href="/" className="breadcrumb-link">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#" className="breadcrumb-link">Pages</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default ContactHeader;
