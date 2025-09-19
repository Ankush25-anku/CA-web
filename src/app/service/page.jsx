import React from "react";
import ServiceHeader from "../../../components/serviceheader/ServiceHeader";
import Facts from "../../../components/facts/Facts";
import Services from "../../../components/services/Services";

const page = () => {
  return (
    <div>
      <ServiceHeader />
      {/* <Facts /> */}
      <Services />
    </div>
  );
};

export default page;
