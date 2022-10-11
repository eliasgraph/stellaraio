import { useState } from 'react'
import {Row, Col, Collapse} from 'reactstrap'
import twitter from '../../assets/imgs/landingpage/twitter.png'
import instagram from '../../assets/imgs/landingpage/instagram.png'
import discord from '../../assets/imgs/landingpage/discord.png'
import CardGradient from '../Generals/CardGradient'
import Buttons from '../Generals/Buttons'

function Faq() {
  const [isOpenFaq1, setIsOpenFaq1] = useState(false)
  const [isOpenFaq2, setIsOpenFaq2] = useState(false)
  const [isOpenFaq3, setIsOpenFaq3] = useState(false)
  const [isOpenFaq4, setIsOpenFaq4] = useState(false)
  const [isOpenFaq5, setIsOpenFaq5] = useState(false)
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
            <CardGradient
              height={'57.5rem'}
              className={'faq__card'}
            >
              <div className="faq__faqs">
                <h3>Frequently Asked Questions.</h3>

                <div className="faq__faqs--item">
                  <h6
                    className='d-flex align-items-center justify-content-between'
                    onClick={()=>{setIsOpenFaq1(!isOpenFaq1)}}
                  >
                    How much does Stellar AIO cost?
                    {!isOpenFaq1 && <span>+</span> }
                    {isOpenFaq1 && <span>-</span> }

                  </h6>
                  <Collapse isOpen={isOpenFaq1}>
                    <div className="">
                      <p >The initial price for Stellar AIO is $300 and comes with 30 days of free updates. The monthly renewal fee is $30.
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div className="faq__faqs--item">
                  <h6
                    className='d-flex align-items-center justify-content-between'
                    onClick={()=>{setIsOpenFaq2(!isOpenFaq2)}}
                  >
                    What sites do you currently support?
                    {!isOpenFaq2 && <span>+</span> }
                    {isOpenFaq2 && <span>-</span> }

                  </h6>
                  <Collapse isOpen={isOpenFaq2}>
                    <div className="">
                      <p >Stellar AIO supports over 50 websites. Our most popular site modules include Amazon, Walmart, Target, Best Buy, The Home Depot, Academy, Pokémon Center, Fanatics, Topps, Panini, GameStop, BH Photo, Newegg, Converse, Dick Sporting Goods, Footlocker, FLX Raffles, SSense, Yeezy Supply, and all Shopify sites (Kith, Undefeated, and Shop Nice Kicks).
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div className="faq__faqs--item">
                  <h6
                    className='d-flex align-items-center justify-content-between'
                    onClick={()=>{setIsOpenFaq3(!isOpenFaq3)}}
                  >
                    What software system does Stellar work on?
                    {!isOpenFaq3 && <span>+</span> }
                    {isOpenFaq3 && <span>-</span> }

                  </h6>
                  <Collapse isOpen={isOpenFaq3}>
                    <div className="">
                      <p >Stellar AIO can be used on Windows and MacOS.
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div className="faq__faqs--item">
                  <h6
                    className='d-flex align-items-center justify-content-between'
                    onClick={()=>{setIsOpenFaq4(!isOpenFaq4)}}
                  >
                    What regions do you currently support?
                    {!isOpenFaq4 && <span>+</span> }
                    {isOpenFaq4 && <span>-</span> }

                  </h6>
                  <Collapse isOpen={isOpenFaq4}>
                    <div className="">
                      <p >Stellar AIO's supported site regions include the United States, Japan, and Canada. We plan on adding EU and UK sites in the future.
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div className="faq__faqs--item">
                  <h6
                    className='d-flex align-items-center justify-content-between'
                    onClick={()=>{setIsOpenFaq5(!isOpenFaq5)}}
                  >
                    I want to purchase StellarAIO. When is your next restock?
                    {!isOpenFaq5 && <span>+</span> }
                    {isOpenFaq5 && <span>-</span> }

                  </h6>
                  <Collapse isOpen={isOpenFaq5}>
                    <div className="">
                      <p >We currently have no planned restocks or group buys. We recommend that you join our waitlist and follow us on Twitter to stay up to date!
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </CardGradient>
          </Col>
        </Row>
      </section>
  )
}

export default Faq