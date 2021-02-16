import React from 'react'
import home1 from "../img/home1.png"
//styles
import {GS_Section, GS_Description, GS_Image, GS_Hide} from '../styles'
import {motion} from 'framer-motion'

const AboutSection = () => {

  //variants for framer motion


  return (
    <GS_Section>
      <GS_Description>
        <motion.div>
          <GS_Hide>
            <motion.h2>
                We work to make
            </motion.h2>
          </GS_Hide>
          <GS_Hide>
            <motion.h2>
               your <span>dreams</span> come
            </motion.h2>
          </GS_Hide>
          <GS_Hide>
            <motion.h2>
              true.
            </motion.h2>
          </GS_Hide>
        </motion.div>
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