import {Row, Col} from 'reactstrap'
import twitter from '../../assets/imgs/landingpage/twitter.png'
import instagram from '../../assets/imgs/landingpage/instagram.png'
import discord from '../../assets/imgs/landingpage/discord.png'
import Buttons from '../Generals/Buttons'
import FaqCard from './FaqCard'

function Faq() {
  
  return (
    <section id='faq' className="faq">
        <Row>
          <Col lg={4} md={12}>
            <div className="need_help">
              <h5 className='text-center'> Need Any Help or Support?</h5>
              <p className='text-center'>Our Support Team is standing by whenever and wherever you need them.</p>
              <a href="https://help.stellara.io" style={{textDecoration: 'none'}}>
                <Buttons className={'margin-auto d-block text-center'} text={'Visit Support Center'} width="220px" height="38px" background='#161632'/>
              </a>
              
            </div>
            <div className="socials">
              <div className="socials-content">
                <h5 className='text-center'>Visit our Socials</h5>
                <div className="socials-icons d-flex justify-content-between mt-2">
                  <div className="social-icon">
                    <a href="https://twitter.com/stellara_io" rel='noreferrer' target={'_blank'}><img src={twitter} alt="twitter" /></a>
                  </div>
                  <div className="social-icon">
                    <a href="https://www.instagram.com/stellaraio_/?hl=en" rel='noreferrer' target={"_blank"}><img src={instagram} alt="instagram" /></a> 
                  </div>
                  <div className="social-icon">
                    <a href="https://discord.gg/EWKv9vPVjM" rel='noreferrer' target={'_blank'} ><img src={discord} alt="discord" /></a>
                    
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} md={12} className="faq-col">
            <FaqCard/>
          </Col>
        </Row>
      </section>
  )
}

export default Faq