import React from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";

// Import images for the left and right side of the header
import leftImage from "./images/left-image.jpg"; // Path to your left image
import rightImage from "./images/left-image.jpg"; // Path to your right image

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
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          {/* Left Text */}
          <h1>Left Header Text</h1>
        </div>
        <div className="header-right">
          {/* Right Button */}
          <button className="header-button">Right Button</button>
        </div>
      </header>

      {/* Below the Header: Icons and Text */}
      <div className="header-bottom">
        <div className="icon-left">
          <img src={leftImage} alt="Left" className="header-image" />
        </div>
        <div className="header-text">
          <h2>Center Text Here</h2>
        </div>
        <div className="icon-right">
          <img src={rightImage} alt="Right" className="header-image" />
        </div>
      </div>

      {/* Sections to Animate */}
      <Section
        title="Section 1"
        content="This is the first section. It animates when you scroll."
      />
      <Section
        title="Section 2"
        content="Here comes another section with smooth animation."
      />
      <Section
        title="Section 3"
        content="Scrolling further? Here's the third animated section."
      />

      {/* Footer */}
      <footer className="footer">
        <h2>Frequently Asked Questions</h2>
        <p>How can I use this app? Simply scroll to enjoy the animations!</p>
      </footer>
    </div>
  );
}

export default App;
