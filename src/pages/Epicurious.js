import React from 'react'
import { Container, Row } from "react-bootstrap";
import "../Style/Style.scss";
function Epicurious() {
  return (
    <div className="pb-sm-5">
      <h2 className="text-center fw-bold forbes">
        Eat Epicurious Every Month
      </h2>
    <span className="d-flex justify-content-center"><hr className="line"/></span>
      <Container style={{ paddingBottom: "150px" }} className="forSmallP">
        <Row>
         
          <div className="col-sm-6 align-self-center ps-0 pt-sm-5 SmallScrren">
            <h3>Select Your Plan</h3>
            <p className="text-capitalize fs-6 mb-0">
              Whether you're a salmon lover or prefer a variety, we offer three
              different plans that take the guesswork out of buying seafood.
            </p>
          </div>
          <div className="col-sm-6">
            <img
              src="Group 80.png"
              alt="StepDish"
              className="forbesInside pt-md-5"
            />
          </div>
        </Row>
      {/* <div className="rightside">
        <img src="rightside.png"/>
      </div> */}
      </Container>
      <Container
        className="SmallContainer rounded-5"
      >
        <div className="p-4 removepa">
          <p className="w-75 disc lh-lg fw-normal text-center mx-md-auto text-capitalize fs-6">
            Our seafood is sourced in small batches based on the number of
            active members and product availability. We update all members via
            email before shipping new product.
          </p>
        </div>
        <div className="d-flex justify-content-center boxprice pb-2 ">
        <button className="rounded-2 border-0 buttonprice p-2 text-white fw-bold text-uppercase ">
          View plans & pricing
        </button></div>
      </Container>
    </div>
  )
}

export default Epicurious