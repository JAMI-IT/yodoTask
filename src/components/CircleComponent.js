import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envlopimage from "../images/envelop.png";
import cloosemodal from "../images/cloosemodal.png";
import addicon from "../images/add.png";
import { Stack } from "@mui/material";

// Main component
const CircleWithButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const [setscales, setSetscales] = useState(1);
  const closeModal = () => {
    setIsModalOpen(false);
    setSetscales(1);
  };

  // Array of button data with their properties
  const buttons = [
    {
      text: "My deliverability varies between tools I use to reach customers, why?",
      content:
        "My deliverability varies between tools I use to reach customers, why?",
      position: "topRight",
    },
    {
      text: "What is email deliverability, and why is it important?",
      content: "What is email deliverability, and why is it important?",
      position: "right",
    },
    {
      text: "Can InboxPlease fix my domain’s email deliverability if it's been flagged as spam?",
      content:
        "Can InboxPlease fix my domain’s email deliverability if it's been flagged as spam?",
      position: "bottomRight",
    },
    {
      text: "How long does it take to improve my email reputation?",
      content: "How long does it take to improve my email reputation?",
      position: "bottomLeft",
    },
    {
      text: "I have to keep generating new domains as my deliverability drops can you fix them?",
      content:
        "I have to keep generating new domains as my deliverability drops can you fix them?",
      position: "left",
    },
    {
      text: "My deliverability varies between tools I use to reach customers, why?",
      content:
        "My deliverability varies between tools I use to reach customers, why?",
      position: "topLeft",
    },
  ];

  return (
    <div style={styles.container}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(24px, 5vw, 36px)",
          marginBottom: "20px", // Add space below the heading
          zIndex: 1, // Ensures it stays on top of other content
          position: "relative", // Keeps the header above other content
        }}
      >
        <span style={{ color: "black" }}>Frequently </span>
        <span style={{ color: "#0A14D6" }}>Asked Questions</span>
      </h1>

      <div style={styles.circleContainer}>
        <div style={styles.circle}>
          <span className="changeColor">
            <img
              src={envlopimage}
              alt="Left"
              className="hover-image"
              onMouseOver={({ target }) => (target.style.color = "lightblue")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </span>
        </div>

        {/* Map through buttons array to render each button with animation */}
        <motion.div>
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              style={{ ...styles.button, ...styles[button.position] }}
              onClick={() => {
                openModal(button.content);
                setSetscales(2);
              }}
              initial={{ opacity: 0, y: -20, scale: 0 }} // Start from slightly above and hidden
              animate={{
                opacity: 1,
                y: 0,
                scale: setscales,
                rotate: isModalOpen ? 10 : 0,
              }} // Animate to original position
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay animation for each button
            >
              <img src={addicon} alt="icon" className="header-image-add" />
              {button.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Modal with Framer Motion */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            style={modalStyles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              style={modalStyles.modal}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                height={100}
              >
                <img
                  onClick={closeModal}
                  src={cloosemodal}
                  alt="Close"
                  className="header-image-nega"
                  style={{ cursor: "pointer" }}
                />
                <h2>{modalContent}</h2>
              </Stack>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
    padding: "20px",
    backgroundColor: "#F7F7F9",
    position: "relative", // Ensure the modal aligns relative to this
  },
  circleContainer: {
    position: "relative",
    width: "min(80vw, 600px)",
    height: "min(80vw, 600px)",
  },
  circle: {
    borderRadius: "50%",
    backgroundColor: "#0A14D6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  button: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "clamp(300px, 85vw, 450px)",
    minHeight: "70px",
    backgroundColor: "#fff",
    color: "#000",
    border: "2px solid #ccc",
    borderRadius: "60px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontSize: "clamp(16px, 3vw, 20px)",
    textAlign: "center",
    padding: "15px",
    overflow: "hidden",
  },
  iconButton: {
    fontSize: "clamp(20px, 3vw, 30px)",
    marginRight: "10px",
    color: "#0A14D6",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    padding: "5px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#D3F4FB",
  },
  topRight: {
    top: "15%",
    left: "65%",
  },
  right: {
    top: "40%",
    left: "75%",
  },
  bottomRight: {
    top: "72%",
    left: "60%",
  },
  bottomLeft: {
    top: "72%",
    left: "-40%",
  },
  left: {
    top: "40%",
    left: "-50%",
  },
  topLeft: {
    top: "15%",
    left: "-40%",
  },
};

// Modal Styles for Framer Motion
const modalStyles = {
  overlay: {
    position: "absolute", // Position overlay absolutely relative to the container
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F7F7F9", // Transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    flexDirection: "row",
    padding: "20px",
    width: "100%", // Modal width set relative to parent container width
    height: "20%", // Modal height set relative to parent container height
    maxWidth: "700px", // Maximum width of the modal
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    overflow: "auto", // Ensure content can scroll if it's too large
  },
};

export default CircleWithButtons;
