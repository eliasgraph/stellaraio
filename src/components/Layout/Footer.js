import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import Logo from '../../assets/imgs/Logo.png'
import twitter from '../../assets/imgs/landingpage/twitter.png'
import instagram from '../../assets/imgs/landingpage/instagram.png'
import discord from '../../assets/imgs/landingpage/discord.png'


function Footer() {
 let hostname = window.location.origin

 /* const scroll = ()=>{
    setTimeout(() => {
      const path = window.location.hash
      console.log(path);
      const app = document.querySelector('.app-content')
      console.log(app)
      const features = document.querySelector('#feature')
      const sites = document.querySelector('#site')
      const faqs = document.querySelector('#faqs')
      console.log(features.scrollHeight);
      console.log(sites.scrollHeight);
      console.log(faqs.scrollHeight);
      if(path === '/#features'){
        app.scroll({
          top: features.scrollHeight,
          behavior: "smooth"
        })
      }
      if(path === '/#sites'){
        app.scroll({
          top: sites.scrollHeight,
          behavior: "smooth"
        })
      }
      if(path === '/#faq'){
        app.scroll({
          top: faqs.scrollHeight,
          behavior: "smooth"
        })
      }
      
    }, 200);
  } */
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <Row>
            <Col md={6} sm={12}>
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
            <Col md={2} sm={6}>
              <ul className='footer-list mt-4'>
                <li><Link to="/">Home</Link></li>
                <li><a href={hostname+'/#features'}>Features</a></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href={hostname+'/#sites'}>Site</a></li>
                <li><a href={hostname+'/#faq'}>FAQ</a></li>
              </ul>
            </Col>
            <Col md={2} sm={6}>
            <ul className='footer-list footer-list-mid mt-4'>
              <li><Link to="#about">About</Link></li>
              <li><a href="https://help.stellaraio.com/en/">Support</a></li>
              <li><Link to="#terms">Terms</Link></li>
              <li><Link to="#privacy">Privacy</Link></li>
            </ul>
            </Col>
            <Col md={2}>
            <ul className='footer-list mt-4'>
                <li><a href="https://account.stellaraio.com">Dashboard</a></li>
                <li><Link to="/add-to-waitlist">Join Waitlist</Link></li>
              </ul>
            </Col>
          </Row>  
          <div className="d-flex justify-content-between align-items-center footer-copy-icons">
            <div className="d-flex justify-content-between align-items-center footer-icons">
              <a href="https://twitter.com/stellara_io">
                <div className="footer-icon">
                  <img src={twitter} alt="twiteer" />
                </div>
              </a>
              <a href="https://www.instagram.com/stellaraio_/?hl=en">
                <div className="footer-icon">
                  <img src={instagram} alt="instagram" />
                </div>
              </a>
              <a href="https://discord.gg/EWKv9vPVjM">
                <div className="footer-icon">
                  <img src={discord} alt="discord" />
                </div>
              </a>
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