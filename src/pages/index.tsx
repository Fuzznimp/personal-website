import type { NextPage } from "next";
import React from "react";

import { ProjectList } from "@src/components/project-list";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <ProjectList />
    </React.Fragment>
  );
};

export default Home;
