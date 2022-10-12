import Buttons from '../../components/Generals/Buttons'
import CardGradient from '../../components/Generals/CardGradient'
import midimg from '../../assets/imgs/products/imdimg.png'
import topImg from '../../assets/imgs/products/topleftImg.png'
import btmImg from '../../assets/imgs/products/bottomrightimg.png'
import {Row, Col} from 'reactstrap'
import medal from '../../assets/imgs/products/medal.png'
import medalright from '../../assets/imgs/products/medalright.png'
import tpasImg from '../../assets/imgs/products/ezgif 29.png'
import prod1 from '../../assets/imgs/products/prod1.png'
import prod2 from '../../assets/imgs/products/prod2.png'
import prod3 from '../../assets/imgs/products/prod3.png'
import Logo from '../../assets/imgs/products/Logo (3).png'
import check from '../../assets/imgs/products/check.png'
import mbgimg from '../../assets/imgs/products/mbgimg.png'
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

function Products() {
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
          <Buttons text={"Get your cards first, always"} border={"none"} width={"63%"}/>
          <Buttons background="#161632" border={"none"} text={"Learn More"} width={"32%"} />
        </div>

        <div className="bfil-imgs">
          <img src={topImg} alt="topimg" className="top-img" />
          <img src={midimg} alt="midimg" className='mid-img' />
          <img src={btmImg} alt="btmimg" className="btm-img" />
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
            <div className="medal-img">
              <img src={medal} alt="medal" />
            </div>
          </Col>
          <Col md={6}>
            <div className="medal-img-right">
              <img src={medalright} alt="medalright" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="tpas">
        <CardGradient height={"560px"}>
          <Row>
            <Col md={6}>
              <div className="tpas-left">
                <h2 className='app-h2 mb-20px'>The <span>power</span> of an <span>automated Software.</span></h2>
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

      <div className="how-it-works">
        <CardGradient height={"64rem"}>
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
                <div className='position-relative z-index-1'>
                  <img src={prod3} alt="prod3" className='prod3 prod'/>
                  <img src={prod2} alt="prod2" className='prod2 prod' />
                  <img src={prod1} alt="prod1" className='prod1 prod' />
                </div>
                

                <img src={howitworksglow} className="how-it-works-glow" alt="howitworksglow" />
              </div>
            </Col>
          </Row>
        </CardGradient>
      </div>

      <div className="happy-customers">
        <CardGradient height={"51rem"} overflow={true} className="happy-customers-card">
          <h2 className='app-h2 text-center mt-30px'>Over <span>10,000</span> Happy Customers.</h2>
          <p className='text-center'>What are users saying?</p>

          <div className="happy-customers-rev">
            <Row>
              <Col md={4}>
                <div className="happy-customers-review happy-customers-review-1">
                  <p>“The days of waiting and hoping you can purchase trading cards before they’re sold out are over. Stellar has automated the checkout and monitors retailers for every release, getting you the cards you want, when you want them”.</p>

                  <p className='mt-30px mb-0'>Stephanie Jorge</p>
                  <div className="hcr-img">
                    <img src={discord} alt="discord" />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="happy-customers-review happy-customers-review-2">
                  <p>“The days of waiting and hoping you can purchase trading cards before they’re sold out are over. Stellar has automated the checkout and monitors retailers for every release, getting you the cards you want, when you want them”.</p>

                  <p className='mt-30px mb-0'>Stephanie Jorge</p>
                  <div className="hcr-img">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="happy-customers-review happy-customers-review-3">
                  <p>“The days of waiting and hoping you can purchase trading cards before they’re sold out are over. Stellar has automated the checkout and monitors retailers for every release, getting you the cards you want, when you want them”.</p>

                  <p className='mt-30px mb-0'>Stephanie Jorge</p>
                  <div className="hcr-img">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </CardGradient>
      </div>

      <div className="product-plans">
        <h2 className="app-h2 text-center">Never <span>pay resale</span> on Cards or Collectibles <br /> ever again.</h2>

        <div className="product-plans-plans d-flex">
          <div className="p-plan p-plan-1">
            <div className="p-plan-logo">
             <img src={Logo} alt="logo" />
            </div>
            <p className='mb-20px'>Retail Software</p>
            <p className='mb-20px'>Retail Sites</p>
            <p className='mb-20px'>Sneakers Sites</p>
            <p className='mb-20px'>Unlimted Tasks</p>
            <p>Expiration Date</p>
          </div>
          <div className="p-plan p-plan-2">
            <div className="p-plan-top">
              <h3 className="app-h3 mb-20px">Quarterly</h3>
              <p><span>149</span>/yr</p>
            </div>

            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>

            <p>3 Months</p>

            <button>Choose Plan</button>

          </div>
          <div className="p-plan p-plan-3 p-plan-active">
            <div className="p-plan-badge">Most Popular</div>
            <div className="p-plan-top">
              <h3 className="app-h3 mb-20px">Quarterly</h3>
              <p><span>149</span>/yr</p>
            </div>

            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>

            <p>3 Months</p>

            <button>Choose Plan</button>

          </div>
          <div className="p-plan p-plan-4">
          <div className="p-plan-badge">Best Value</div>
            <div className="p-plan-top">
              <h3 className="app-h3 mb-20px">Quarterly</h3>
              <p><span>149</span>/yr</p>
            </div>

            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>
            <div className='p-plan-check'><img src={check} alt="check" /></div>

            <p>3 Months</p>

            <button>Choose Plan</button>

          </div>
          
        </div>

        <p className='text-center'>How much would you pay to get the cards you want, at MSRP, every time?</p>
      </div>

      <div className="mbg">
        <div className="mbg-img">
          <img src={mbgimg} alt="mbg-img" />
          <img src={powerbackglow} className="mbg-img-glow" alt="powerback" />
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