import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../app/api/axios";
import { loadStripe } from "@stripe/stripe-js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CourseCaraousel from "../../app/components/CourseCarousel";
import Rating from "../../app/components/Ratings";
import "./index.css";
const Consultation = () => {
  const { id } = useParams();
  const [specificData, setSpecificData] = useState([]);
  const [trainingData, setTrainingData] = useState([]);
  const [consultationData, setConsultationData] = useState([]);
  const [regularData, setRegularData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await API.get("courses");
      const consult = await API.get("consultations");
      const arr1 = [];
      consult.data.data.forEach((e) => {
        const { id, attributes } = e;
        const dataWithId = {
          id,
          ...attributes,
        };
        arr1.push(dataWithId);
      });
      setConsultationData(arr1);
      const arr = [];
      resp.data.data.forEach((e) => {
        const { id, attributes } = e;
        const dataWithId = {
          id,
          ...attributes,
        };
        arr.push(dataWithId);
      });
      divideData(arr);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(trainingData, consultationData, regularData);
  }, [trainingData, consultationData, regularData]);
  const divideData = (data) => {
    const training = [];
    const consultation = [];
    const other = [];

    data.forEach((item) => {
      if (item.type === "training") {
        training.push(item);
      } else if (item.type === "consultation") {
        console.log("object");
      } else {
        other.push(item);
      }
    });

    setTrainingData(training);
    // setConsultationData(consultation);
    setRegularData(other);
  };
  useEffect(() => {
    const fetchData = async () => {
      const resp = await API.get(`consultations/${id}?populate=*`);
      setSpecificData(resp.data.data);
      console.log(resp.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(specificData);
  }, [specificData]);
  const handlePayment = async () => {
    try {
      const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

      const stripe = await stripePromise;
      const res = await API.post("orders", {
        courses: [specificData],
      });
      console.log(res);
      await stripe.redirectToCheckout({ sessionId: res.data.stripeSession.id });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ margin: 64 }}>
      <div className="course_content_cover">
        <div className="course_cover_image">
          {specificData?.attributes?.image?.data?.attributes && (
            <img
              src={`http://localhost:1337${specificData?.attributes?.image?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="course_cover_body">
          <h1>{specificData?.attributes?.title}</h1>
          <h2>{specificData?.attributes?.description}</h2>
          <div className="course_tags">
            <div className="course_tag"> {specificData?.attributes?.tag_1}</div>
            <div className="course_tag"> {specificData?.attributes?.tag_2}</div>
            <div className="course_tag"> {specificData?.attributes?.tag_3}</div>
          </div>
          <p>Course fee: INR {specificData?.attributes?.price}</p>

          <div className="ratings">
            <div className="rating_user">
              {specificData?.attributes?.rating}
            </div>
            <Rating value={specificData?.attributes?.rating} />
            <div className="already_enrolled">
              {specificData?.attributes?.enrolled_users} Already enrolled
            </div>
          </div>
          <div className="course_cover_btns">
            <button onClick={() => handlePayment()}>Start Watching</button>{" "}
            <span>( Full lifetime Access )</span>
          </div>
        </div>
      </div>

      <div className="course_description_content">
        <div className="title">{specificData?.attributes?.heading_1}</div>
        <div className="body">
          <ReactMarkdown
            children={specificData?.attributes?.content_1}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <div className="title">{specificData?.attributes?.heading_2}</div>
        <div className="body">
          <ReactMarkdown
            children={specificData?.attributes?.content_2}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <div className="title">{specificData?.attributes?.heading_3}</div>
        <div className="body">
          <ReactMarkdown
            children={specificData?.attributes?.content_3}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
      <div className="regular_data">
        <div className="regular_title">More like this ...</div>
        {trainingData.length > 0 && <CourseCaraousel item={trainingData} />}
      </div>
    </div>
  );
};

export default Consultation;
