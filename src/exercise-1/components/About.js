import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <p>Company:ThoughtWorks Local</p>
      <p>Location:Xi'an</p>
      <p>For more information,please</p>
      <p>view our <Link to="/" className="nav-link">website</Link></p>
    </Fragment>
  );
};

export default About;
