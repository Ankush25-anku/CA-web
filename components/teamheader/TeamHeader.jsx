// File: src/components/teamheader/TeamHeader.jsx
import React from "react";
import Link from "next/link";

const TeamHeader = () => {
  return (
    <div className="container-fluid page-header py-5">
      <div className="container text-center py-5">
        <h1 className="display-2 text-white mb-4 animated slideInDown">
          Our Team
        </h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#">Pages</Link>{" "}
              {/* Replace '#' with actual page link if available */}
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Our Team
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default TeamHeader;
