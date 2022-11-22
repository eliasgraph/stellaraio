import { useCallback, useEffect, useState } from 'react'
import Buttons from '../../components/Generals/Buttons'
import CardGradient from '../../components/Generals/CardGradient'
import midimg from '../../assets/imgs/products/imdimg.png'
import topImg from '../../assets/imgs/products/topleftImg.png'
import btmImg from '../../assets/imgs/products/bottomrightimg.png'
import {Row, Col} from 'reactstrap'
import medal from '../../assets/imgs/products/medal (2).png'
import medalright from '../../assets/imgs/products/medalright (2).png'
import tpasImg from '../../assets/imgs/products/ezgif 29.gif'
import prod1 from '../../assets/imgs/products/prodd1.gif'
import prod2 from '../../assets/imgs/products/prod2.png'
import prod3 from '../../assets/imgs/products/prodd3.gif'
import Logo from '../../assets/imgs/products/Logo (3).png'
import check from '../../assets/imgs/products/check.png'
import mbgimg from '../../assets/imgs/products/mbgimg1.png'
import twitter from '../../assets/imgs/products/twitter.png'
import discord from '../../assets/imgs/products/discord.png'
import nba from '../../assets/imgs/products/nba.png'
import nfl from '../../assets/imgs/products/nfl.png'
import pokemon from '../../assets/imgs/products/pokemon.png'
import yurg from '../../assets/imgs/products/yurg.png'
import baseball from '../../assets/imgs/products/baseball.png'
import nhl from '../../assets/imgs/products/nhl.png'
import fifa from '../../assets/imgs/products/fifa.png'
import befirstglow from '../../assets/imgs/products/befirstglow.png'
import brandglow from '../../assets/imgs/products/brandglow.png'
import automationglow from '../../assets/imgs/products/automationglow.png'
import howitworksglow from '../../assets/imgs/products/howitworksglow.png'
import powerbackglow from '../../assets/imgs/products/powerbackglow.png'
import Faq from '../../components/landing/Faq'
import Link from 'next/link'
import ProductPlans from '../../components/PageComponents/ProductPlans'

function Products() {
  const [stickyOffset,setStickyOffset] = useState(3100)
  const [pecentage, setPercentage] = useState(0)
  const [sticyHeight, setStickyHeight] = useState(640)
  const [isSticky, setIsSticky] = useState(false)
  const [stickyPadding, setStickyPadding] = useState(800)
  const [yTranslate, setYTranslate] = useState(9)
  const [scrolledY, setScrolledY]= useState(0)
  const [xRotate, setXRotate] = useState(20)
  const [prod1top, setProd1top] = useState(0)
  const [prod2top, setProd2top] = useState(0)
  const [translateProd, setTranslateProd] = useState(100)
  const [a, setA] = useState(10)
  let bfilStyle = {
    transform: `translateY(-${yTranslate}%) rotateX(${xRotate}deg)`
  }
  useEffect(()=>{
    window.addEventListener("scroll", addScrollEffect)
  },[])

  useEffect(()=>{
    /* const offset = document.getElementById("hiws").getBoundingClientRect().top + document.getElementById('navbar').clientHeight
    setStickyOffset(offset)
    console.log(offset, 'offset') */
    window.addEventListener("scroll", stickyEffect)
  },[isSticky, stickyPadding, scrolledY, prod1top, stickyOffset, sticyHeight])

  const addScrollEffect = useCallback(async() =>{
    const pageOffset = window.pageYOffset
    if(pageOffset < 600){
      let percent = pageOffset/600
      setPercentage(percent)
      setYTranslate(9 - (9* percent)) 
      setXRotate(20 - (20*percent)) 
    }
  },[])

  const stickyEffect = async(e)=>{
    const isEffectReady = window.scrollY >= stickyOffset
    if(isEffectReady){
      
      setIsSticky(true)
      if(window.pageYOffset > scrolledY && window.pageYOffset <= stickyOffset+640){

        let amountscrolled = 640 - (stickyOffset+640 - window.pageYOffset )

        const percent = amountscrolled/640
        const transform1 = 630 * percent 

        setProd1top(transform1 * 2)
        if(prod1top > 760){
          setProd1top(760)
        }
        if((prod1top >= 480) ){
          setProd2top(transform1)
          
        } else if( prod1top < 480){
          setProd2top(transform1)
        }
        /* if(scrolledY > window.pageYOffset){
          setProd2top(transform1)
        } */
        
      }
      
      setScrolledY(window.pageYOffset)
    }
    if(window.scrollY >= stickyOffset+sticyHeight){
      setIsSticky(false)
    }
    
  }
  return (
    <section>
      <div className="bfil">
        <h2 className="app-h2 text-center mb-2">
          Be First in Line Every Time 
          <img src={befirstglow} className="bfil-glow" alt="befirstglow" />
        </h2>
        <p className="text-center">
          Stellar makes buying trading cards easy with automated checkout software <br /> that gets you the cards you want before anyone else.
        </p>
        <div className="bfil-actions d-flex justify-content-between">
          <Buttons text={"Get your cards for MSRP"} border={"none"} width={"63%"}/>
          <Buttons background="#161632" border={"none"} text={"Learn More"} width={"32%"} />
        </div>
        <div className="bfil-img-container">
          <div style={bfilStyle} className="bfil-imgs">
            <img style={{opacity: `${pecentage}`}} src={topImg} alt="topimg" className="top-img" />
            <img src={midimg} alt="midimg" className='mid-img' />
            <img style={{opacity: `${pecentage}`}} src={btmImg} alt="btmimg" className="btm-img" />
          </div>
        </div>

      </div>

      <div className="mywfl">
        <div className="mywfl-partners-div">
          <div className="mywfl-partners">
            <div className="mywfl-partners-img">
              <img src={nba} alt="nba" />
            </div>
            <div className="mywfl-partners-img">
              <img src={nfl} alt="nfl" />
            </div>
            <div className="mywfl-partners-img">
              <img src={pokemon} alt="pokemon" />
            </div>
            <div className="mywfl-partners-img">
              <img src={baseball} alt="baseball" />
            </div>
            <div className="mywfl-partners-img">
              <img src={fifa} alt="fifa" />
            </div>
            <div className="mywfl-partners-img">
              <img src={nhl} alt="nhl" />
            </div>
            <div className="mywfl-partners-img">
              <img src={yurg} alt="yurg" />
            </div>
          </div>

          <div className="mywfl-msvp">
            <span>Boxes bought for MSRP:</span> <span>1,000,000</span> <span>and counting </span>
          </div>
          <img src={brandglow} className="mywfl-glow" alt="brandglow" />
        </div>
        <Row>
        <Col md={6}>
            <div className="medal-img-right">
              <h3 className="app-h2-5">Move your way to the  <br /> <span>front of the line.</span></h3>
              <p className='mt-20px'>
              Whether you collect for fun or for business, luck isn’t a winning strategy. <br />
              You need to be at the front of the line. <br />
              Being forst means, you get the packs you want. <br />
              At the lowest price. <br />
              Everytime. <br />
              Are you ready to be first?
              </p>
              <div className="medalright-img">
                <img src={medalright} alt="medalright" className="medalright-img-img" />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="medal-img">
              <img src={medal} alt="medal" className="medal-img-img" />
              <div className="medal-content">
                <h3 className="app-h2-5">Be <span>first</span> or don't bother.</h3>
                <p>Collecting sports card is about winning. <br />
                    It is about getting the packs you want. <br />
                    when you want them. <br />
                    For the lowest possible price. <br />
                    What are you using to guarantee the win?</p>
              </div>
              
            </div>
          </Col>
          
        </Row>
      </div>

      <div className="tpas">
        <CardGradient height={"560px"}>
          <Row>
            <Col md={6}>
              <div className="tpas-left">
                <h2 className='app-h2 mb-20px'>The <span>power</span> of <span>automated Software.</span></h2>
                <p>
                Stellar is your ace in the hole. <br />
                You’re closer. <br />
                A way to rig the game. <br />
                Automated checkout software that watches for <br />
                restocks and automatically completes your checkout (in milliseconds). <br />
                Guaranteeing you get the packs you want, everytime. <br />
                Software designed to give you the edge.
                </p>

                <Link href="#" className="tpas-link">See Success Story</Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="tpas-img">
                <img src={tpasImg} className="tpas-img-img" alt="Success" />
                <img src={automationglow} className='tpas-glow' alt="automationglow" />
              </div>
            </Col>
          </Row>
        </CardGradient>
      </div>
   
      <div id='hiws' style={{ position: `${isSticky ? 'sticky' : 'relative'}`}} className="how-it-works">
          <div id='hiws-cont' className="how-it-works-container">
            <div className="how-it-works-sticky">
              <CardGradient style={{width: '100%'}} height={"64rem"}>
                  <Row>
                    <Col md={6}>
                      <div className="how-it-works-left">
                        <h2 className="app-h2 mb-30px">
                          How it works
                        </h2>

                        <h3>Select your <span>Product</span></h3>
                        <p className='mb-20px'>From the top re­tail­ers: Topps. Pani­ni. Tar­get.
                          Wal­mart. Ama­zon. Best Buy. Fa­nat­ics.</p>

                        <h3>Create your <span>Task</span></h3>
                        <p className='mb-20px'>Easily create tasks with breeze from our catalog of hot card releases. We’ll monitor these store’s for you every second. </p>

                        <h3>Watch and <span>Win</span></h3>
                        <p> Once your selected packs are released or restocked, we’ll automatically get you to the front of the line. </p>

                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="how-it-works-img">
                        <div className='position-relative z-index-1 how-it-works-img-imgs'>
                          <img id='prod3' src={prod3} alt="prod3" className='prod3 prod'/>
                          <img id='prod2' src={prod2} style={{transform: `translateY(-${prod2top}px)` }} alt="prod2" className='prod2 prod' />
                          <img id='prod1' style={{transform: `translateY(-${prod1top}px)` }} src={prod1} alt="prod1" className='prod1 prod' />
                        </div>
                        

                        <img src={howitworksglow} className="how-it-works-glow" alt="howitworksglow" />
                      </div>
                    </Col>
                  </Row>
              </CardGradient>
            </div>
          </div>
      </div>

      <div className="happy-customers" style={{marginTop: `${isSticky ? '1700px' : '150px'}`}} >
        <CardGradient height={"51rem"} overflow={true} className="happy-customers-card">
          <h2 className='app-h2 text-center mt-30px'>Over <span>10,000</span> Happy Customers.</h2>
          <p className='text-center'>What are users saying?</p>

          <div className="happy-customers-rev">
            <Row>
              <Col md={4}>
                <div className="happy-customers-review happy-customers-review-1">
                  <p>“I was tired of paying 2-5x markup on eBay for cards and figured I’d try to use the software resellers use. Hit my first box for the retail price within two weeks of getting Stellar!!! I decided to upgrade to Lifetime based on the savings from purchasing retail cards.”</p>

                  <p className='mb-0'>Liam Roberts</p>
                  <div className="hcr-img">
                    <img src={discord} alt="discord" />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="happy-customers-review happy-customers-review-2">
                  <p>“As a collector, this is my favorite software!! People have started to invest in alternative assets, which made resell prices skyrocket. It doesn’t get better than buying cards for MSRP! Thank you, Stellar!!”</p>

                  <p className='mb-0'>Harold Grace</p>
                  <div className="hcr-img">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="happy-customers-review happy-customers-review-3">
                  <p>“I purchased Stellar due to the various amounts of retailers they support. Dropped every other bot subscription and purchased a Lifetime license to Stellar. Best investment ever!!! Been in the scene for 4 years and never seen a better development team!”.</p>

                  <p className='mb-0'>Kyle Douglas</p>
                  <div className="hcr-img">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </CardGradient>
      </div>

      <ProductPlans msrp={true} />

      <div className="mbg">
        <div className="mbg-img">
          <img style={{width: '31.7rem'}} src={mbgimg} alt="mbg-img" />
          <img src={powerbackglow} className="mbg-img-glow" alt="powerback" />
          <img src={powerbackglow} className="mbg-img-glow2" alt="powerback" />
        </div>
        <div className="mbg-content">
          <h3 className="app-h3">100% Satisfaction <span>Guarantee.</span></h3>
          <p>If you decide that botting is not for you, we’ll offer a full refund within the first 10 days.</p>
        </div>
      </div>

      <Faq/>
    </section>
  )
}

export default Products