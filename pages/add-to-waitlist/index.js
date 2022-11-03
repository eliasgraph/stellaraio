import * as React from 'react'
import { useEffect, useState } from 'react'
import CardGradient from '../../components/Generals/CardGradient'
import Buttons from '../../components/Generals/Buttons'
import {Row, Col} from 'reactstrap'
import { useMediaQuery } from 'react-responsive'

import twitter from '../../assets/imgs/landingpage/twitter.png'
import instagram from '../../assets/imgs/landingpage/instagram.png'
import discord from '../../assets/imgs/landingpage/discord.png'

import Mokcup from '../../assets/imgs/addtowaitlist/Mockup 1.png'
import sponsors from '../../assets/imgs/addtowaitlist/Group 12017.png'
import sponsorsls from '../../assets/imgs/addtowaitlist/Group 120171.png'
import tweet from '../../assets/imgs/addtowaitlist/ezgif 13.gif'
import tweetmo from '../../assets/imgs/addtowaitlist/Frame 111.gif'
import benefits from '../../assets/imgs/addtowaitlist/Group 12050 1 3.png'
import subtract from '../../assets/imgs/addtowaitlist/Subtract.png'
import compass from '../../assets/imgs/icon/compass.png'
import dollars from '../../assets/imgs/icon/dollars.png'
import cart from '../../assets/imgs/icon/cart-plus.png'
import glowringsm from '../../assets/imgs/Path 6.png'
import glowringlg from '../../assets/imgs/Path 5.png'
import {useRouter } from 'next/router'

import { isEmail } from '../../helpers/validations'
import NeedHelp from '../../components/Generals/NeedHelp'


function AddToWaitlist() {
  const [isTab, setIsTab] = useState('')
  const [isMobile, setIsMobile] = useState('')
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailLoding, setEmailLoading] = useState(false)
  /* const isTab = useMediaQuery({ query: '(min-width: 992px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 569px)' }) */
  useEffect(()=>{
    setIsTab(checkIsTab())
    setIsMobile(checkIsMobile())
  },[])

  const checkIsTab = ()=>{
    const isTablet = window.matchMedia('(min-width: 992px)').matches
    return isTablet
  }
  const checkIsMobile = ()=>{
    const isMobile = window.matchMedia('(max-width: 569px)').matches
    return isMobile
  }

  const sendEmail = (e)=>{
    e.preventDefault()
    const data = new FormData(e.target)
    const emailValid = isEmail(email)

    if(!email.length || !emailValid){
      setEmailError(true)
      return
    }

    setEmailLoading(true)
    
    fetch('https://stellarautomation.activehosted.com/proc.php', {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    })
    .then(response => {
      setTimeout(()=>{
        router.push('/thank-you')
        setEmailLoading(false)
        setEmailError(false)
      }, 1000)
    })
    .catch(error =>{
      setEmailLoading(false)
      setEmailError(false)
      console.log('Request failed', error)
    });
    
    
  }

  return (
    <>
      <section className="join-waitlist">
        <CardGradient height={"43.1rem"}>
          <div className="join-waitlist-div px-3">
            <h2 className='text-center'>Tired of seeing sold out?</h2>
            <p className='text-center'>Stellar handles the checkout process for you, ensuring you get the <br /> products you want before anyone else.</p>
            
                
                <form onSubmit={sendEmail} method="POST" action="https://stellarautomation.activehosted.com/proc.php" id="form_9" className="_form _form_9 _inline-form  _dark" noValidate>
                <input type="hidden" name="u" value="9" />
                <input type="hidden" name="f" value="9" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input type="hidden" name="or" value="0734ba72b8be9f78c85dd4bfb81da87f" />
                <div className="_form-content">
            
                  <div className="enter-email-div d-flex align-items-start">
                  <div className="enter-email-wrapper me-4">
                    <input type="email" id='email' name='email' onChange={(e)=>{ setEmail(e.target.value)}} placeholder='Enter your Email' className={`text-center form-control ${emailError ? 'is-invalid': ''}`}/>
                    <div className='invalid-feedback text-center mt-3'>Please provide a valid email address</div>
                  </div>
                  <div className="gt-access-btn-div">
                    <img className='join-waitlist-glowring' src={glowringsm} alt="" />
                    <Buttons text={"Be First in Line"} loading={emailLoding} className="d-block mx-auto mb-0 position-relative" border={"none"} width={"17.7rem"} zIndex={1}/>
                  </div>
                </div>
                  <div className="_clear-element">
                  </div>
                </div>
                <div className="_form-thank-you" style={{display: 'none'}}>
              </div>
            </form>
            {/* <div className="enter-email-div d-flex align-items-start">
              <div className="enter-email-wrapper me-4">
                <input type="email" onChange={(e)=>{ setEmail(e.target.value)}} placeholder='Enter your Email' className={`text-center form-control ${emailError ? 'is-invalid': ''}`}/>
                <div className='invalid-feedback text-center mt-3'>Please provide a valid email address</div>
              </div>
              <div className="gt-access-btn-div">
                <img className='join-waitlist-glowring' src={glowringsm} alt="" />
                <Buttons clicked={sendEmail} text={"Be First in Line"} loading={emailLoding} className="d-block mx-auto mb-0 position-relative" border={"none"} width={"17.7rem"} zIndex={1}/>
              </div>
            </div> */}
            
          </div>
        </CardGradient>
      </section>

      <section className='n-m-restock mt-20px'>
          <CardGradient>
            <div className="n-m-restock-div px-3">
              <h2 className="app-h2 text-center">The Quickest path to the most <br /> in-demand products.</h2>
              <h2 className="app-h2 text-center app-color-primary mb-30px">Sneakers. Console. Trading cards.</h2>
              <div className="n-m-restock-img-wrapper">
                <img width={"100%"} src={Mokcup} alt="mockup" />
              </div>
              <img className='n-m-glowring' src={glowringlg} alt="" />
            </div>
          </CardGradient>
      </section>
      <section className="a-t-w">
        <h2 className="app-h2 text-center">Stellar AIO works where you shop!</h2>
        <p className="text-center">Proven Performance, so you never miss a release.</p>
        <div className="d-flex justify-content-between align-items-center a-t-w-wrapper">
          
          <div className="a-t-w-sponsors">
            { isTab ? <img width={"100%"} src={sponsors} alt="sponsors" /> : <img width={"100%"} src={sponsorsls} alt="sponsors" />}
            
          </div>
          { isMobile ? (
            <div className="a-t-w-benefits">
              <img width={'100%'} src={benefits} alt="" />
            </div>
          ) : (

            <div className="a-t-w-benefits  text-center">
              <div className="test1 mb-20px mt-20px">
                <img style={{position: 'absolute', top: '-16px', left: '39%'}} src={compass} alt="" />
                <img src={subtract} alt="" />
                <p className='compass-text mb-0 text-center'>5 milliseconds <br /> Checkout <br /> time</p>
              </div>
              <div className="test2 mb-20px">
                <img style={{position: 'absolute', top: '-12px', left: '38%'}} src={cart} alt="" />
                <img src={subtract} alt="" />
                <p className='compass-text mb-0 text-center'>Run <br /> Thousands <br /> of Tasks</p>
              </div>
              <div className="test3">
                <img style={{position: 'absolute', top: '-15px', left: '38%'}} src={dollars} alt="" />
                <img src={subtract} alt="" />
                <p className='compass-text mb-0 text-center'>Millions of <br /> dollars made <br /> between users</p>
              </div>
            </div>
          )}
          <div className="a-t-w-tweet">
            { isMobile ? <img style={{width: "100%"}} src={tweetmo} alt="tweet" /> : <img style={{width: "100%", height:"657px"}} src={tweet} alt="tweet" />}
          </div>
          <img className='a-t-w-glowring' src={glowringlg} alt="" />
        </div>
      </section>
      <section className='skip-to-front'>
        <CardGradient height={"32.7rem"}>
          <div className="skip-to-front-div px-3">
            <h2 className="app-h2 text-center">Your ticket to the front of the line.</h2>
            <p className="text-center mb-30px">Stellar is how you beat every other buyer to get the products you want. Sign up to get the fastest checkout on the market.</p>
            {/* <div className="skip-to-front-input-wrapper">
              <input type="email" placeholder='Enter your Email'/>
              <Buttons text={"Be First in Line"} className="d-block mx-auto" border={"none"} width={"17.7rem"} zIndex={1}/>
              <img className='skip-glowring' src={glowringsm} alt="" />
            </div> */}
            <form onSubmit={sendEmail} method="POST" action="https://stellarautomation.activehosted.com/proc.php" id="form_9" className="_form _form_9 _inline-form  _dark" noValidate>
            <input type="hidden" name="u" value="9" />
            <input type="hidden" name="f" value="9" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input type="hidden" name="or" value="0734ba72b8be9f78c85dd4bfb81da87f" />
                <div className="_form-content">
                  {/* <div class="_form_element _x16931030 _full_width " >
                    <label for="email" class="_form-label">
                      Email*
                    </label>
                    <div class="_field-wrapper">
                      <input type="text" id="email" name="email" placeholder="Type your email" required/>
                    </div>
                  </div> */}
                  {/* <div class="_button-wrapper _full_width">
                    <button id="_form_1_submit" className="_submit" type="submit">
                      Submit
                    </button>
                  </div> */}
                  <div className="enter-email-div d-flex align-items-start">
                  <div className="enter-email-wrapper me-4">
                    <input type="email" id='email' name='email' onChange={(e)=>{ setEmail(e.target.value)}} placeholder='Enter your Email' className={`text-center form-control ${emailError ? 'is-invalid': ''}`}/>
                    <div className='invalid-feedback text-center mt-3'>Please provide a valid email address</div>
                  </div>
                  <div className="gt-access-btn-div">
                    <img className='join-waitlist-glowring' src={glowringsm} alt="" />
                    <Buttons text={"Be First in Line"} loading={emailLoding} className="d-block mx-auto mb-0 position-relative" border={"none"} width={"17.7rem"} zIndex={1}/>
                  </div>
                </div>
                  <div className="_clear-element">
                  </div>
                </div>
                <div className="_form-thank-you" style={{display: 'none'}}>
              </div>
            </form>
          </div>
        </CardGradient>
      </section>

      <section className="need-h-or-s">
        <Row>
          <Col lg={8}>
            <NeedHelp/>
          </Col>
          <Col>
            <CardGradient height={"28.8rem"} className="need-h-or-s-card2">
              <div className="need-h-or-s-div2">
                <h3 className="app-h3 text-center">Visit our Socials</h3>
                <div style={{width: "20rem"}} className="d-flex justify-content-between align-items-center mx-auto mt-30px">
                  <a href="https://twitter.com/stellara_io" target={'_blank'} rel="noreferrer">
                    <img width={"36px"} src={twitter} alt="twitter" />
                  </a>
                  <a href="https://www.instagram.com/stellaraio_/?hl=enwitter.com/stellara_io" target={'_blank'} rel="noreferrer">
                    <img width={"36px"} src={instagram} alt="instagram" />
                  </a>
                  <a href="https://discord.gg/EWKv9vPVjM" target={'_blank'} rel="noreferrer">
                    <img width={"36px"} src={discord} alt="discord" />
                  </a>
                </div>
              </div>
            </CardGradient>
          </Col>
        </Row>
      </section>
      
    </>
  )
}

export default AddToWaitlist