import React from 'react'
import { useNavigate } from 'react-router-dom'

import Buttons from '../../components/Generals/Buttons'
import CardGradient from '../../components/Generals/CardGradient'

import Twittersm from '../../assets/svgs/Twittersm'
import Instagram from '../../assets/svgs/Instagramsm'
import Discord from '../../assets/svgs/Discordsm'

import bottomImg from '../../assets/imgs/about/ezgif 10.png'
import glow1 from '../../assets/imgs/about/Path 5.png'
import glow2 from '../../assets/imgs/about/Path 7.png'
import NeedHelp from '../../components/Generals/NeedHelp'

function About() {
  const navigate = useNavigate()
  const pushJoinWaitlist = ()=>{
    navigate('/add-to-waitlist')
  }
  return (
    <>
    <section className='about'>
      <CardGradient className="about-card">
        <div className="about-wrapper">
          <h1 className='app-h1 about-h1 text-center'>
            About Stellar AIO
            <img className='about-glow1' src={glow1} alt="" />
            <img className='about-glow2' src={glow2} alt="" />
          </h1>
          <p className='about-content mb-1'>Stellar is on a mission to revolutionize cross-platform automation purchasing. Our dev team is constantly reviewing performance to measure and optimize. Stellar is on a mission to revolutionize cross-platform automation purchasing. Our dev team is constantly reviewing performance to measure and optimize.Stellar is on a mission to revolutionize cross-platform automation purchasing. Our dev team is constantly reviewing performance to measure and optimize.Stellar is on a mission to revolutionize cross-platform automation purchasing. Our dev team is constantly reviewing performance to measure and optimize.Stellar is on a mission to revolutionize cross-platform automation purchasing. Our dev team is constantly reviewing performance to measure and optimize.Stellar is on a mission to revolutionize cross-platform automation purchasing. Our dev team is constantly reviewing performance to measure and optimize.
          </p>
          <div className='about-content-extension d-flex align-items-center'>...It's more about <span className='about-you'>YOU!</span></div>
          <div className="about-join-btn">
            <Buttons clicked={pushJoinWaitlist} text={"Join The Waitlist"} border={"none"} width={"17.7rem"}/>
          </div>
          <div className="about-socials d-flex align-content-center gap-5">
            <Twittersm/>
            <Instagram/>
            <Discord/>
          </div>
          <img className='about-bottom-img' src={bottomImg} alt="" />
        </div>
      </CardGradient>
      <div className="about-need-help">
        <NeedHelp/>
      </div>
    </section>
      
    </>
  )
}

export default About