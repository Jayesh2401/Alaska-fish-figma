import { useEffect, useRef, useState } from "react";
import "./App.css";
import Demo from "./Components/Demo";
import NewReactHedaer from "./Components/NewReactHedaer";
import Tabbing from "./Components/Tabbing";
import "./Style/Style.scss";
import SwirlCursor from "./Swirl";
import Box from "./pages/Box";
import Footer from "./pages/Footer";
import Pricing from "./pages/Pricing";
import Slider from "./pages/Slider";
import Loder from "./Loder";

function App() {
  const appRef = useRef(null);
  const [contentLoaded, setContentLoaded] = useState(false);
  const handleScroll = (event) => {
    event.preventDefault();
    const container = appRef.current;
    const scrollStep = 10;
    const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
    console.log(delta);
    const scrollSpeed = Math.abs(delta * scrollStep);
    console.log(scrollSpeed);
    const clampedScrollSpeed = Math.min(scrollSpeed, 10);
    const targetScrollTop = container.scrollTop + clampedScrollSpeed;
    const maxScrollTop = container.scrollHeight - container.clientHeight;
    const clampedScrollTop = Math.max(
      0,
      Math.min(maxScrollTop, targetScrollTop)
    );
    container.scrollTo({
      top: clampedScrollTop,
      behavior: "smooth",
    });
  };

  function handleTouchStart(event) {
    event.preventDefault();
    const container = appRef.current;
    const scrollStep = 10;
    const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
    const scrollSpeed = Math.abs(delta * scrollStep);
    const clampedScrollSpeed = Math.min(scrollSpeed, 10);
    const targetScrollTop = container.scrollTop + clampedScrollSpeed;
    const maxScrollTop = container.scrollHeight - container.clientHeight;
    const clampedScrollTop = Math.max(
      0,
      Math.min(maxScrollTop, targetScrollTop)
    );
    container.scrollTo({
      top: clampedScrollTop,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.onload = () => {
      setContentLoaded(true);
    };
  }, []);

  return (
    <div
      ref={appRef}
      onWheel={(e) => handleScroll(e)}
      onTouchStart={handleTouchStart}
    >
      {!contentLoaded ? (
        <Loder/>
      ) : (
        <>
          <div className="bgGrad">
            <NewReactHedaer />
          </div>
          <SwirlCursor />
          <Tabbing />
          <Box />
          <Pricing />
          <Slider />
          <Demo />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
