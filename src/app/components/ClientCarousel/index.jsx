import React, { useEffect, useRef, useState } from "react";
import "./index.css";
const ClientCaraousel = ({ items, intervalDuration }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    setContainerWidth(containerRef.current.offsetWidth);
    setScrollWidth(scrollRef.current.scrollWidth);

    const handleResize = () => {
      setContainerWidth(containerRef.current.offsetWidth);
      setScrollWidth(scrollRef.current.scrollWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const moveNext = () => {
      const maxScrollPosition = scrollWidth - containerWidth;
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition > maxScrollPosition ? 0 : newPosition;
      });
    };

    intervalRef.current = setInterval(moveNext, intervalDuration);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [containerWidth, scrollWidth, intervalDuration]);

  return (
    <div className="carousel-container" ref={containerRef}>
      <div
        className="carousel-scroll"
        ref={scrollRef}
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCaraousel;
