import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <p>All Products:</p>
      <Link></Link>
      <p>For more information,please</p>
      <p>view our <Link to="/" className="nav-link">website</Link></p>
    </Fragment>
  );
};

export default Products;