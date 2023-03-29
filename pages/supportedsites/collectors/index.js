import React from "react";
import { Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import BackArror from "../../../assets/svgs/BackArrow";
import SkipToFrontCard from "../../../components/Generals/SkipToFrontCard";
import CardGradient from "../../../components/Generals/CardGradient";
import Sneakers from "../../../assets/imgs/supportedsites/sneakersbg.png";
import Sneakershirts from "../../../assets/imgs/supportedsites/sneakshirts.png";
import Collectors from "../../../assets/imgs/supportedsites/collectorsbg.png";
import Amazon from "../../../assets/imgs/supportedsites/amazon.png";
import BestBuy from "../../../assets/imgs/supportedsites/bestbuy.png";
import Walmart from "../../../assets/imgs/supportedsites/walmart.png";
import Yeeze from "../../../assets/imgs/supportedsites/yeeze.png";
import Gamestop from "../../../assets/imgs/supportedsites/gamestop.png";
import Queueit from "../../../assets/imgs/supportedsites/queueit.png";
import Shopify from "../../../assets/imgs/supportedsites/shopify.png";
import Target from "../../../assets/imgs/supportedsites/target.png";
import Newegg from "../../../assets/imgs/supportedsites/newegg.png";
import Fanatics from "../../../assets/imgs/supportedsites/fantastics.png";
import Pinini from "../../../assets/imgs/supportedsites/pinini.png";
import Amd from "../../../assets/imgs/supportedsites/amd.png";
import Topps from "../../../assets/imgs/supportedsites/topps.png";
import Disney from "../../../assets/imgs/supportedsites/disney.png";
import Sense from "../../../assets/imgs/supportedsites/sense.png";
import Dicks from "../../../assets/imgs/supportedsites/dicks.png";
import Swatch from "../../../assets/imgs/supportedsites/swatch.png";
import Snipes from "../../../assets/imgs/supportedsites/snipes.png";
import Nords from "../../../assets/imgs/supportedsites/nords.png";
import Sams from "../../../assets/imgs/supportedsites/sams.png";
import Costo from "../../../assets/imgs/supportedsites/costo.png";
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
  const pushToSneakers = () => {
    router.push("/supportedsites/sneakers");
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
                Master the Art <br />
                of Collecting <br />
                with <span>Stellar.</span>
              </h1>
              <a href="#supported-site-list">
                <img src={Readmore} alt="" />
              </a>
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
      <section className="supported-site-list">
        <CardGradient className="supported-site-list-card">
          <Row>
            <Col md={5} className={"align-self-center"}>
              <h2>
                Support <span>Every</span> <br /> Box Retailer <br /> For
                <span> Collectors.</span>{" "}
              </h2>
            </Col>
            <Col md={7}>
              <div className="supported-site-list-wrapper">
                <div className="supported-site-list-item">
                  <img src={Amazon} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={BestBuy} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Walmart} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Gamestop} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Fanatics} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Shopify} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Target} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Newegg} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Pinini} alt="" />
                </div>
                <div className="supported-site-list-item">
                  <img src={Amd} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Topps} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Disney} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Queueit} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Costo} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Swatch} alt="" />
                </div>

                <div className="supported-site-list-item">
                  <img src={Sams} alt="" />
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
                Need <span>Sneakers</span> or <br /> <span>High Clothing?</span>
              </h2>
              <p className="mb-20px">
                Stellar is an all-in one solution, meaning we <br />
                automate the checkout process for all <br />
                sneaker sites!
              </p>
              <Buttons
                clicked={pushToSneakers}
                text={"View Sneakers Sitelist"}
                width={"183px"}
              />
            </div>
            <div className="supported-site-selected-top-right">
              <img src={Sneakershirts} alt="" />
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
