import React, { useState } from "react";

function Pricing() {
  const [price, setPrice] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const oneMonth = () => {
    setPrice(false);
    setFirst(false);
    setSecond(false);
    setThird(false);
  };

  const twoMonth = () => {
    console.log("ebjkfwk");
    setPrice(true);
    setFirst(true);
    setSecond(true);
    setThird(true);
  };
  return (
    <div className="pt-sm-5 pt-3">
      <h2 className="text-center boxHeading fw-bold" id="action2">
        Choose Your Plan
      </h2>
      <span className="d-flex justify-content-center">
        <hr className="line" />
      </span>
      <div className="d-flex justify-content-center  pt-sm-4 pt-2 pb-sm-5 pb-3 ">
        <p className=" fiscBoxCenter text-md-center mb-0">
          We'll send you a box <span className="fw-bold">once a month.</span>{" "}
          You can change, pause or cancel your membership anytime before it
          renews <span className="fw-bold">each month.</span>
        </p>
      </div>
      <div>
        {price ? (
          <div className="d-flex flex-row text-uppercase buttonPrice fw-bold p-1 lh-sm rounded-3  mx-auto Pricing">
            <div
              className=" p-3  text-center poi fw-bold"
              onClick={() => oneMonth()}
            >
              Every Month
            </div>
            &nbsp;&nbsp;
            <div className="p-3 activeMonth rounded-3 poi text-white text-center fw-bold lh-sm">
              Every 2 Month
            </div>
          </div>
        ) : (
          <div className="d-flex flex-row text-uppercase buttonPrice fw-bold p-1 lh-sm rounded-3  mx-auto Pricing">
            <div className=" p-3 activeMonth  poi rounded-3 text-white text-center fw-bold lh-sm">
              Every Month
            </div>
            &nbsp;&nbsp;
            <div
              className=" p-3  text-center poi fw-bold"
              onClick={() => twoMonth()}
            >
              Every 2 Month
            </div>
          </div>
        )}

        <div className="container pt-sm-5 pt-3 ps-0">
          <div className="d-flex flex-row gap-4 cardRes pt-2 pb-2">
            <div className="p-3 col-md-4 cardShadow rounded-4 cardAdjust ">
              <div className="d-flex justify-content-center">
                <img src="one.png" alt="crab" />
              </div>
              <div className="d-flex flex-column">
                <span className="titlePhoto  pt-3 fw-bold fs-6 ps-3 text-text-capitalize">
                  Wild Salmon Box
                </span>
                <p className="cardDisc fw-normal lh-base ps-3 pt-2 pb-2 text-capitalize">
                  Our signature box featuring 6-ounce portions of wild salmon —
                  such as Sockeye and Coho.
                </p>
                {price ? (
                  <>
                    <div className="d-flex flex-row  buttonPrice p-1 rounded-3 text-uppercase">
                      {first ? (
                        <>
                          <div
                            onClick={() => setFirst(false)}
                            className=" p-3 text-center poi fw-bold lh-sm"
                          >
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            24 pack
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div
                            className=" p-3 text-center poi fw-bold lh-sm"
                            onClick={() => setFirst(true)}
                          >
                            24 pack
                          </div>
                        </>
                      )}
                    </div>
                    <div className="d-flex justify-content-around pt-4 fw-bold text-uppercase amountFlex">
                      <p>$21.98</p>
                      <p>$1.98</p>
                      <p>$263.76</p>
                    </div>
                    <div className="d-flex justify-content-around pt-3 fw-bold amountText">
                      <p>Per 6 oz. Pack</p>
                      <p>Shipping</p>
                      <p>Monthly Total</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex flex-row  buttonPrice p-1 rounded-3 text-uppercase">
                      {first ? (
                        <>
                          <div
                            onClick={() => setFirst(false)}
                            className=" p-3 text-center poi fw-bold lh-sm"
                          >
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            24 pack
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div
                            className=" p-3 text-center poi fw-bold lh-sm"
                            onClick={() => setFirst(true)}
                          >
                            24 pack
                          </div>
                        </>
                      )}
                    </div>
                    <div className="d-flex justify-content-around pt-4 fw-bold text-uppercase amountFlex">
                      <p>$10.99</p>
                      <p>$0.99</p>
                      <p>$131.88</p>
                    </div>
                    <div className="d-flex justify-content-around pt-3 fw-bold amountText">
                      <p>Per 6 oz. Pack</p>
                      <p>Shipping</p>
                      <p>Monthly Total</p>
                    </div>
                  </>
                )}

                <div className="pt-3 cradButton pb-2">
                  <button className="p-3 poi rounded-3 bg-white fw-bold lh-sm text-uppercase">
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className="p-3 col-md-4 cardShadow rounded-4">
              <div className="d-flex justify-content-center">
                <img src="two.png" alt="crab" style={{ width: "312px" }} />
              </div>
              <div className="d-flex flex-column">
                <span className="titlePhoto fs-6 ps-3 text-text-capitalize pt-3 fw-bold">
                  Wild Salmon Box
                </span>
                <p className="cardDisc fw-normal lh-base ps-3 pt-2 pb-2 text-capitalize">
                  Our signature box featuring 6-ounce portions of wild salmon —
                  such as Sockeye and Coho.
                </p>
                {price ? (
                  <>
                    <div className="d-flex flex-row  buttonPrice p-1 rounded-3 text-uppercase">
                      {second ? (
                        <>
                          <div
                            onClick={() => setSecond(false)}
                            className=" p-3 text-center poi fw-bold lh-sm"
                          >
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            24 pack
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div
                            className=" p-3 text-center poi fw-bold lh-sm"
                            onClick={() => setSecond(true)}
                          >
                            24 pack
                          </div>
                        </>
                      )}
                    </div>
                    <div className="d-flex justify-content-around pt-4 fw-bold text-uppercase amountFlex">
                      <p>$21.98</p>
                      <p>$1.98</p>
                      <p>$263.76</p>
                    </div>
                    <div className="d-flex justify-content-around pt-3 fw-bold amountText">
                      <p>Per 6 oz. Pack</p>
                      <p>Shipping</p>
                      <p>Monthly Total</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex flex-row  buttonPrice p-1 rounded-3 text-uppercase">
                      {second ? (
                        <>
                          <div
                            onClick={() => setSecond(false)}
                            className=" p-3 text-center poi fw-bold lh-sm"
                          >
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            24 pack
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div
                            className=" p-3 text-center poi fw-bold lh-sm"
                            onClick={() => setSecond(true)}
                          >
                            24 pack
                          </div>
                        </>
                      )}
                    </div>
                    <div className="d-flex justify-content-around pt-4 fw-bold text-uppercase amountFlex">
                      <p>$10.99</p>
                      <p>$0.99</p>
                      <p>$131.88</p>
                    </div>
                    <div className="d-flex justify-content-around pt-3 fw-bold amountText">
                      <p>Per 6 oz. Pack</p>
                      <p>Shipping</p>
                      <p>Monthly Total</p>
                    </div>
                  </>
                )}

                <div className="pt-3 cradButton pb-2">
                  <button className="p-3 rounded-3 poi bg-white fw-bold lh-sm text-uppercase">
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className="p-3 col-md-4 cardShadow rounded-4">
              <div className="d-flex justify-content-center">
                <img src="three.png" alt="crab" style={{ width: "312px" }} />
              </div>
              <div className="d-flex flex-column">
                <span className="titlePhoto fs-6 ps-3 text-capitalize pt-3 fw-bold">
                  Wild Salmon Box
                </span>
                <p className="cardDisc fw-normal lh-base ps-3 pt-2 pb-2 text-capitalize">
                  Our signature box featuring 6-ounce portions of wild salmon —
                  such as Sockeye and Coho.
                </p>
                {price ? (
                  <>
                    <div className="d-flex flex-row  buttonPrice p-1 rounded-3 text-uppercase">
                      {third ? (
                        <>
                          <div
                            onClick={() => setThird(false)}
                            className=" p-3 text-center poi fw-bold lh-sm"
                          >
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            24 pack
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div
                            className=" p-3 text-center poi fw-bold lh-sm"
                            onClick={() => setThird(true)}
                          >
                            24 pack
                          </div>
                        </>
                      )}
                    </div>
                    <div className="d-flex justify-content-around pt-4 fw-bold text-uppercase amountFlex">
                      <p>$21.98</p>
                      <p>$1.98</p>
                      <p>$263.76</p>
                    </div>
                    <div className="d-flex justify-content-around pt-3 fw-bold amountText">
                      <p>Per 6 oz. Pack</p>
                      <p>Shipping</p>
                      <p>Monthly Total</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex flex-row  buttonPrice p-1 rounded-3 text-uppercase">
                      {third ? (
                        <>
                          <div
                            onClick={() => setThird(false)}
                            className=" p-3 text-center poi fw-bold lh-sm"
                          >
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            24 pack
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" p-3 activeMonth poi rounded-3 text-white text-center fw-bold lh-sm">
                            12 Pack
                          </div>
                          &nbsp;&nbsp;
                          <div
                            className=" p-3 text-center poi fw-bold lh-sm"
                            onClick={() => setThird(true)}
                          >
                            24 pack
                          </div>
                        </>
                      )}
                    </div>
                    <div className="d-flex justify-content-around pt-4 fw-bold text-uppercase amountFlex">
                      <p>$10.99</p>
                      <p>$0.99</p>
                      <p>$131.88</p>
                    </div>
                    <div className="d-flex justify-content-around pt-3 fw-bold amountText">
                      <p>Per 6 oz. Pack</p>
                      <p>Shipping</p>
                      <p>Monthly Total</p>
                    </div>
                  </>
                )}

                <div className="pt-3 cradButton  pb-2">
                  <button className="p-3 rounded-3 bg-white poi fw-bold lh-sm text-uppercase">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rightSidepic">
          <img src="rightside.png" alt="rightSide" />
        </div> */}
      </div>
    </div>
  );
}

export default Pricing;

{
  /* <div className="d-flex justify-content-around pt-4 fw-bold text-uppercase amountFlex">
                  <p>$10.99</p>
                  <p>$0.99</p>
                  <p>$131.88</p>
                </div>
                <div className="d-flex justify-content-around pt-3 fw-bold amountText">
                  <p>Per 6 oz. Pack</p>
                  <p>Shipping</p>
                  <p>Monthly Total</p>
                </div> */
}
