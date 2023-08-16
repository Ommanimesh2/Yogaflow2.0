import "./index.css";
import { useState, useEffect, useRef } from "react";
import BlogCard from "../BlogCard";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
const Carousel = () => {
  const TOTAL_SLIDES = 3; // n-1 in Array
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  const desired = (e) => {
    setCurrent(Number(e.target.id));
  };
  const { isLoading, serverError, apiData } = useFetch("blogs/");

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading) {
    console.log(apiData);
    content = apiData?.data?.map((e) => {
      console.log(e);
      return <BlogCard content={e} />;
    });
  }
  useEffect(() => {
    ref.current.style.transition = "all 0.5s ease-in-out";
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return (
    <div className="wrapper">
      <div className="frame">
        <div className="box-container" ref={ref}>
          {content}
        </div>
      </div>
      <div className="button-2-container">
        {[0, 1].map((num) => (
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

export default Carousel;
