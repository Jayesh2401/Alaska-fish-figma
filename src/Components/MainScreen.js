import React from 'react'
import { Container, Row } from "react-bootstrap";

function MainScreen() {
  return (
    <div className='navBarCon'>
    <Container>
      <Row>
        <div className="col-sm-6 mainScreen paddTop  text">
          <h1 className='fw-bold text-dark md-lh-lg ps-xl-1'>
            WILD-CAUGHT 
          </h1>
          <h1 className='fw-bold text-dark md-lh-lg ps-xl-1 '>SUSTAINABLE <span>SEAFOOD</span></h1>
          <p className="pt-2 ps-xl-1 fs-sm-5 lh-md-lg">
            A monthly seafood membership that delivers sustainably-sourced
            seafood to your doorstep.
          </p>
          <div className='d-flex ps-xl-1 buttonShrink'>

          <button className="maintain">
            <a className="btn btn-first p-2 rounded-3 text-white fw-bold" href="/">
              RESERVE MY SHARE TODAY
            </a>
          </button>
          <button>
            <a className="btn btn-second p-2 rounded-3 fw-bold " href="/">
              HOW DOES IT WORK
            </a>
          </button>
          </div>
        </div>
        <div className="col-sm-6 reactStage">
        <img src="landingphoto.png"  alt="Bigdish" className="ps-3 image_homeScreen" />
        </div>
      </Row>
    </Container>
  </div>
  )
}

export default MainScreen