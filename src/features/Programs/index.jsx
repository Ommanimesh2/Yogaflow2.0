import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import data from "../../utils/data";
import CourseCard from "./components/CourseCard";

import CourseCaraousel from "../../app/components/CourseCarousel";
import API from "../../app/api/axios";
const Programs = () => {
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
  return (
    <div className="programs_wrapper">
      <div className="programs_content">
        <div className="programs_title">Programs Offered</div>
        <div className="programs_body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          recusandae! Inventore voluptatum deleniti nihil recusandae iusto vero,
          incidunt, mollitia et possimus impedit
          <br />
          <br />
          rerum, magni amet. Aperiam odio debitis consequuntur expedita. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Hic, nesciunt?
        </div>
      </div>
      <div className="regular_data">
        <div className="regular_title">Teacher Training Courses</div>
        {regularData.length > 0 && <CourseCaraousel item={regularData} />}
      </div>
      <div className="regular_data">
        <div className="regular_title">Consultation</div>
        {consultationData.length > 0 && (
          <CourseCaraousel item={consultationData} />
        )}
      </div>
      <div className="regular_data">
        <div className="regular_title">Regular Classes</div>
        {trainingData.length > 0 && <CourseCaraousel item={trainingData} />}
      </div>
    </div>
  );
};

export default Programs;
