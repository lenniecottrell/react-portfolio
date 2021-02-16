import React from 'react'
import styled from 'styled-components'
import {Link}from 'react-router-dom'
//images
import athlete from '../img/athlete-small.png'
import theRacer from '../img/theracer-small.png'
import goodTimes from '../img/goodtimes-small.png'

const OurWork = () => {
  return (
    <S_Work>
      <S_Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="The Athlete"/>
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

const S_Work = styled.div`
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
    background: #ccc;
    margin-bottom: 3rem;
  }
`;

export default OurWork
