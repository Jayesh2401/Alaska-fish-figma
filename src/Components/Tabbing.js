import React from "react";
import "../Style/Style.scss";
import Forbes from "../pages/Forbes";
import Epicurious from "../pages/Epicurious";
function Testing() {
  return (
    <div className=" paddTop container tabbing bg-white "
    >
      <p className=" position-absolute fw-bold pt-4 tabText text-uppercase"id="action1">As Seen on</p>
      <ul className="nav nav-tabs tabbingBorder rounded-4  align-items-center justify-content-center " id="myTab" role="tablist">
        <li className="nav-item smallScreenTab" role="presentation">
          <button
            className="nav-link rounded-4 active "
            id="forbes-tab"
            data-bs-toggle="tab"
            data-bs-target="#forbes"
            type="button"
            role="tab"
            aria-controls="forbes"
            aria-selected="true"
          >
            <img
              src="Group.jpg"
              alt="Forbes"
              className="imageBorder"
            />
          </button>
        </li>
        <li className="nav-item ps-4 " role="presentation">
          <button
            className="nav-link rounded-4" 
            id="epicurious-tab"
            data-bs-toggle="tab"
            data-bs-target="#epicurious"
            type="button"
            role="tab"
            aria-controls="epicurious"
            aria-selected="false"
          >
            <img
              src="epicurious.png"
              alt="epicurious"
              className="imageBorder"
            />
          </button>
        </li>
        <li className="nav-item ps-4" role="presentation">
          <button
            className="nav-link rounded-4"
            id="smarthatrawet-tab"
            data-bs-toggle="tab"
            data-bs-target="#smarthatrawet"
            type="button"
            role="tab"
            aria-controls="smarthatrawet"
            aria-selected="false"
          >
            <img
              src="martha.png"
              alt="martha"
              className="imageBorder"
            />
          </button>
        </li>
        <li className="nav-item ps-4" role="presentation">
          <button
            className="nav-link rounded-4"
            id="bonappetit-tab"
            data-bs-toggle="tab"
            data-bs-target="#bonappetit"
            type="button"
            role="tab"
            aria-controls="bonappetit"
            aria-selected="false"
          >
            <img
              src="bonappetite.png"
              alt="bonappetite"
              className="imageBorder"
            />
          </button>
        </li>
        <li className="nav-item ps-4" role="presentation">
          <button
            className="nav-link rounded-4"
            id="redearsDigest-tab"
            data-bs-toggle="tab"
            data-bs-target="#redearsDigest"
            type="button"
            role="tab"
            aria-controls="redearsDigest"
            aria-selected="false"
          >
            <img
              src="ReaderDigest.png"
              alt="redearsDigest"
              className="imageBorder"
            />
          </button>
        </li>
      </ul>

      <div className="tab-content pt-sm-5 pt-md-0" id="myTabContent">
        <div
          className="tab-pane fade show active forbess"
          id="forbes"
          role="tabpanel"
          aria-labelledby="forbes-tab"
        >
          <Forbes/>
        </div>
        <div
          className="tab-pane fade demo"
          id="epicurious"
          role="tabpanel"
          aria-labelledby="epicurious-tab"
        >
          <Epicurious/>
        </div>
        <div
          className="tab-pane fade forbess"
          id="smarthatrawet"
          role="tabpanel"
          aria-labelledby="smarthatrawet-tab"
        >
          <Forbes/>
        </div>
        <div
          className="tab-pane fade demo"
          id="bonappetit"
          role="tabpanel"
          aria-labelledby="bonappetit-tab"
        >
          <Epicurious/>
        </div>
        <div
          className="tab-pane fade forbess"
          id="redearsDigest"
          role="tabpanel"
          aria-labelledby="redearsDigest-tab"
        >
          redearsDigest
        </div>
      </div>
      
    </div>
  );
}

export default Testing;
