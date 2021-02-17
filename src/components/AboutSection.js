import React from "react";
import home1 from "../img/home1.png";
//styles
import { GS_Section, GS_Description, GS_Image, GS_Hide } from "../styles";
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
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </GS_Hide>
          <GS_Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </GS_Hide>
          <GS_Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </GS_Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. Our
          professionals have amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </GS_Description>
      <GS_Image>
        <motion.img
          variants={photoAnim}
          initial={"hidden"}
          animate={"show"}
          src={home1}
          alt="guy with a camera"
        />
      </GS_Image>
      <Wave />
    </GS_Section>
  );
};

//styled components go at the bottom

export default AboutSection;
