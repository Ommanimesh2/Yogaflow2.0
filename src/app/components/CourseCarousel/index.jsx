import React, { useEffect, useState, useRef } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./index.css";
import useDrag from "../../hooks/useDrag";
import CourseCard from "../../../features/Programs/components/CourseCard";

const CourseCaraousel = ({ item }) => {
  const TOTAL_SLIDES = 3; // n-1 in Array
  const [current, setCurrent] = useState(0);
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const ref = useRef(null);
  let arr = [];
  for (let i = 0; i < item.length / 2; i++) {
    arr[i] = i;
  }
  const next = () => {
    if (current >= TOTAL_SLIDES) return;
    else setCurrent(current + 1);
  };

  const prev = () => {
    if (current === 0) return;
    else setCurrent(current - 1);
  };

  const desired = (e) => {
    setCurrent(Number(e.target.id));
  };

  useEffect(() => {
    ref.current.style.transition = "all 0.5s ease-in-out";
    ref.current.style.transform = `translateX(-${current * 15}%)`;
  }, [current]);

  return (
    <div className="course_wrapper">
      <div className="course_frame">
        <ScrollMenu
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          <div className="course_box-container" ref={ref}>
            {item?.map((item) => {
              return <CourseCard content={item} />;
            })}
          </div>
        </ScrollMenu>
      </div>
      <div className="button-2-container">
        {arr?.map((num) => (
          <div
            className={`button-2 ${num === current && "active"}`}
            onClick={desired}
            id={num}
            key={num}
          />
        ))}
      </div>
    </div>
  );
};
export default CourseCaraousel;
