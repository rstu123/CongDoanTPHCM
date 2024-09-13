/* eslint-disable prettier/prettier */
import React from "react";

import DefaultLayoutDashboard from "@/layouts/dashboard/default";
import AccessionsDashboard from "@/components/dashboard/accessions";

const Accessions = () => {
  return (
    <DefaultLayoutDashboard>
      <AccessionsDashboard />
    </DefaultLayoutDashboard >
  );
};

export default Accessions

