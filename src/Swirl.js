// import React, { useRef, useEffect } from 'react';

// const SwirlCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const onMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       const cursor = cursorRef.current;

//       if (cursor) {
//         cursor.style.left = `${clientX}px`;
//         cursor.style.top = `${clientY}px`;
//       }
//     };

//     document.addEventListener('mousemove', onMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);
//     };
//   }, []);

//   return (
//     <div ref={cursorRef} className="swirl-effect" />
//   );
// };

// export default SwirlCursor;


import React from 'react'

function Swirl() {
  return (
    <div>Swirl</div>
  )
}

export default Swirl