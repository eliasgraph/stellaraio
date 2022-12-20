import React from "react";
import CardGradient from "../../components/Generals/CardGradient";
import { Row, Col } from "reactstrap";
import Buttons from "../../components/Generals/Buttons";
import { useRouter } from "next/router";
import Hero from "../../assets/imgs/sites/ezgif 31.png";
import Glow from "../../assets/imgs/Path 7.png";
import Phone from "../../assets/imgs/sites/Group 12445.png";
import Software from "../../components/landing/Software";
import SkipToFrontCard from "../../components/Generals/SkipToFrontCard";
import ArrowLeft from "../../assets/imgs/Arrowleft.png";
import ArrowRight from "../../assets/imgs/Arrowright.png";
import Rowey from "../../assets/imgs/sites/rowey.png";
import Lolan from "../../assets/imgs/sites/lolan.png";
import Nonal from "../../assets/imgs/sites/Nonal.png";
import Glowsm from "../../assets/imgs/Path 6.png";

function index() {
  const router = useRouter();
  const pushJoinWaitlist = () => {
    router.push("/add-to-waitlist");
  };
  return (
    <>
      <section className="site-hero">
        <CardGradient className={"site-hero-card"}>
          <Row>
            <Col md={6}>
              <div className="site-hero-left">
                <h2 className="app-h2 mb-20px">
                  The Most <br /> Versatile AIO Bot.
                </h2>
                <p>
                  From Sneakers to collectibles to electronics and everything in
                  between. The Fastest AIO bot for over 50+ Retailers.
                </p>
                <div className="home__actions">
                  <div className="home__actions--bottom d-flex justify-content-between">
                    <Buttons
                      background="#161632"
                      border={"none"}
                      text={"Sold Out"}
                      width={"35%"}
                    />
                    <Buttons
                      clicked={pushJoinWaitlist}
                      text={"Join The Waitlist"}
                      border={"none"}
                      width={"60%"}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="site-hero-right">
                <div className="site-hero-right-img">
                  <img src={Hero} alt="" />
                </div>
                <img src={Glow} className="site-hero-glow" />
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>

      <section className="unparralled">
        <CardGradient className={"unparralled-card"}>
          <h2 className="app-h2 text-center mb-50px">
            Our Unparraled Site List
          </h2>
          <Row>
            <Col md={6}>
              <div className="unparralled-col">
                <h3 className="text-center app-h2-5 mb-20px">
                  The Solidified Retail King.
                </h3>
                <p className="text-center">
                  Stellar AIO is a software that increases your chances on
                  purchasing limited stock items like footwear, apparel, and
                  hype wear from over 50 of the most popular online retailers.
                  <img src={Glowsm} alt="" />
                </p>
                <div className="unparralled-img">
                  <img src={Phone} alt="" />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="unparralled-col">
                <h3 className="text-center app-h2-5 mb-20px">
                  The Up and Coming Sneaker King.
                </h3>
                <p className="text-center">
                  Stellar AIO is a software that increases your chances on
                  purchasing limited stock items like footwear, apparel, and
                  hype wear from over 50 of the most popular online retailers.
                  <img src={Glowsm} alt="" />
                </p>
                <div className="unparralled-img">
                  <img src={Phone} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>
      <section className="site-software">
        <h2 className="app-h2 text-center">Packed with advanced features.</h2>
        <p className="text-center mb-30px">Packed with advanced features.</p>
        <Software />
      </section>
      <section className="site-user-say">
        <CardGradient>
          <div className="site-user-say-div">
            <h2 className="app-h2 text-center mb-30px">
              What our users are saying?
            </h2>
            <div className="site-carousel d-flex justify-content-center gap-4 align-items-center">
              <img src={ArrowLeft} alt="" />
              <div className="site-carousel-content">
                <div className="site-carousel-item">
                  <div className="site-carousel-img">
                    <img src={Rowey} alt="" />
                  </div>
                  <h4 className="text-center">Rowey Landsley</h4>
                  <small>CEO Atkin Waters Enterprice</small>
                  <p className="text-center">
                    Stellar for me has been the most worth it bot that I use for
                    retail and it’s my go to bot. I got it over a year ago now
                    and it’s paid off for me 100 fold , it’s easy to use and
                    user friendly.
                  </p>
                </div>
                <div className="site-carousel-item">
                  <div className="site-carousel-img">
                    <img src={Lolan} alt="" />
                  </div>
                  <h4 className="text-center">Nolan Rowsttien</h4>
                  <small>CEO Atkin Waters Enterprice</small>
                  <p className="text-center">
                    Stellar for me has been the most worth it bot that I use for
                    retail and it’s my go to bot. I got it over a year ago now
                    and it’s paid off for me 100 fold , it’s easy to use and
                    user friendly.
                  </p>
                </div>
                <div className="site-carousel-item">
                  <div className="site-carousel-img">
                    <img src={Nonal} alt="" />
                  </div>
                  <h4 className="text-center">Nolan Rowsttien</h4>
                  <small>CEO Atkin Waters Enterprice</small>
                  <p className="text-center">
                    Stellar for me has been the most worth it bot that I use for
                    retail and it’s my go to bot. I got it over a year ago now
                    and it’s paid off for me 100 fold , it’s easy to use and
                    user friendly.
                  </p>
                </div>
              </div>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
        </CardGradient>
      </section>
      <section className="site-skip">
        <SkipToFrontCard h2={"Skip to the front of the line"} />
      </section>
    </>
  );
}

export default index;
