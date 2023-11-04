import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MainScreen from "./MainScreen";

function NewReactHedaer() {

  const [nav , setNav] = useState(true)
  return (
    <>
      <Navbar className=" pb-4 pt-0 " expand="md">
        <Container className="screenAdjust md-p-0">
          <Navbar.Brand href="#">
            <img
              src="logo 1.svg"
              alt="logo"
              width="70"
              height="70"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>

          {/* <Navbar.Toggle className="" aria-controls="navbarScroll" /> */}

          {
            nav ? (
              <>
            <Navbar.Toggle className="" aria-controls="navbarScroll" onClick={()=>setNav(false)} />
              </>
            ) :(
          <Navbar.Toggle className="border-0" aria-controls="navbarScroll" onClick={()=>setNav(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x-lg text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </Navbar.Toggle>
            )
          }


          {/* <span className="">X</span> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="HeaderClass  fw-bold me-auto my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="  lg-ps-4" href="#action1">
                {" "}
                HOW &nbsp;IT'S &nbsp;WORK
              </Nav.Link>
              <Nav.Link className="lg-ps-4" href="#action2">
                PRICE
              </Nav.Link>
              <Nav.Link className="lg-ps-4" href="#action3">
                REVIEW
              </Nav.Link>
              <Nav.Link className="lg-ps-4" href="#action4">
                OUR &nbsp;STORY
              </Nav.Link>
            </Nav>
            <div className="navbar-nav  align-items-md-start d-md-block">
              <div className="leftClass fw-bold">
                <a className="text-decoration-none" href="/">
                  LOGIN 
                </a>

                <button className="ms-4 p-2 fw-bold text-white border-0 joinToday rounded-3">
                  JOIN TODAY
                </button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img
        src="sidepic.svg"
        alt="sidepic"
        className="position-absolute sidePic"
      />
      <MainScreen />
    </>
  );
}

export default NewReactHedaer;
