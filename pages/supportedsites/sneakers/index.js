import React from "react";
import BackArror from "../../../assets/svgs/BackArrow";
import SkipToFrontCard from "../../../components/Generals/SkipToFrontCard";
import { useRouter } from "next/router";
import CardGradient from "../../../components/Generals/CardGradient";
import Sneakers from "../../../assets/imgs/supportedsites/sneakerssm.png";

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
import Buttons from "../../../components/Generals/Buttons";

function index() {
  const router = useRouter();
  const goBack = () => {
    router.back();
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
            <h3>
              Supported Retailers <br /> for <span>Sneakerheads.</span>
            </h3>
            <img src={Sneakers} alt="" />
          </div>

          <div className="supported-site-list">
            <p>Site List</p>
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
                <img src={Yeeze} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Gamestop} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Queueit} alt="" />
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
                <img src={Fanatics} alt="" />
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
                <img src={Sense} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Dicks} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Swatch} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Snipes} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Nords} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Sams} alt="" />
              </div>
              <div className="supported-site-list-item">
                <img src={Costo} alt="" />
              </div>
            </div>
            <div className="supported-site-load-more mt-20px">
              <Buttons
                text={"Load More"}
                border={"none"}
                width={"18.3rem"}
                zIndex={1}
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
