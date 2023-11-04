import React from "react";

function DemoHeader() {
  return (
    <nav className="container navbar navbar-expand-md navbar-light bg-light">
     
      <div className="d-flex align-items-center">
        <div>
          <a className="navbar-brand" href="#">
           
          </a>
        </div>
        <div>
          <ul className="d-flex headerLine m-0 ">
            <li> HOW &nbsp;IT'S &nbsp;WORK</li>
            <li>PRICE</li>
            <li>REVIEW</li>
            <li>OUR &nbsp;STORY</li>
          </ul>
        </div>
        <div className="leftClass">
          <a className="" href="#">
            LOGIN
          </a>

          <button>JOIN TODAY</button>
        </div>
      </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default DemoHeader;
