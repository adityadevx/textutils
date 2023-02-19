import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import AboutUs from "./components/AboutUs.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#08012e";
      document.body.style.color = "white";
      document.title = "TextUtills - Dark Mode";
      showAlert("Dark Mode has been Activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtills - Light Mode";
      showAlert("Light Mode has been Activated", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title={"TextUtils"}
          aboutUsText="About Us"
          mode={mode}
          toggleDarkMode={toggleDarkMode}
        />
        <Alert alert={alert} />

        <div className="container my-4">
          {
            <Routes>
              <Route
                path="/"
                element={
                  <TextForm
                    heading="Enter the text to analyse: "
                    mode={mode}
                    // alert={alert}
                    showAlert={showAlert}
                  />
                }
              ></Route>
              <Route
                path="/home"
                element={
                  <TextForm heading="Enter the text to analyse: " mode={mode} />
                }
              ></Route>

              <Route path="/aboutUs" element={<AboutUs mode={mode} />}></Route>
             
            </Routes>
          }
          {/* <TextForm heading="Enter the text to analyse: " mode={mode} /> */}

          {/* <AboutUs /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
