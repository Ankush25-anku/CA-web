import React from "react";
import AboutHeader from "../../../components/aboutheader/AboutHeader";
import Facts from "../../../components/facts/Facts";
import About from "../../../components/about/About";
import Team from "../../../components/team/Team";

const page = () => {
  return (
    <div>
      <AboutHeader />
      {/* <Facts /> */}
      <About />
      <Team />
    </div>
  );
};

export default page;
