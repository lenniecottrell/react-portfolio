import React from "react";
import { Link } from "react-router-dom";
//styles
import cowbell from "../img/cowbell.png";
import { GS_Section, GS_Description, GS_Image, GS_Hide } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  //variants for framer motion

  return (
    <GS_Section>
      <GS_Description>
        <motion.div>
          <GS_Hide>
            <motion.h2 variants={titleAnim}>Hello!</motion.h2>
          </GS_Hide>
          <GS_Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Lennie</span>
            </motion.h2>
          </GS_Hide>
          <GS_Hide>
            <motion.h2 variants={titleAnim}></motion.h2>
          </GS_Hide>
        </motion.div>
        <motion.p variants={fade}>
          I'm a software developer from Portland, Oregon. I'd love to work with
          you!
        </motion.p>
        <S_ButtonContainer>
          <Link to="/work">
            <motion.button variants={fade}>Projects</motion.button>
          </Link>
          <Link to="/contact">
            <motion.button variants={fade}>Contact Me</motion.button>
          </Link>
        </S_ButtonContainer>
      </GS_Description>
      <GS_Image>
        <motion.img
          variants={photoAnim}
          initial={"hidden"}
          animate={"show"}
          src={cowbell}
          alt="I'm fun at weddings"
        />
      </GS_Image>
      <Wave />
    </GS_Section>
  );
};

const S_ButtonContainer = styled(motion.div)`
  display: flex;
  width: 100%;
`;

export default AboutSection;
