import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function UnderConstruction() {
  return (
    <div>
      <div className="error-page">
        <img src="/assets/Under_construction_asset.svg" alt="Error 404" />
        <h1 className="main-color error-page-msg">PAGE UNDER CONSTRUCTION!!</h1>
        <Link
          type="button"
          className="link btn bg-main px-lg-5 px-3 py-3 text-white"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default UnderConstruction;
