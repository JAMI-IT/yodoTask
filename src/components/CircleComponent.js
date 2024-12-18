import React, { useState } from "react";
import { FaEnvelope, FaPlus } from "react-icons/fa"; // Importing the email and add icons
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion for animations
import envlopimage from "../images/envelop.png";
// Main component
const CircleWithButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center", fontSize: "clamp(24px, 5vw, 36px)" }}>
        <span style={{ color: "black" }}>Frequently </span>
        <span style={{ color: "#0A14D6" }}>Asked Questions</span>
      </h1>

      <div style={styles.circleContainer}>
        <div style={styles.circle}>
          <span className="changeColor">
            <img
              src={envlopimage}
              alt="Left"
              className="header-image-cmp"
              onMouseOver={({ target }) => (target.style.color = "lightblue")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </span>
        </div>
        {/* Buttons around the circle */}
        <button
          style={{ ...styles.button, ...styles.topRight }}
          onClick={() =>
            openModal(
              "My deliverability varies between tools I use to reach customers, why?"
            )
          }
        >
          <div style={styles.iconWrapper}>
            <FaPlus style={styles.iconButton} />
          </div>
          My deliverability varies between tools I use to reach customers, why?
        </button>
        <button
          style={{ ...styles.button, ...styles.right }}
          onClick={() =>
            openModal("What is email deliverability, and why is it important?")
          }
        >
          <div style={styles.iconWrapper}>
            <FaPlus style={styles.iconButton} />
          </div>
          What is email deliverability, and why is it important?
        </button>
        <button
          style={{ ...styles.button, ...styles.bottomRight }}
          onClick={() =>
            openModal(
              "Can InboxPlease fix my domain’s email deliverability if it's been flagged as spam?"
            )
          }
        >
          <div style={styles.iconWrapper}>
            <FaPlus style={styles.iconButton} />
          </div>
          Can InboxPlease fix my domain’s email deliverability if it's been
          flagged as spam?{" "}
        </button>
        <button
          style={{ ...styles.button, ...styles.bottomLeft }}
          onClick={() =>
            openModal("How long does it take to improve my email reputation?")
          }
        >
          How long does it take to improve my email reputation?{" "}
          <div style={styles.iconWrapper}>
            <FaPlus style={styles.iconButton} />
          </div>
        </button>
        <button
          style={{ ...styles.button, ...styles.left }}
          onClick={() =>
            openModal(
              "I have to keep generating new domains as my deliverability drops can you fix them?"
            )
          }
        >
          I have to keep generating new domains as my deliverability drops can
          you fix them?{" "}
          <div style={styles.iconWrapper}>
            <FaPlus style={styles.iconButton} />
          </div>
        </button>
        <button
          style={{ ...styles.button, ...styles.topLeft }}
          onClick={() =>
            openModal(
              "My deliverability varies between tools I use to reach customers, why?"
            )
          }
        >
          My deliverability varies between tools I use to reach customers, why?
          <div style={styles.iconWrapper}>
            <FaPlus style={styles.iconButton} />
          </div>
        </button>
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
              <h2>Modal Content</h2>
              <p>{modalContent}</p>
              <button onClick={closeModal}>Close</button>
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
  },
  circleContainer: {
    position: "relative",
    width: "min(80vw, 600px)",
    height: "min(80vw, 600px)",
  },
  circle: {
    width: "70%",
    height: "70%",
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
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "500px",
    width: "80%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
};

export default CircleWithButtons;
