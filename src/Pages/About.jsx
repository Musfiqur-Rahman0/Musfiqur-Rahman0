import React from "react";
import AboutUs from "../About/AboutUs";
import TeamMembers from "../About/TeamMembers";
import Services from "../About/Services";

const About = () => {
  return (
    <div className="px-10 sm:px-20">
      <AboutUs />
      <TeamMembers />
      <Services />
    </div>
  );
};

export default About;
