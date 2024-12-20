import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import CircleWithButtons from "./components/CircleComponent";
import leftImage from "./images/google.png";
import rightImage from "./images/apple.png";
import bottomleft from "./images/window.png";
import bottomright from "./images/monkey.png";
import inboxplease from "./images/inbox.png";
import next from "./images/next.png";
import next1 from "./images/whitearrow.png";
import { motion } from "framer-motion";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic";
import { Stack } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Section({ title, content }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`section ${inView ? "animate" : ""}`}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function App() {
  const [currentText, setCurrentText] = useState("Marketer");
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlidingOut(true);
      setTimeout(() => {
        setCurrentText((prevText) =>
          prevText === "Marketer" ? "SaaS" : "Marketer"
        );
        setIsSlidingOut(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { ref: drawerRef, inView: drawerInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView && !hasAnimated) {
        setHasAnimated(true);
      }
    },
  });

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <img
            src={inboxplease}
            alt="InboxPlease Logo"
            className="header-left-image"
          />
        </div>
        <div className="header-right">
          <button className="header-button-login">Log In</button>
          <button className="header-button">
            Sign Up
            <img
              src={next}
              alt="Next"
              id="next-image-get"
              className="header-image-next"
            />
          </button>
        </div>
      </header>

      <div className="header-bottom">
        <img src={leftImage} alt="Google" className="header-image" />
        <div className="header-text">
          <h1 style={{ fontSize: "90px" }}>
            Improve Your{" "}
            <span style={{ color: "blue" }}>Email Deliverability</span> with
            InboxPlease
          </h1>
          <div className="engagement-text-container">
            <p style={{ width: "80%" }}>
              Increase engagement and prevent your domain, IP, or applications
              from being blacklisted. We work with any platform and email
              provider to {"   "}
              <span style={{ color: "blue", fontWeight: "bold" }}>
                helping
              </span>{" "}
              <span className="sliding-text">{currentText}</span> improve inbox
              placement and maintain your email sending reputation.
            </p>
          </div>
        </div>
        <div className="icon-container">
          <img src={rightImage} alt="Apple" className="header-image" />
        </div>
      </div>

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 200,
          duration: 1,
        }}
      >
        <div style={styles.buttonContainer}>
          <img src={bottomleft} alt="Windows" className="header-image" />
          <Stack mt={10} gap={5} flexDirection={"row"} maxWidth={900}>
            <button className="header-button-get">
              Get Started
              <img
                src={next1}
                alt="Next"
                className="header-image-next"
                id="next-image-get"
              />
            </button>
            <button className="header-button">
              Learn More
              <img
                src={next}
                alt="Next"
                id="next-image-get"
                className="header-image-next"
              />
            </button>
          </Stack>
          <img src={bottomright} alt="Monkey" className="header-image" />
        </div>
        <DashboardLayoutBasic />
      </motion.div>

      <Section
        title="Section 1"
        content="This is the first section. It animates when you scroll."
      />
      <Section
        title="Section 2"
        content="Here comes another section with smooth animation."
      />
      <CircleWithButtons />
    </div>
  );
}

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
};

export default App;
