import React from "react";
import "../Style/Style.scss";

function Footer() {
  return (
    <div className="pt-2">
      <div className="rounded-sm-5 rounded-4 backgroundvala">
        <p className="footerhead text-uppercase fw-bold text-center pt-4">
          Jump on Board Today
        </p>
        <p className="footerdisc fw-normal m-auto fs-6 lh-lg text-center text-capitalize">
          By reserving your monthly share, you’re helping to build a more
          sustainable food system that’s better for humans and fish alike.
        </p>
        <div className="d-flex justify-content-center pt-3 pb-4">
          <button className="rounded-3 border-0 footbutton text-white fw-bold lh-sm text-text-uppercase fs-6">
            Choose My plan
          </button>
        </div>
      </div>
      <div className="paddTop">
        <div className="bgGrad">
          <div className=" container ">
            <div className=" pt-4 d-flex justify-content-between align-items-center">
              <img src="logo 1.svg" alt="logo" className="logo1" />
              <img
                src="footer.png"
                alt="always smile"
                className="logo2"
                height="50"
              />
            </div>
            <hr />
            <div className="d-md-block d-none ">
              <div className="pt-4 d-flex anchorclass mx-auto fw-bold justify-content-around fs-6 lh-sm text-uppercase">
                <span className="poi">How it Works</span>
                <span className="poi">pricing</span>
                <span className="poi">Our mission</span>
                <span className="poi">Our story</span>
                <span className="poi">Reviews</span>
              </div>
              <div className="pt-4 d-flex blogclass justify-content-around mx-auto fw-normal text-text-uppercase ">
                <span className="poi">faq</span>
                <span className="poi">seafood</span>
                <span className="poi">blog</span>
                <span className="poi">careers</span>
                <span className="poi">contact</span>
              </div>
              <div className="pt-4 d-flex symbolclass justify-content-around mx-auto">
                <a href="/">
                  <img src="ut.svg" alt="youtube" />
                </a>
                <a href="/">
                  <img src="face.svg" alt="faceboook" />
                </a>
                <a href="/">
                  <img src="insta.svg" alt="instagram" />
                </a>
                <a href="/">
                  <img src="twi.svg" alt="twitter" />
                </a>
              </div>
            </div>

            <div className="row pt-4 d-flex mx-auto align-items-center text-uppercase responsivefooter d-md-none d-block">
              <div className="col-4 firstCol">
                <div className="poi">How it Works</div>
                <div className="poi">pricing</div>
                <div className="poi">Our mission</div>
                <div className="poi">Our story</div>
                <div className="poi">Reviews</div>
              </div>
              <div className="col-4 firstCol">
                <div className="poi">faq</div>
                <div className="poi">seafood</div>
                <div className="poi">blog</div>
                <div className="poi">careers</div>
                <div className="poi">contact</div>
              </div>
              <div className="col-4 firstCol">
                <div className="pb-3">
                  <a href="/" className="pe-4">
                    <img src="ut.svg" alt="youtube" />
                  </a>
                  <a href="/">
                    <img src="face.svg" alt="faceboook" />
                  </a>
                </div>
                <div>
                  <a href="/" className="pe-4">
                    <img src="insta.svg" alt="instagram" />
                  </a>
                  <a href="/">
                    <img src="twi.svg" alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="pt-md-4 pt-sm-2 d-flex mx-auto justify-content-between align-items-center  pb-3 footerFlex">
              <span>© 2020 Wild Alaskan, Inc.</span>
              <span className="poi">
                <img src="image 1.svg" alt="kevveny" />
              </span>
              <span>Privacy Policy | Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
