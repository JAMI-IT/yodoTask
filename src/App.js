import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css"; // Import the updated CSS
import CircleWithButtons from "./components/CircleComponent";
import leftImage from "./images/google.png"; // Path to your left image
import rightImage from "./images/apple.png"; // Path to your right image
import bottomleft from "./images/window.png";
import bottomright from "./images/monkey.png";
import inboxplease from "./images/inbox.png";
import next from "./images/next.png";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic";

function Section({ title, content }) {
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the element is visible
    triggerOnce: true, // Only trigger the animation once
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlidingOut(true);
      setTimeout(() => {
        setCurrentText((prevText) =>
          prevText === "Marketer" ? "SaaS" : "Marketer"
        );
        setIsSlidingOut(false);
      }, 500); // Duration of the slide-out animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  // Animation when drawer is in view
  const { ref: drawerRef, inView: drawerInView } = useInView({
    threshold: 0.5, // Trigger when 50% of the drawer is in view
  });
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          {/* Left Text */}
          <img src={inboxplease} alt="Left" className="header-left-image" />
        </div>
        <div className="header-right">
          <button className="header-button-login">Log In</button>
          <button className="header-button">
            Sign Up
            <img src={next} alt="Next" className="header-image-next" />
          </button>
        </div>
      </header>

      {/* Below the Header: Icons and Text */}
      <div className="header-bottom">
        <div>
          <div className="icon-left">
            <img src={leftImage} alt="Left" className="header-image" />
          </div>
          <div className="icon-left">
            <img src={bottomleft} alt="Window" className="header-image" />
          </div>
        </div>
        <div className="header-text">
          <h1 style={{ fontSize: "90px" }}>
            Improve Your{" "}
            <span style={{ color: "blue" }}>Email Deliverability</span> with
            InboxPlease
          </h1>
          <div className="engagement-text-container">
            <p>
              Increase engagement and prevent your domain, IP, or applications
              from being blacklisted. We work with any platform and email
              provider to{"  "}
              <span style={{ color: "blue" }}>Helping</span> {"   "}
              <span className="sliding-text">{currentText}</span> {"    "}{" "}
              improve inbox placement and maintain your email sending
              reputation.
            </p>
          </div>
          <div style={styles.container}>
            <div style={styles.buttonContainer}>
              <button className="header-button">
                Get Started
                <img src={next} alt="Next" className="header-image-next" />
              </button>
              <button className="header-button">
                Get Started
                <img src={next} alt="Next" className="header-image-next" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="icon-right">
            <img src={rightImage} alt="Right" className="header-image" />
          </div>
          <div className="icon-left">
            <img src={bottomright} alt="Monkey" className="header-image" />
          </div>
        </div>
      </div>

      {/* Sections to Animate */}
      <div
        ref={drawerRef}
        className={`dashboard-layout ${drawerInView ? "dashboard-animate" : ""}`}
      >
        <DashboardLayoutBasic />
      </div>

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
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    minHeight: "5vh",
    gap: "10px", // Adjust the space between buttons as needed
  },
  button: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    backgroundColor: "#0A14D6",
    color: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
  },
  icon: {
    marginLeft: "2px",
  },
};

export default App;
