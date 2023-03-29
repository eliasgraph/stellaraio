import React from "react";
import { Col, Row } from "reactstrap";
import CardGradient from "../../components/Generals/CardGradient";
import SkipToFrontCard from "../../components/Generals/SkipToFrontCard";
import Hero from "../../assets/imgs/supportedsites/hero.png";
import Sneakers from "../../assets/imgs/supportedsites/sneakerssm.png";
import Collectors from "../../assets/imgs/supportedsites/collectorssm.png";
import Buttons from "../../components/Generals/Buttons";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  const pushToCollectors = () => {
    router.push("/supportedsites/collectors");
  };
  const pushToSneakers = () => {
    router.push("/supportedsites/sneakers");
  };
  return (
    <>
      <section>
        <CardGradient overflow={"hidden"} className="supported-site-hero-card">
          <Row>
            <Col md={6}>
              <div className="supported-site-hero-left">
                <h2 className="app-h2 mb-20px">
                  Supported by <br /> the Big <span>Box Retailers.</span>
                </h2>
                <p>
                  Stellar is designed to work seamlessly with the best retailers
                  globally, ensuring that you have access to easily shop your
                  favorite products, from your favorite retailers.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="supported-site-hero-right">
                <img
                  src={Hero}
                  alt="A box representing StellarAIO filled and overflowing with logos of the popular retailers that are supported by Stellar AIO"
                />
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>
      <section className="supported-cards">
        <Row>
          <Col md={6}>
            <div className="supported-cards-item-left me-3">
              <div className="supported-cards-item">
                <img
                  src={Sneakers}
                  alt="A pile of different sneakers Showing how Stella AIO can help you collect sneakers easily."
                />{" "}
              </div>
              <h3 className="mt-4 mb-3">
                Supported Retailers for <span>SneakerHeads</span>{" "}
              </h3>
              <Buttons
                text={"Open List"}
                border={"none"}
                width={"15.7rem"}
                zIndex={1}
                clicked={pushToSneakers}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="supported-cards-item-right">
              <div className="supported-cards-item">
                <img
                  src={Collectors}
                  alt="A pile of different collectible items, A GPU, a Doll, Pokemon cards, showing you how StellarAIO can help you collect easily."
                />{" "}
              </div>
              <h3 className="mt-4 mb-3">
                Supported Retailers for <span>Collectors</span>{" "}
              </h3>
              <Buttons
                text={"Open List"}
                border={"none"}
                width={"15.7rem"}
                zIndex={1}
                clicked={pushToCollectors}
              />
            </div>
          </Col>
        </Row>
      </section>
      <section className="site-skip">
        <SkipToFrontCard h2={"Skip to the front of the line"} />
      </section>
    </>
  );
}

export default index;
