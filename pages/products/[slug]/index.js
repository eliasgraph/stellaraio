import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Buttons from "../../../components/Generals/Buttons";
import UpIcon from "../../../assets/imgs/icon/readmore.png";
import TargetBot from "../../../assets/imgs/cardspage/target.png";
import DashboardHalf from "../../../assets/imgs/cardspage/dashboardhalf.png";
import Bolt from "../../../assets/imgs/cardspage/bolt.png";
import Msg from "../../../assets/imgs/cardspage/msg.png";
import Life from "../../../assets/imgs/cardspage/life.png";
import Walmart from "../../../assets/imgs/logos/walmart.png";
import Nike from "../../../assets/imgs/logos/nike.png";
import Amazon from "../../../assets/imgs/logos/amazon.png";
import Bestbuy from "../../../assets/imgs/logos/bestbuy.png";
import Footlocker from "../../../assets/imgs/logos/foot-locker.png";
import Shopify from "../../../assets/imgs/logos/shopify.png";
import Phone from "../../../assets/imgs/cardspage/retailers.png";

import Mike from "../../../assets/imgs/cardspage/mike.png";
import Mikky from "../../../assets/imgs/cardspage/mikky.png";
import Kinsley from "../../../assets/imgs/cardspage/kinsley.png";

import StarYellow from "../../../assets/imgs/icon/staryellow.png";
import StarWhite from "../../../assets/imgs/icon/starwhite.png";

import Software from "../../../components/landing/Software";
import FaqCard from "../../../components/landing/FaqCard";
import ProductPlans from "../../../components/PageComponents/ProductPlans";

import ProductService from "../../../services/ProductService";
import Meta from "../../../components/layout/Meta";
function index({ product }) {
  const [faq, setFaq] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [section1_text, setSection1_text] = useState(
    product.acf.section1_text || ""
  );
  const handleShowMore = () => {
    if (showMore) {
      setSection1_text(
        product.acf.section1_text.substring(
          0,
          product.acf.section1_text_num_of_characters || 0
        ) + "..."
      );
    } else {
      setSection1_text(product.acf.section1_text);
    }
    setShowMore(!showMore);
  };

  useEffect(() => {
    const faqCompute = {};
    const { acf } = product;

    Object.keys(acf).forEach((item, index) => {
      if (item.startsWith("faq")) {
        faqCompute[item] = Object.values(acf)[index];
        setFaq(faqCompute);
      }
    });
  }, []);

  return (
    <>
      <Meta title={product.acf.title_tag} />
      <section className="target-bot">
        <Row>
          <Col sm={12} md={6}>
            <div className="target__left">
              <h1 className="app-h1 mb-20px">{product.acf.section1_h1}</h1>
              <Buttons text={"Buy Now"} border={"none"} width={"17.7rem"} />

              <p>{section1_text}</p>

              <div
                onClick={handleShowMore}
                className="read-more-btn d-flex align-items-center gap-3"
              >
                {showMore ? "Show Less" : "Show More"}{" "}
                <img src={UpIcon} alt="" />{" "}
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="target__right">
              <div className="target__right--img">
                <img src={product.acf.section1_img} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <Software showTorusIcon={true} />

      <section className="stellar-love">
        <div className="stellar-love-card">
          <h2
            dangerouslySetInnerHTML={{ __html: product.acf.section3_h1 }}
            className="app-h2 text-center"
          ></h2>

          <Row>
            <Col md={6}>
              <div className="stellar-love-left">
                <div className="stellar-love-items">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: product.acf.section3_h2_1,
                    }}
                  ></h3>
                  <p>{product.acf.section3_text_1}</p>
                </div>
                <div className="stellar-love-items">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: product.acf.section3_h2_2,
                    }}
                  ></h3>
                  <p>{product.acf.section3_text_2}</p>
                </div>
                <div className="stellar-love-items">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: product.acf.section3_h2_3,
                    }}
                  ></h3>
                  <p>{product.acf.section3_text_3}</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="stellar-love-right">
                <div className="stellar-love-right-img">
                  <img
                    src={DashboardHalf}
                    className="stellar-love-dashalf"
                    alt=""
                  />

                  {product.acf.section3_img_1 && (
                    <img
                      src={product.acf.section3_img_1}
                      className="stellar-love-right-img-sub stellar-love-right-img-sub-1"
                      alt=""
                    />
                  )}

                  {product.acf.section3_img_2 && (
                    <img
                      src={product.acf.section3_img_2}
                      className="stellar-love-right-img-sub stellar-love-right-img-sub-2"
                      alt=""
                    />
                  )}

                  {product.acf.section3_img_3 && (
                    <img
                      src={product.acf.section3_img_3}
                      className="stellar-love-right-img-sub stellar-love-right-img-sub-3"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>

          <div className="buy-now-btn">
            <Buttons text={"Buy Now"} border={"none"} width={"31.7rem"} />
          </div>
        </div>
      </section>

      <section className="sup-the-box">
        <div className="sup-the-box-card">
          <div className="sup-the-box-img">
            <img src={Phone} alt="" />
          </div>
          <div className="sup-the-box-content">
            <h3 className="text-right">
              Support the Big <br /> Box Retailer.
            </h3>
            <div className="sup-the-box-brands">
              <div className="sup-the-box-brand-img">
                <img src={Walmart} style={{ width: "36px" }} alt="" />
                <p className="mb-0">Walmart</p>
              </div>
              <div className="sup-the-box-brand-img">
                <img src={Amazon} style={{ width: "40px" }} alt="" />
                <p className="mb-0">Amazon</p>
              </div>
              <div className="sup-the-box-brand-img">
                <img src={Bestbuy} style={{ width: "40px" }} alt="" />
                <p className="mb-0">Best Buy</p>
              </div>
              <div className="sup-the-box-brand-img">
                <img src={Footlocker} style={{ width: "50px" }} alt="" />
                <p className="mb-0">Footlocker</p>
              </div>
              <div className="sup-the-box-brand-img">
                <img src={Shopify} style={{ width: "33px" }} alt="" />
                <p className="mb-0">Shopify</p>
              </div>
              <div className="sup-the-box-brand-img">
                <img src={Nike} style={{ width: "66px" }} alt="" />
              </div>
            </div>
            <div className="sup-the-box-join">
              Join over 10,000 customers worldwide getting the products they
              want
            </div>
          </div>
        </div>
      </section>

      <section className="c-hap-cus">
        <h2 className="app-h2 text-center mb-20px">
          Our <span>Happy</span> Customers
        </h2>
        <h4 className="app-h4 text-center">What are they saying</h4>

        <div className="c-hap-cus-div">
          <div className="c-hap-cus-item">
            <div className="c-hap-cus-top">
              <div className="c-hap-cus-avi">
                <img src={Mike} alt="" />
              </div>
              <div className="c-hap-cus-profile">
                <h6 className="mb-0">Mike Bulk</h6>
                <p className="mb-0">USA</p>
              </div>
            </div>

            <div className="c-hap-cus-detail">
              <h5>Superman Bot</h5>
              <div className="c-hap-cus-rating">
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarWhite} alt="" />
              </div>
              <p>
                Most other bots can only run 100-200 tasks before crashing.
                Stellar AIO is the only bot I’ve used that can support thousands
                of tasks without lag.
              </p>
            </div>
          </div>

          <div className="c-hap-cus-item">
            <div className="c-hap-cus-top">
              <div className="c-hap-cus-avi">
                <img src={Kinsley} alt="" />
              </div>
              <div className="c-hap-cus-profile">
                <h6 className="mb-0">Kinsley Barkley</h6>
                <p className="mb-0">United Kingdom</p>
              </div>
            </div>

            <div className="c-hap-cus-detail">
              <h5>Pocket Friendly</h5>
              <div className="c-hap-cus-rating">
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarWhite} alt="" />
              </div>
              <p>
                I paid off the cost of Stellar after one successful drop. I got
                10 NFL Panini Mega boxes that resold for 4x and paid for the
                entire year of using Stellar!
              </p>
            </div>
          </div>
          <div className="c-hap-cus-item">
            <div className="c-hap-cus-top">
              <div className="c-hap-cus-avi">
                <img src={Mikky} alt="" />
              </div>
              <div className="c-hap-cus-profile">
                <h6 className="mb-0">Mikky lo2us</h6>
                <p className="mb-0">USA</p>
              </div>
            </div>

            <div className="c-hap-cus-detail">
              <h5>Always up to date</h5>
              <div className="c-hap-cus-rating">
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarYellow} alt="" />
                <img src={StarWhite} alt="" />
              </div>
              <p>
                Stellar allowed me to get a barbie collectible for my daughter
                and some special edition Funko’s for my personal collection! I
                couldn’t be more happier with Stellar. Thank you to the
                tremendous development team that allowed me to bring smiles to
                our family!
              </p>
            </div>
          </div>
          {/* <div className="c-hap-cus-item">

            <div className="c-hap-cus-top">
              <div className="c-hap-cus-avi">
                <img src={product.acf.section5_profile_img_3} alt="" />
              </div>
              <div className="c-hap-cus-profile">
                <h6 className="mb-0">{product.acf.section5_profile_name_3}</h6>
                <p className="mb-0">{product.acf.section5_location_3}</p>
              </div>
            </div>

            <div className="c-hap-cus-detail">
              <h5>{product.acf.section5_header_3}</h5>
              <div className="c-hap-cus-rating">
              { Array(parseInt(product.acf.section5_rating_3)).fill(0).map((_, i) => {
                    return (
                      <img key={i} src={StarYellow} alt="" />
                    )
                  })
              
              }
              
              { Array(parseInt(5-product.acf.section5_rating_3)).fill(0).map((_, i) => {
                    return (
                      <img key={i} src={StarWhite} alt="" />
                    )
                  })
                }
              

              </div>
              <p>
                {product.acf.section5_text_3}

              </p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="cardproduct-plan">
        <ProductPlans />
      </section>
      <section className={"cardfaq"}>
        <FaqCard faq={faq} />
      </section>
    </>
  );
}

export default index;

export const getStaticPaths = async () => {
  const query = `per_page=100&_fields=acf`;
  const res = await ProductService.getAllProducts(query);
  const result = res.data;
  const paths = result.map((data) => ({
    params: { slug: data.acf.url.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  let product = null;

  try {
    const query = `per_page=100&_fields=acf`;
    const res = await ProductService.getProductPageDetails(slug, query);
    const data = res.data.filter((product) => product.acf.url === slug);
    product = data[0];
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      product,
    },
  };
};
