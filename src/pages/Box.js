import React from "react";
import "../App.css";

function Box() {
  return (
    <div className="pt-5 pb-sm-5" style={{ maxHeight: "950px" }}>
      <h2 className="text-center boxHeading fw-bold text-capitalize">
        What's in the box ?
      </h2>
      <span className="d-flex justify-content-center">
        <hr className="line" />
      </span>
      <div className="d-flex justify-content-center pt-2 p-3">
        <img src="box.png" alt="box" className="boxdetail" />
      </div>
      <div className="d-flex justify-content-center pt-4">
        <p className=" fiscBox fw-fw-normal text-capitalize lh-lg text-sm-center mb-0 fs-6">
          We proudly ship a wide variety of wild-caught species from Alaska and
          the Pacific Northwest including sockeye salmon, coho salmon,{" "}
          pacific cod, pacific halibut and wild Alaska pollock.
        </p>
      </div>

      <div className="checkbox mx-sm-auto pt-4">
        <div className="row jutify-content-center">
          <div className="col-sm-6 andar">
            <ul className="list-unstyled">
              <li className="pt-2">
                <img
                  src="check.png"
                  alt="check"
                  className="rounded-circle circleSize m-2"
                  width="20"
                  height="20"
                />
                Individually-Sealed Avg. 6 Each 
              </li>
              <li className="pt-2">
                <img
                  src="check.png"
                  alt="check"
                  className="rounded-circle circleSize m-2"
                  width="20"
                  height="20"
                />
                Ready-to-Cook
              </li>
              <li className="pt-2">
                <img
                  src="check.png"
                  alt="check"
                  className="rounded-circle circleSize m-2"
                  width="20"
                  height="20"
                />
                Sustainably Harvested
              </li>
            </ul>
          </div>
          <div className="col-sm-6 andar">
            <ul className="list-unstyled">
              <li className="pt-2">
                <img
                  src="check.png"
                  alt="check"
                  className="rounded-circle circleSize m-2"
                  width="20"
                  height="20"
                />
                Caught and Processed in the USA
              </li>
              <li className="pt-2">
                <img
                  src="check.png"
                  alt="check"
                  className="rounded-circle circleSize m-2"
                  width="20"
                  height="20"
                />
                Wild Caught
              </li>
              <li className="pt-2">
                <img
                  src="check.png"
                  alt="check"
                  className="rounded-circle circleSize m-2"
                  width="20"
                  height="20"
                />
                Never Farmed or Genetically 
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src="sidepic.svg" alt="sidepic" className="sidepiicbox" />
    </div>
  );
}

export default Box;
