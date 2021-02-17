import React from "react";
//animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <S_Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <S_Title>
        <S_Hide>
          <motion.h2>Get in touch.</motion.h2>
        </S_Hide>
      </S_Title>
      <div>
        <S_Hide>
          <S_Social variants={titleAnim}>
            <S_Circle></S_Circle>
            <h2>Send Us A Message</h2>
          </S_Social>
        </S_Hide>
        <S_Hide>
          <S_Social variants={titleAnim}>
            <S_Circle></S_Circle>
            <h2>Like us on Facebook</h2>
          </S_Social>
        </S_Hide>
        <S_Hide>
          <S_Social variants={titleAnim}>
            <S_Circle></S_Circle>
            <h2>See more on Insta</h2>
          </S_Social>
        </S_Hide>
      </div>
    </S_Contact>
  );
};

const S_Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const S_Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const S_Hide = styled.div`
  overflow: hidden;
`;

const S_Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const S_Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
