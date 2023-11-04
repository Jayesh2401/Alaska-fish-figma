import React from "react";
import { Container, Row } from "react-bootstrap";

function Demo() {
  return (
    <div className="paddTop DounlePad" >
      <h2 className="text-center boxHeading fw-bold" id="action4">Member Reviews</h2>
      <span className="d-flex justify-content-center">
        <hr className="line" />
      </span>
      <Container style={{ paddingBottom: "150px" }} className="responsiveSpace">
        <Row className="flex-sm-row-reverse toComeCenter">
          <div className="col-sm-6">
            <img
              src="threepeople.png"
              alt="StepDish"
              className="forbesInside pt-sm-5 pt-3"
            />
          </div>
          <div className="col-sm-6 align-self-center paddTop afterMd">
            <p className="threepara text-capitalize fs-6 lh-lg fw-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="name fw-bold fs-5 lh-sm text-capitalize text-dark">John Smith</p>
            <p className="adress fw-normal mb-1 text-capitalize">California</p>
          </div>
        </Row>
        {/* <div className="rightsidethree">
          <img src="sidepic.svg" />
        </div> */}

        
        <div className="d-flex justify-content-center pt-md-5 pt-sm-3 ">
        <button className="rounded-2 buttonprices bg-white pt-2 pb-2 fw-bold">
          View More
        </button></div>
      </Container>
    </div>
  );
}

export default Demo;

{
  /* <div class="card-group">
<div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div> */
}
