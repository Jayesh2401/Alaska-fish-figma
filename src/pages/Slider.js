// import React from 'react'
// import CarouselSlider from "react-carousel-slider";

// function Slider() {
//     let data = [
//     {
//       imgSrc: "first.png",
//     },
//     {
//       imgSrc: "second.png"
//     },

//     {
//       imgSrc: "fish.png"
//     },

//   ];

//   // let sliderBoxStyle = {
//   //   // height: "400px"
//   //   //, width: "200px"
//   //   // , background: "tranparent"
//   // };
//   return (
//     <div  className="threeGeneration paddTop fs-6">
//       <p className="text-center fw-bold text-uppercase">
//         Famly <span> ● </span> tradition <span> ● </span> expertise
//       </p>
//       <h2 className="text-center boxHeading">Three Generations On Your Side</h2>
//       <span className="d-flex justify-content-center">
//         <hr className="line" />
//       </span>
//       <div>
//         <div className="d-flex gap-2 align-items-center handling">
//           <div className="taka25">
//             <div className="">
//               <p className='fw-normal lh-lg text-capitalize'>
//                 Robert Kallenberg left New Jersey for Alaska in 1926, fished for
//                 sockeye salmon on a wooden sailboat and wrote his master's
//                 thesis on the conservation of wild fish. Nearly 100 years later,
//                 the deep connection Robert made with Alaska and one of the
//                 world's most bountiful, renewable resources lives on.
//               </p>

//               <button className="rounded-3 text-white fw-bold text-uppercase">
//                 get to know us
//               </button>
//             </div>
//           </div>
//           <div className="taka75">
//           <CarouselSlider
//       slideItems={data}
//       // manner={manner}
//       // buttonSetting={buttonSetting}
//       // sliderBoxStyle={sliderBoxStyle}
//       // itemsStyle={itemsStyle}
//       // textBoxStyle={textBoxStyle}
//       // dotsSetting={false}
//     />
//           </div>
//         </div>

//         {/* <div className="d-flex justify-content-evenly pt-4">
//         <div className="p-3 cardShadow rounded-4">
//               <div className="d-flex justify-content-center">
//                 <img src="two.png" alt="crab" style={{ width: "312px" }} />
//               </div>
//               </div>
//               <div className="p-3 cardShadow rounded-4">
//               <div className="d-flex justify-content-center">
//                 <img src="two.png" alt="crab" style={{ width: "312px" }} />
//               </div>
//               </div>

//         </div> */}
//       </div>
//     </div>
//   )
// }

// export default Slider

// import React, { useRef, useState } from "react";
// import "../Style/Style.scss";
// function Slider() {
//   const [isMoved, setIsMoved] = useState(false);
//   const [slideNumber, setSlideNumber] = useState(0);
//   const list = ["first.png", "second.png", "fish.png"];

//   const listRef = useRef();

//   const handleClick = (direction) => {
//     console.log(listRef);

//     // setIsMoved(true);
//     let distance = listRef.current.getBoundingClientRect().x - 400;
//     console.log(distance, "distance");
//     console.log(440 + distance, "distance");

//     if (direction === "left" && slideNumber > 0) {
//       setSlideNumber(slideNumber - 1);
//       listRef.current.style.transform = `translateX(${40 + distance}px)`;
//     }
//     if (direction === "right" && slideNumber < 2) {
//       setSlideNumber(slideNumber + 1);
//       listRef.current.style.transform = `translateX(${-500 + distance}px)`;
//     }
//   };

//   return (
//     <div className="threeGeneration paddTop fs-6">
//       <p className="text-center fw-bold text-uppercase" id="action3">
//         Famly <span> ● </span> tradition <span> ● </span> expertise
//       </p>
//       <h2 className="text-center boxHeading fw-bold">
//         Three Generations On Your Side
//       </h2>
//       <span className="d-flex justify-content-center">
//         <hr className="line" />
//       </span>
//       <div>
//         <div className="d-flex gap-2 align-items-center handling">
//           <div className="taka25 pb-md-0 pb-2">
//             <div className="textDiv">
//               <p className="fw-normal lh-lg text-capitalize">
//                 Robert Kallenberg left New Jersey for Alaska in 1926, fished for
//                 sockeye salmon on a wooden sailboat and wrote his master's
//                 thesis on the conservation of wild fish. Nearly 100 years later,
//                 the deep connection Robert made with Alaska and one of the
//                 world's most bountiful, renewable resources lives on.
//               </p>
//               <div className="middleButton">
//                 <button className="rounded-3 text-white fw-bold text-uppercase">
//                   get to know us
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="taka75">
//             <div className="WrapperAll">
//               <div className="listImg" ref={listRef}>
//                 {list.map((e, i) => {
//                   console.log(i * 344 - 500 + i * 2, "i");
//                   return (
//                     <div
//                       key={i}
//                       index={i}
//                       item={e}
//                       className="listItem"
//                       style={{ left: i * 344 - 500 + i * 2 }}
//                     >
//                       <img src={e} alt={e} className="imageAdjust"/>
//                       {/* <span className="imageSlider">
//                         Lorem Ipsum is simply dummy text of the printing and
//                         typesetting industry.
//                       </span> */}
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="pt-3 pb-3">
//                 <span
//                   className="sliderArroww left poi"
//                   onClick={() => handleClick("left")}
//                   // disabled={isMoved}
//                   // disbaled="true"
//                   // style={{ display: !isMoved && "none" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-chevron-left"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
//                     />
//                   </svg>
//                 </span>
//                 <span
//                   className="sliderArroww right ms-sm-5 ms-3 poi"
//                   onClick={() => handleClick("right")}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-chevron-right"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//                     />
//                   </svg>{" "}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Slider;

import React, { useRef, useState } from "react";
import "../Style/Style.scss";
function Slider() {
  // const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const list = ["first.png", "second.png", "fish.png"];

  const listRef = useRef();
  console.log(slideNumber);
  const handleClick = (direction) => {
    let imageWidth = document.querySelector(".imageAdjust").width + 20;

    // setIsMoved(true);
    // let distance = listRef.current.getBoundingClientRect().x - divWidth - 60;
    // console.log(distance,"distance");
    // console.log(440+distance,"distance");
    console.log(direction,"direction");

    switch (slideNumber) {
      case 0:
        if (direction === "right") {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-imageWidth}px)`;
        }
        break;
      case 1:
        switch (direction) {
          case "left":
            console.log(slideNumber, "sad");
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(0px)`;
            break;
          case "right":
            setSlideNumber(slideNumber + 1);
            console.log(imageWidth);
            // console.log(imagess);
            listRef.current.style.transform = `translateX(-${
              imageWidth * 2 + 10
            }px)`;
        }
        break;

      // if (direction === "right") {
      //     setSlideNumber(slideNumber + 1);
      //     console.log(imageWidth);
      //     console.log(secondtransform);
      //     // console.log(imagess);
      //     listRef.current.style.transform = `translateX(-${secondtransform}px)`;
      //   } else if (direction === "left") {
      //     console.log(slideNumber,"sad");
      //     listRef.current.style.transform = `translateX(${4000}px)`;
      //     setSlideNumber(slideNumber - 1);
      //     // listRef.current.style.transform = `translateX(0px)`;
      //   }

      case 2:
        if (direction === "left") {
          console.log(imageWidth,"came");
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${-imageWidth}px)`;
        }
        break;

      default:
        break;
    }

    // if (direction === "left" && slideNumber > 0) {
    //   setSlideNumber(slideNumber - 1);
    //   listRef.current.style.transform = `translateX(${imageWidth}px)`;
    // }
    // if (direction === "right" && slideNumber < 2) {
    //   setSlideNumber(slideNumber + 1);
    //   listRef.current.style.transform = `translateX(${-imageWidth}px)`;
    // }
  };

  return (
    <div className="threeGeneration paddTop fs-6">
      <p className="text-center fw-bold text-uppercase" id="action3">
        Famly <span> ● </span> tradition <span> ● </span> expertise
      </p>
      <h2 className="text-center boxHeading fw-bold">
        Three Generations On Your Side
      </h2>
      <span className="d-flex justify-content-center">
        <hr className="line" />
      </span>
      <div>
        <div className="d-flex gap-2 align-items-center handling">
          <div className="taka25 pb-md-0 pb-2" id="divv">
            <div className="textDiv">
              <p className="fw-normal lh-lg text-capitalize">
                Robert Kallenberg left New Jersey for Alaska in 1926, fished for
                sockeye salmon on a wooden sailboat and wrote his master's
                thesis on the conservation of wild fish. Nearly 100 years later,
                the deep connection Robert made with Alaska and one of the
                world's most bountiful, renewable resources lives on.
              </p>
              <div className="middleButton">
                <button className="rounded-3 text-white fw-bold text-uppercase">
                  get to know us
                </button>
              </div>
            </div>
          </div>
          <div className="taka75">
            <div className="WrapperAll">
              <div className="listImg" ref={listRef}>
                {list.map((e, i) => {
                  // console.log(i * 344 - 500 + i * 2,"i")
                  return (
                    <div
                      key={i}
                      index={i}
                      item={e}
                      className="listItem"
                      style={{ left: i * 344 - 500 + i * 2 }}
                    >
                      <img src={e} alt={e} className="imageAdjust" />
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 pb-3">
                <span
                  className="sliderArroww left poi"
                  onClick={() => handleClick("left")}
                  // disabled={isMoved}
                  // disbaled="true"
                  // style={{ display: !isMoved && "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </span>
                <span
                 
                 className={ slideNumber === 2 ? "sliderArroww right ms-sm-5 ms-3 poi bg-light d-none" : "sliderArroww right ms-sm-5 ms-3 poi"}
                  onClick={() => handleClick("right")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

