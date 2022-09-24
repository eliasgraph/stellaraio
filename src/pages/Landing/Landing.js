import React, { useState, useEffect } from 'react'
import CardGradient from '../../components/Generals/CardGradient'
import { Row, Col, Collapse, Modal, ModalBody } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Generals/Buttons'
/* import { Link } from 'react-router-dom' */

import dash from '../../assets/imgs/landingpage/dash_.png'
import analytic from '../../assets/imgs/landingpage/analytic.png'
import userfriendly from '../../assets/imgs/landingpage/userfriendly.png'
import support from '../../assets/imgs/landingpage/support.png'
import torus from '../../assets/imgs/landingpage/torus.png'
import cone from '../../assets/imgs/landingpage/cone.png'
import spherespring from '../../assets/imgs/landingpage/spherespring.png'
/* import select from '../../assets/imgs/landingpage/select1.png' */
import select from '../../assets/imgs/landingpage/select.gif'
/* import create from '../../assets/imgs/landingpage/create1.png' */
import create from '../../assets/imgs/landingpage/create.gif'
/* import checkout from '../../assets/imgs/landingpage/checkout1.png' */
import checkout from '../../assets/imgs/landingpage/checkout.gif'
import ribbon from '../../assets/imgs/landingpage/ribbon.png'
import supportedby from '../../assets/imgs/landingpage/Mockup-Recovered 3.png'
import quote from '../../assets/imgs/landingpage/quote.png'
import left from '../../assets/imgs/landingpage/Arrow 2.png'
import right from '../../assets/imgs/landingpage/Arrow 3.png'
import twitter from '../../assets/imgs/landingpage/twitter.png'
import instagram from '../../assets/imgs/landingpage/instagram.png'
import discord from '../../assets/imgs/landingpage/discord.png'
import supportnext from '../../assets/imgs/icon/support-next.png'
import amazon from '../../assets/imgs/logos/amazon.png'
import amd from '../../assets/imgs/logos/amd.png'
import topps from '../../assets/imgs/logos/topps.png'
import bestbuy from '../../assets/imgs/logos/bestbuy.png'
import BH_logo from '../../assets/imgs/logos/BH_logo.png'
import costco from '../../assets/imgs/logos/costco.png'
import dicks from '../../assets/imgs/logos/dicks.png'
import disney from '../../assets/imgs/logos/disney.png'
import evga from '../../assets/imgs/logos/evga.png'
import fanatics from '../../assets/imgs/logos/fanatics.png'
import footlocker from '../../assets/imgs/logos/foot-locker.png'
import gamestop from '../../assets/imgs/logos/gamestop.png'
import newegg from '../../assets/imgs/logos/newegg.png'
import nordstorm from '../../assets/imgs/logos/nordstrom.png'
import officedepot from '../../assets/imgs/logos/officedepot.png'
import panini from '../../assets/imgs/logos/panini.png'
import queue from '../../assets/imgs/logos/queue.png'
import sams from '../../assets/imgs/logos/sams.png'
import sense from '../../assets/imgs/logos/sense.png'
import shopify from '../../assets/imgs/logos/shopify.png'
import snipeslogo from '../../assets/imgs/logos/snipes-logo 3.png'
import Union from '../../assets/imgs/logos/Union.png'
import walmart from '../../assets/imgs/logos/walmart.png'
import target from '../../assets/imgs/logos/target_logo.png'
import swatch from '../../assets/imgs/logos/Swatch.png'
import close from '../../assets/imgs/icon/close.png'
import glowringlg from '../../assets/imgs/Path 5.png'
import img1 from '../../assets/imgs/landingpage/img1.jpeg'
import img2 from '../../assets/imgs/landingpage/img2.jpeg'
import img3 from '../../assets/imgs/landingpage/img3.jpeg'
import img4 from '../../assets/imgs/landingpage/img4.jpeg'
import img5 from '../../assets/imgs/landingpage/img5.jpeg'


function Landing() {
  const [isOpenFaq1, setIsOpenFaq1] = useState(false)
  const [isOpenFaq2, setIsOpenFaq2] = useState(false)
  const [isOpenFaq3, setIsOpenFaq3] = useState(false)
  const [isOpenFaq4, setIsOpenFaq4] = useState(false)
  const [isOpenFaq5, setIsOpenFaq5] = useState(false)
  const [seeSite, setSeeSite] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    if (seeSite) {
      document.documentElement.style.overflow = 'hidden';
    } else{
      document.documentElement.style.overflow = 'unset';

    }
  }, [seeSite]);
  const reviews = [
    {
      review: "Stellar for me has been the most worth it bot that i use for retail and it’s my go to bot , I got it over a year ago now and it’s paid off for me 100 fold , it’s easy to use and user friendly.",
      img: img1,
      name: "Juice#0069"
    },
    {
      review: "I love Stellar, it has provided me a way to make money easily while sitting away from my keyboard. You guys, make it as easy as starting it and not touching anything!.",
      img: img2,
      name: " Chuckles2621#7395"
    },
    {
      review: "I feel it’s a great bot that improves daily alongside the retailers constantly changing how their system works. The improvements made daily along with the constant bug fixes is top notch",
      img: img3,
      name: "Jcameron#3663"
    },
    {
      review: "From what I've seen Stellar holds up against all of the other competitors quite well. It is a solid bot with great Devs and support",
      img: img4,
      name: "Cardking5432#6326"
    },
    {
      review: "Great product, devs seem to be on top of things, continually provide new ideas and services.",
      img: img5,
      name: "Sweetfeet_shoes#1462"
    },
  ]
  const tog_seeSite = ()=>{
    setSeeSite(!seeSite)
  }
  const navigate = useNavigate()
  
  const pushJoinWaitlist = ()=>{
    navigate('/add-to-waitlist')
  }
  
  const prev = ()=>{
    if(imgIndex === 0){
      return
    }
    setImgIndex(imgIndex - 1)
  }

  const next = ()=>{
    if(imgIndex === reviews.length -1){
      return
    }
    setImgIndex(imgIndex + 1)
  }
  
  
  return (
    <>
      <section id='home'>
        <CardGradient height={"64.7rem"}>
          <div className="home-div">
            <Row>
              <Col style={{position: 'relative'}} sm={12} md={4} >
                <div className="home__left">
                  <div className="home__left--content">
                    <h1>The Fastest Automation <br /> Checkout Software</h1>
                    <p className="text-muted">Stellar handles the checkout process for you, ensuring you get the products you want before anyone else.</p>
                    <div className="home__actions">
                      {/* <Buttons
                        text={"Enter your email"}
                        width={"100%"}
                        boxShadow={"inset 0px 0px 1px 1px rgba(50,50,114, 0.1 ), 0px 0px 2px 1px rgba(50,50,114,1 )"}
                        background={"#080812"}
                        color={"#97979B"}
                        height={"4.5rem"}
                        fontSize={"1.4rem"}
                        className="mb-4"
                      /> */}
                      <div className="home__actions--bottom d-flex justify-content-between">
                        <Buttons background="#161632" border={"none"} text={"Sold Out"} width={"35%"} />
                        <Buttons clicked={pushJoinWaitlist} text={"Join The Waitlist"} border={"none"} width={"60%"}/>
                      </div>

                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={8} >
                <div className="home-right">
                  <div className="home-right-img">
                    <img src={dash} alt="dash" width={'100%'}  />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </CardGradient>
      </section>

      <section className="software">
        <div className="head-info">
          <h2 className='text-center'>No more missed Opportunities.</h2>
          <p className='text-center'>Packed with advanced features</p>
        </div>
        <Row>
          <Col sm={12} md={4}>
            <div className="userfriendly">
              <img src={cone} alt="cone" className="cone" />
              <img width={"100%"} src={userfriendly} className="software-img" alt="userfriendly" />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="analytic">
              <img src={torus} alt="torus" className="torus" />
              <img width={"100%"} src={analytic} className="software-img" alt="analytic" />
            </div>

          </Col>
          <Col sm={12} md={4}>
            <div style={{height: ""}} className="support">
              <img src={spherespring} alt="spherespring" className='spherespring'/>
              <img width={"100%"} height={"475px"} src={support} className="software-img" alt="support" />
            </div>
          </Col>
        </Row>
      </section>

      <section id='features' className="c-a-d">
        <div className="head-info">
          <h2 className='text-center'>Create. Automate. Dominate</h2>
          <p className='text-center'>How it works</p>
        </div>
          <div className="p-relative overflow-hidden">
            <div className="c-a-d__holder">
              <div className="c-a-d__holder--inner">
                <Row className="cad-row align-items-center">
                  <Col md={6} sm={12}>
                    <div className="c-a-d__item--img">
                      <img  src={select} alt="select" />
                      <img width={'90%'} src={glowringlg} className="c-a-d-glowring" alt="" />
                    </div>
                    
                  </Col>
                  <Col md={6} sm={12} className="align-self-center cad-text-col">
                    <div className="c-a-d__item--texts ml-auto">
                      <h3>Select <br /> Desired Products</h3>
                      <p>Make a choice from the wide range of products suppoted on our Amazing platform.</p>
                    </div>
                    
                  </Col>
                </Row>
              </div>
              <div className="c-a-d__holder--inner">
                <Row className="cad-row">
                  <Col md={6} sm={12}>
                    <div className="c-a-d__item--img ">
                      <img src={create} alt="create" />
                      <img width={'90%'} src={glowringlg} className="c-a-d-glowring" alt="" />
                    </div>
                    
                  </Col>
                  <Col md={6} sm={12} className="align-self-center cad-text-col">
                  <div className="c-a-d__item--texts ml-auto">
                      <h3>Create <br /> Task Seamlessly.</h3>
                      <p>Easily create Tasks for your coveted products at light speed.</p>
                    </div>
                    
                  </Col>
                </Row>
              </div>
              <div className="c-a-d__holder--inner">
                <Row className='cad-row'>
                  <Col md={6} sm={12}>
                    <div className="c-a-d__item--img ">
                      <img src={checkout} alt="checkout" />
                      <img width={'90%'} src={glowringlg} className="c-a-d-glowring" alt="" />
                    </div>
                    
                  </Col>
                  <Col md={6} sm={12} className="align-self-center cad-text-col">
                    <div className="c-a-d__item--texts ml-auto">
                      <h3>Checkout <br /> in Milliseconds.</h3>
                      <p>Add your shipping details and your order would be on its way to you..</p>
                    </div>
                    
                  </Col>
                </Row>
              </div>

            </div>
            <div className="ribbon">
              <img width={'100%'} src={ribbon} alt="ribbon" />
              <div className="ribbon--texts">
                <h3>Performance <br /> speaks for itself.</h3>
                <p>Stellar has again and again proven to be the best choice for you.</p>
              </div>
            </div>
          </div>
      </section>

      <section id='sites' className="supported">
          <CardGradient
            className="support-bg"
          >
            <Row>
              <Col lg={6} md={12} style={{overflow: 'visible'}}>
                <div className="support-img">
                  <img className="support-img-cell" src={supportedby} alt="supported-img" />
                  <img src={glowringlg} className="support-img-glowring" alt="" />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="support-text">
                  <h4 className='text-right'>Supported by the most popular <span>Big Box <br /> Retailers.</span>
                  </h4>
                  <p className='text-right'>Stellar is your the only one and true AIO that allows you to shop easily and profitably from your favorite retailers globally.</p>
                </div>
                <div role={'button'} onClick={tog_seeSite} className="support-actions d-flex align-items-center justify-content-end">
                  <p className='color-purple-2 me-3 mb-0'>See all Site</p>
                  <div className="supportaction">
                    <img src={supportnext} alt="next" />
                  </div>
                </div>
              </Col>
            </Row>
          </CardGradient>
      </section>

      <section className="home-users">
        <CardGradient height={'46rem'} className="home-users__card">
          <Row>
            <Col lg={8} md={12}>
              <div className="home-users-content">
                <h4>What are users saying?</h4>
                <div className="home-users__quote d-flex align-items-start">
                  <div className="home-users__quote--img">
                    <img src={quote} alt="quote" />
                  </div>
                  
                  <div className="home-users__quote--quote">
                    <p>{reviews[imgIndex].review}</p>
                    <div className="home-users__quote--name">
                      <h3>{reviews[imgIndex].name}</h3>
                    </div>
                  </div>

                </div>
                <div className="home-users__users d-flex align-items-center justify-content-between">
                  <div onClick={prev} className="arrow-icon">
                    <img src={left} alt="left" />
                  </div>
                  {
                    reviews.map((item, key)=>(
                      <div key={key} onClick={()=>{setImgIndex(key)}} role={"button"} className={`home-users__user ${imgIndex === key ? 'home-users__user-active': ''}`}>
                        <img src={item.img} alt="u1" />
                      </div>
                    ))
                  }
                  
                  
                  <div onClick={next} className="arrow-icon">
                    <img src={right} alt="left" />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4} md={12} className="d-flex justify-content-end align-items-center">
              <div className="home-user-review-img">
                <img className='home-user-reviewimg-img' src={reviews[imgIndex].img} alt="" />
                {/* <img className='home-user-review-glowring' src={glowringlg} alt="" /> */}
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>

      <section id='faq' className="faq">
        <Row>
          <Col lg={4} md={12}>
            <div className="need_help">
              <h5 className='text-center'> Need Any Help or Support?</h5>
              <p className='text-center'>Our Support Team is standing by whenever and wherever you need them.</p>
              <Buttons className={'margin-auto d-block text-center'} text={'Visit Support Center'} width="220px" height="38px" background='#161632'/>
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

      <Modal
        isOpen={seeSite}
        toggle={tog_seeSite}
        centered
        className='modal-md'
        
      >
        <ModalBody>   
          <div className="see-site">
            <div role={'button'} onClick={()=>{ setSeeSite(!seeSite) }} className="close-icon">
              <img src={close} alt="close" />
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={amazon} alt="amazon" />
                </div>
                <p className="see-site__text mb-0">Amazon</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={topps} alt="topps" />
                </div>
                <p className="see-site__text mb-0">Topps</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={bestbuy} alt="bestbuy" />
                </div>
                <p className="see-site__text mb-0">Best Buy</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={disney} alt="disney" />
                </div>
                <p className="see-site__text mb-0">Disney</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={walmart} alt="walmart" />
                </div>
                <p className="see-site__text mb-0">Walmart</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={sense} alt="sense" />
                </div>
                <p className="see-site__text mb-0">Ssense</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={Union} alt="yeeze" />
                </div>
                <p className="see-site__text mb-0">Yeeze</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={dicks} alt="dicks" />
                </div>
                <p className="see-site__text mb-0">Dicks</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={target} alt="target" />
                </div>
                <p className="see-site__text mb-0">Target</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={snipeslogo} alt="snipes" />
                </div>
                <p className="see-site__text mb-0">Snipes</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={shopify} alt="shopify" />
                </div>
                <p className="see-site__text mb-0">Shopify</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={swatch} alt="swatch" />
                </div>
                <p className="see-site__text mb-0">Swatch</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={queue} alt="queue" />
                </div>
                <p className="see-site__text mb-0">Queue It</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={nordstorm} alt="nordstorm" />
                </div>
                <p className="see-site__text mb-0">Nordstrom</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={walmart} alt="walmart" />
                </div>
                <p className="see-site__text mb-0">Walmart CA</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={costco} alt="costco" />
                </div>
                <p className="see-site__text mb-0">Costco</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={gamestop} alt="gamestop" />
                </div>
                <p className="see-site__text mb-0">Game Stop</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={sams} alt="sams" />
                </div>
                <p className="see-site__text mb-0">Sams Club</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={newegg} alt="newegg" />
                </div>
                <p className="see-site__text mb-0">NewEgg</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={evga} alt="evga" />
                </div>
                <p className="see-site__text mb-0">Evga</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={fanatics} alt="fanatics" />
                </div>
                <p className="see-site__text mb-0">Fanatics</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={BH_logo} alt="bh" />
                </div>
                <p className="see-site__text mb-0">B&H</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={panini} alt="panini" />
                </div>
                <p className="see-site__text mb-0">Panini</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={footlocker} alt="footlocker" />
                </div>
                <p className="see-site__text mb-0">Footlocker</p>
              </div>
            </div>
            <div className="see-site__item d-flex justify-content-between align-items-center">
              <div className="see-site__left d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={amd} alt="amd" />
                </div>
                <p className="see-site__text mb-0">AMD</p> 
              </div>
              <div className="see-site__right d-flex align-items-center">
                <div className="see-site__icon me-3">
                  <img width={'100%'} src={officedepot} alt="officedepot" />
                </div>
                <p className="see-site__text mb-0">Office Depot</p>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Landing