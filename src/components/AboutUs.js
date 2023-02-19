import React, { useState } from "react";

export default function AboutUs(props) {
  const mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#08012e" : "white",
  };

  return (
    <>
      <div className="container" style={mystyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <strong> Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt maxime aperiam minima voluptates, quisquam asperiores
                blanditiis soluta itaque neque quos laudantium eaque excepturi.
                Ut beatae dolores dolor cumque. Omnis magni eius minima unde
                dignissimos eveniet fuga debitis aliquid, voluptas
                necessitatibus perferendis eaque tempore est officiis nesciunt
                officia doloribus? Deserunt, dolore?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                <strong> Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt maxime aperiam minima voluptates, quisquam asperiores
                blanditiis soluta itaque neque quos laudantium eaque excepturi.
                Ut beatae dolores dolor cumque. Omnis magni eius minima unde
                dignissimos eveniet fuga debitis aliquid, voluptas
                necessitatibus perferendis eaque tempore est officiis nesciunt
                officia doloribus? Deserunt, dolore?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <strong>Browser Cpompatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt maxime aperiam minima voluptates, quisquam asperiores
                blanditiis soluta itaque neque quos laudantium eaque excepturi.
                Ut beatae dolores dolor cumque. Omnis magni eius minima unde
                dignissimos eveniet fuga debitis aliquid, voluptas
                necessitatibus perferendis eaque tempore est officiis nesciunt
                officia doloribus? Deserunt, dolore?
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <button className="btn btn-primary my-3"></button>
        </div> */}
      </div>
    </>
  );
}
