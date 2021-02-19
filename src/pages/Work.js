import React from "react";
import styled from "styled-components";
//images
import geordiPic from "../img/geordiPic.PNG";
import cubePic from "../img/cubePic.PNG";
import flashcardPic from "../img/flashcardPic.PNG";
import cinemaPic from "../img/cinemaPic.PNG";
//animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const Work = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  return (
    <S_Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
      layout="position"
    >
      {/* these get staggered because of the staggerChildren property in pageAnimation */}
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <S_Project>
        <motion.h2 variants={fade}>Interactive CSS Cube</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a
          href="https://lenniecottrell.github.io/3D-CSS-cube/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S_Hide>
            <motion.img
              variants={photoAnim}
              src={cubePic}
              alt="Interactive 3d CSS cube"
            />
          </S_Hide>
        </a>
      </S_Project>

      <S_Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.h2>CS Flashcard App (work in progress)</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a
          href="https://github.com/lenniecottrell/flashcard-app-V2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S_Hide>
            <motion.img
              variants={photoAnim}
              src={flashcardPic}
              alt="Computer Science flashcard app"
            />
          </S_Hide>
        </a>
      </S_Project>

      <S_Project
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <motion.h2>Geordi La Forge Quote Generator</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a
          href="https://lenniecottrell.github.io/geordi-quote-gen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={geordiPic} alt="Geordi La Forge Quote Generator" />
        </a>
      </S_Project>
      <S_Project
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <motion.h2>Cinema Landing Page</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a
          href="https://lenniecottrell.github.io/CinemaLandingPage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cinemaPic} alt="Cinema Landing Page" />
        </a>
      </S_Project>
    </S_Work>
  );
};

const S_Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const S_Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;

const S_Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Work;