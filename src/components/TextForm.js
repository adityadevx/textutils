import React, { useState } from "react";
import Typewriter from 'typewriter-effect';

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Upper Case Convert
  const handleUpClick = () => {
    // console.log("Upper Case Button Triggerd");

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  // Lower Case Convert
  const handleLowClick = () => {
    // console.log("Lower Case Button Triggerd");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  // Clear Text
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared the text", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h2><Typewriter
          options={{
            strings: props.heading,
            autoStart: true,
            loop: true,
          }}
        /></h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(28 20 75)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="container">
          <button
            className={`btn btn-primary m-2 ${text.length === 0 ? "disabled" : "show"
              }`}
            onClick={handleUpClick}
          >
            Convert UpperCase
          </button>
          <button
            className={`btn btn-primary m-2 ${text.length === 0 ? "disabled" : "show"
              }`}
            onClick={handleLowClick}
          >
            Convert LowerCase
          </button>
          <button
            className={`btn btn-primary m-2 ${text.length === 0 ? "disabled" : "show"
              }`}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className={`btn btn-primary m-2 ${text.length === 0 ? "disabled" : "show"
              }`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h1>Preview</h1>
        <h5>
          {text.length > 0
            ? text
            : "Enter something in the above TextBox to prieview"}
        </h5>
        <hr />

        <h2>Your Text Summary</h2>
        <p>
          Your text has{" "}
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length} </b>
          characters
        </p>
        <p>
          You need {"   "}
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          minutes to read this
        </p>
      </div>
    </>
  );
}

// {text.split(' ').length} is used to find the number of words
// {text.length} is used to find number of characters
// 0.008 * (-1 + text.split(" ").length) is the time required to read the given text 0.008 is the average time to read a word
