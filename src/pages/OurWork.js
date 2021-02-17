import React from 'react'
import styled from 'styled-components'
import {Link}from 'react-router-dom'
//images
import athlete from '../img/athlete-small.png'
import theRacer from '../img/theracer-small.png'
import goodTimes from '../img/goodtimes-small.png'
//animations
import {motion} from 'framer-motion'
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from "../animation"

const OurWork = () => {
  return (
    <S_Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background: '#fff'}}>
      {/* these get staggered because of the staggerChildren property in pageAnimation */}
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <S_Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <S_Hide>
            <motion.img variants={photoAnim} src={athlete} alt="The Athlete"/>
          </S_Hide>
        </Link>
      </S_Movie>
      <S_Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theRacer} alt="The Racer"/>
        </Link>
      </S_Movie>
      <S_Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodTimes} alt="Good Times"/>
        </Link>
      </S_Movie>
    </S_Work>
  )
}

const S_Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2{
    padding: 1rem 0rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const S_Movie = styled.div`
  padding-bottom: 10rem;
  .line{
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
  top: 10%;
  width: 100%;
  height: 100vh;
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

export default OurWork
