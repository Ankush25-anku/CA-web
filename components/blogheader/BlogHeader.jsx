// File: src/components/blogheader/BlogHeader.jsx
import React from "react";
import Link from "next/link";
 // CSS file for hover styles

const BlogHeader = () => {
  return (
    <div className="container-fluid page-header py-5">
      <div className="container text-center py-5">
        <h1 className="display-2 text-white mb-4 animated slideInDown">
          Our Blog
        </h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link href="/" className="breadcrumb-link">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#" className="breadcrumb-link">
                Pages
              </Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BlogHeader;
