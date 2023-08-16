import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import SessionCard from "./SessionCard";
import API from "../../app/api/axios";
import { loadStripe } from "@stripe/stripe-js";
import dataContext from "../../app/context/datacontext";

const BookASession = () => {
  const [sessionData, setSessionData] = useState();
  const [shown, setShown] = useState(false);
  const { orderedSession, setOrderedSession } = useContext(dataContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    phone: null,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.phone === null ||
      formData.email === ""
    ) {
      console.log("fill everything");
    } else {
      try {
        const stripePromise = loadStripe(
          process.env.REACT_APP_STRIPE_PUBLIC_KEY
        );
        console.log(orderedSession);
        const stripe = await stripePromise;
        console.log(stripe);
        const postdata = {
          orderedSession: [orderedSession],
          userDetails: [formData],
        };
        console.log(postdata);
        const res = await API.post("orders", postdata);
        console.log(res);
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get("sessions");
      const resp = await response.data.data;
      console.log(resp);
      setSessionData(resp);
    };
    fetchData();
  }, []);
  function animateAndHide() {
    const div = document.querySelector(".shown_book_form");
    const form = document.getElementById("session_booking_form");
    form.reset();
    div.style.transform = "translateY(100%)";
    div.style.transition = "1s";
    div.classList.add("hidden");
  }
  useEffect(() => {
    setTimeout(() => {
      animateAndHide();
    }, 50);
  }, []);

  return (
    <div className="page_session">
      <div className="session_title">Sessions' Pricing</div>
      <div className="session_page_wrapper">
        {sessionData?.map((e) => {
          return <SessionCard wholeData={e} data={e.attributes} id={e.id} />;
        })}
      </div>
      <div className={"shown_book_form"}>
        <div className="left_book_content">
          <h2>Join us now and find your inner balance with us !</h2>
          <h1>Book a Session</h1>
        </div>
        <div className="right_book_content">
          <div
            onClick={() => {
              animateAndHide();
            }}
            class="cross-button"
          >
            <div class="line"></div> <div class="line"></div>
          </div>
          <form id="session_booking_form">
            <div className="name">
              <input
                type="text"
                name="firstName"
                placeholder="first Name *"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <div className="date_custom_component">
              <div>
                {formData.date
                  ? formData.date
                  : "Select the starting date for the session"}
              </div>
              <span class="datepicker-toggle">
                <span class="datepicker-toggle-button"></span>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  class="datepicker-input"
                />
              </span>
            </div>
            <button onClick={(e) => handlePayment(e)}>
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookASession;
