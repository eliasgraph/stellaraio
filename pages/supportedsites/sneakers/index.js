import React from "react";
import { Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import BackArror from "../../../assets/svgs/BackArrow";
import SkipToFrontCard from "../../../components/Generals/SkipToFrontCard";
import CardGradient from "../../../components/Generals/CardGradient";
import Sneakers from "../../../assets/imgs/supportedsites/sneakersbg.png";
import Collectors from "../../../assets/imgs/supportedsites/collectorsbg.png";
import Yeeze from "../../../assets/imgs/supportedsites/yeeze.png";
import Shopify from "../../../assets/imgs/supportedsites/shopify.png";
import Sense from "../../../assets/imgs/supportedsites/sense.png";
import Dicks from "../../../assets/imgs/supportedsites/dicks.png";
import Nords from "../../../assets/imgs/supportedsites/nords.png";
import Footlocker from "../../../assets/imgs/supportedsites/footlocker.png";
import Nike from "../../../assets/imgs/supportedsites/nike.png";
import Snkrs from "../../../assets/imgs/supportedsites/snkrs.png";
import Readmore from "../../../assets/imgs/icon/readmoredown.png";
import Buttons from "../../../components/Generals/Buttons";

function index() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const pushToCollectors = () => {
    router.push("/supportedsites/collectors");
  };
  return (
    <>
      <div
        role={"button"}
        onClick={goBack}
        style={{ width: "max-content" }}
        className="d-flex align-items-center cursor-pointer position-relative z-index-1"
      >
        <BackArror />
        <p className="mb-0 ms-2">Back</p>
      </div>
      <section className="supported-site-selected">
        <CardGradient
          overflow={"hidden"}
          className="supported-site-selected-card"
        >
          <div className="supported-site-selected-top">
            <div className="supported-site-selected-top-left">
              <h1>
                <span>Redefine</span> the Game: <br /> Elevate your{" "}
                <span>Sneaker</span> <br /> Collection.
              </h1>
              <a href="#supported-site-list">
                <img src={Readmore} alt="" />
              </a>
            </div>
            <div className="supported-site-selected-top-right">
              <img
                src={Sneakers}
                alt="A pile of different sneakers Showing how Stella AIO can help you collect sneakers easily."
              />
            </div>
          </div>
        </CardGradient>
      </section>
      <section id="supported-site-list" className="supported-site-list">
        <CardGradient className="supported-site-list-card">
          <Row>
            <Col md={5}>
              <h2>
                <span>Dominate</span> Every <br /> Drop on our{" "}
                <span>
                  {" "}
                  <br /> Sitelist.
                </span>{" "}
              </h2>
            </Col>
            <Col md={7}>
              <div className="supported-site-list-wrapper">
                <div className="supported-site-list-item">
                  <img src={Footlocker} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Shopify} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Nords} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Dicks} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Snkrs} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Sense} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Yeeze} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Nike} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>

      <section className="supported-sites-need">
        <CardGradient
          overflow={"hidden"}
          className="supported-site-selected-card"
        >
          <div className="supported-site-selected-top">
            <div className="supported-site-selected-top-left">
              <h2>
                Need <span>Cards</span> or <br /> <span>Collectibles?</span>
              </h2>
              <p className="mb-20px">
                Stellar is an all-in one solution, meaning we <br /> automate
                the checkout process for all <br /> Collectible sites!
              </p>
              <Buttons
                clicked={pushToCollectors}
                text={"View Retail Sitelist"}
                width={"183px"}
              />
            </div>
            <div className="supported-site-selected-top-right">
              <img
                src={Collectors}
                alt="A pile of different collectible items, A GPU, a Doll, Pokemon cards, showing you how StellarAIO can help you collect easily."
              />
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
