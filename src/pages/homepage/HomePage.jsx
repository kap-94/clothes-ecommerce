import React from "react";

import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjOne } from "../../components/InfoSection/data";

const HomePage = () => {
  return (
    <React.Fragment>
      <InfoSection {...homeObjOne} />
    </React.Fragment>
  );
};

export default HomePage;
