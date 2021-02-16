import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components'
import {GS_Section, GS_Description, GS_Image} from '../styles'


const ServicesSection = () => {
  return (
    <S_Services>
      <GS_Description>
        <h2>High <span>quality</span> services</h2>
        <S_Cards>
          <S_Card>
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm"/>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </S_Card>
          <S_Card>
            <div className="icon">
              <img src={money} alt="affordable"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </S_Card>
        </S_Cards>
      </GS_Description>
      <GS_Image>
        <img src={home2} alt=""/>
      </GS_Image>
    </S_Services>
  )
}

const S_Services = styled(GS_Section)`
  h2{
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const S_Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const S_Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`



export default ServicesSection;