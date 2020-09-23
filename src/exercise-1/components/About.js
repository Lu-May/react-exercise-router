import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css"

const About = () => {
  return (
    <Fragment>
      <p>Company:ThoughtWorks Local</p>
      <p>Location:Xi'an</p>
      <p>For more information,please</p>
      <p >view our <Link to="/" className="textLink">website</Link>.</p>
    </Fragment>
  );
};

export default About;
