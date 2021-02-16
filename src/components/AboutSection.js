import React from 'react'
import home1 from "../img/home1.png"
//styled
// import styled from 'styled-components';
import {GS_Section, GS_Description, GS_Image, GS_Hide} from '../styles'

const AboutSection = () => {
  return (
    <GS_Section>
      <GS_Description>
        <div className="title">
          <GS_Hide>
            <h2>We work to make</h2>
          </GS_Hide>
          <GS_Hide>
            <h2>your <span>dreams</span> come</h2>
          </GS_Hide>
          <GS_Hide>
            <h2>true.</h2>
          </GS_Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We have amazing skillz
        </p>
        <button>Contact Us</button>
      </GS_Description>
        <GS_Image>
          <img src={home1} alt="guy with a camera"/>
        </GS_Image>
    </GS_Section>
  )
}

//styled components go at the bottom


export default AboutSection