import React from "react";
import BlogHeader from "../../../components/blogheader/BlogHeader";
import Facts from "../../../components/facts/Facts";
import Blog from "../../../components/blog/Blog";

const page = () => {
  return (
    <div>
      <BlogHeader />
      <Facts />
      <Blog />
    </div>
  );
};

export default page;
