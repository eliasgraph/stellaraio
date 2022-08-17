import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import Logo from '../../assets/imgs/Logo.png'
import twitter from '../../assets/imgs/landingpage/twitter.png'
import instagram from '../../assets/imgs/landingpage/instagram.png'
import discord from '../../assets/imgs/landingpage/discord.png'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <Row>
            <Col md={6}>
              <div className="footer__logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="footer__mission">
              Stellar is on a mission to revolutionize
              cross-platform automation purchasing.
              Our dev team is constantly reviewing
              performance to measure and optimize.
              </div>
            </Col>
            <Col md={2}>
              <ul className='footer-list mt-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#features">Features</Link></li>
                <li><Link to="#blog">Blog</Link></li>
                <li><Link to="#site">Site</Link></li>
                <li><Link to="#faq">FAQ</Link></li>
              </ul>
            </Col>
            <Col md={2}>
            <ul className='footer-list mt-4'>
              <li><Link to="#about">About</Link></li>
              <li><Link to="#support">Support</Link></li>
              <li><Link to="#terms">Terms</Link></li>
              <li><Link to="#privacy">Privacy</Link></li>
          </ul>
            </Col>
            <Col md={2}>
            <ul className='footer-list mt-4'>
                <li><Link to="#dashboard">Dashboard</Link></li>
                <li><Link to="#wait-list">Join Waitlist</Link></li>
                <li><Link to="#support-us">Support</Link></li>
              </ul>
            </Col>
          </Row>  
          <div className="d-flex justify-content-between align-items-center footer-copy-icons">
            <div className="d-flex justify-content-between align-items-center footer-icons">
              <div className="footer-icon">
                <img src={twitter} alt="twiteer" />
              </div>
              <div className="footer-icon">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="footer-icon">
                <img src={discord} alt="discord" />
              </div>
            </div>
            <div className="copyright text-muted">
              &copy; 2021 StellarAIO. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer