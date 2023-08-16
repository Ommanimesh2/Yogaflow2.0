import React from "react";
import { useState, useEffect } from "react";
import "./index.scss";
import stillDoubts from "../../app/assets/images/till-doubts.png";
import FAQBoxes from "./components/FAQBoxes";
import API from "../../app/api/axios";
const Faqs = () => {
  const [faq, setFaq] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get("faqs");
      const resp = await response.data.data;
      console.log(resp);
      setFaq(resp);
    };

    fetchData();
  }, []);
  return (
    <div className="row">
      <div className="col">
        <div className="faq_content">
          <div className="title">Frequently Asked Questions</div>
          <div className="sub_title">
            Can’t find the answer you’re looking for? Please get in touch.{" "}
          </div>
        </div>
        <div className="tabs">
          {faq?.map((faq) => {
            return (
              <FAQBoxes
                id={faq.id}
                question={faq.attributes.question}
                answer={faq.attributes.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
