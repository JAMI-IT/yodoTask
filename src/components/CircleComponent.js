import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envlopimage from "../images/envelop.png";
import cloosemodal from "../images/cloosemodal.png";
import addicon from "../images/add.png";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { buttons } from "./buttonsdata";

const CircleWithButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const { id } = useParams();
  const imageHasLoaded = true;
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const [setscales, setSetscales] = useState(1);
  const closeModal = () => {
    setIsModalOpen(false);
    setSetscales(1);
  };

  return (
    <div style={styles.container}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(24px, 5vw, 36px)",
          marginBottom: "20px",
          zIndex: 1,
          position: "relative",
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
        <motion.div>
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              style={{ ...styles.button, ...styles[button.position] }}
              onClick={() => {
                openModal(button.content);
                setSetscales(0.7);
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: setscales,
              }}
              transition={{ duration: 0.7, delay: index * 0.01 }}
            >
              {index < 3 && (
                <img src={addicon} alt="icon" className="header-image-add" />
              )}
              <motion.div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                {button.text}
              </motion.div>
              {index >= 3 && (
                <img src={addicon} alt="icon" className="header-image-add" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            style={modalStyles.overlay}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <motion.div
              style={modalStyles.modal}
              initial={{ y: "50px", x: "-50px", opacity: 0 }}
              animate={{
                y: 0,
                x: 0,
                opacity: 1,
              }}
              exit={{
                y: "-50px",
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
    padding: "20px",
    backgroundColor: "#F7F7F9",
    position: "relative",
  },
  circleContainer: {
    position: "relative",
    width: "min(80vw, 600px)",
    height: "min(80vw, 600px)",
  },
  circle: {
    borderRadius: "50%",
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

const modalStyles = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F7F7F9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    flexDirection: "row",
    padding: "20px",
    width: "100%",
    height: "20%",
    maxWidth: "700px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    overflow: "auto",
  },
};

export default CircleWithButtons;
