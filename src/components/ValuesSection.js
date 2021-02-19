import React from "react";
import clock from "../img/clock.svg";
import pumpkinPatch from "../img/Len_with_pup.png";
import messageCircle from "../img/message-circle.svg";
import teamwork from "../img/users.svg";
import shuffle from "../img/shuffle.svg";
import styled from "styled-components";
import { GS_Section, GS_Description, GS_Image } from "../styles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion"; //this gives you more control over when to trigger animations
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ValuesSection = () => {
  const [element, controls] = useScroll();
  return (
    <S_Values
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <GS_Image>
        <img src={pumpkinPatch} alt="camera 2" />
      </GS_Image>
      <GS_Description>
        <S_Title>
          Workplace <span>values</span>
        </S_Title>
        <S_Cards>
          <S_Card>
            <div className="icon">
              <img src={clock} alt="Hustle" />
              <h3>Hustle</h3>
            </div>
            <p>I always strive to beat deadlines</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Working together is better than working alone</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={messageCircle} alt="communication" />
              <h3>Communication</h3>
            </div>
            <p>We should always be on the same page</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={shuffle} alt="flexibility" />
              <h3>Collaboration</h3>
            </div>
            <p>I love working across teams</p>
          </S_Card>
        </S_Cards>
      </GS_Description>
    </S_Values>
  );
};

const S_Values = styled(GS_Section)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const S_Title = styled.h2`
  padding-left: 5rem;
`;

const S_Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 5rem;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const S_Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ValuesSection;
