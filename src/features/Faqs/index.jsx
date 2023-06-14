import React from "react";
import { useState } from "react";
import "./index.scss";
import stillDoubts from '../../app/assets/images/till-doubts.png'
import FAQBoxes from "./components/FAQBoxes";
const Faqs = () => {
  return (
    <div className="row">
    <div className="col">
      <h2>Frequently Asked <b>Questions</b></h2>
      <h4>Everything you need to know about the services I offer. Can’t find the andwer you’re looking for? Please get in touch. </h4>
      <div className="tabs">
       <FAQBoxes id={1} question="aksdhfajsdfhasd faj  sdfhaojs dfha sdjf asd" answer="skuf giosdf Everything you need to know about the services I offer. Can’t find the andwer you’re looking for? Please get in touch.  gsd fhgo hsdfug hsudf gps dfg hsd fhgsd fg"/>
       <FAQBoxes id={2} question="aksdhfajsdfhasd faj sdfhaojs dfha sdjf asd" answer="skuf giosdf gsd fhgo hsdfug hsudf gps dfg hsd fhgsd fg"/>
       <FAQBoxes id={3} question="aksdhfajsdfhasd faj sdfhaojs dfha sdjf asd" answer="skuf giosdf gsd fhgo hsdfug hsudf gps dfg hsd fhgsd fg"/>
       <FAQBoxes id={4} question="aksdhfajsdfhasd faj sdfhaojs dfha sdjf asd" answer="skuf giosdf gsd fhgo hsdfug hsudf gps dfg hsd fhgsd fg"/>
      </div>

    </div>
    
  </div>
     
  );
};

export default Faqs;
