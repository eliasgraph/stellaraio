import React, { useState, useEffect } from "react";
import CardGradient from "../components/Generals/CardGradient";
import { Row, Col, Collapse, Modal, ModalBody } from "reactstrap";
import { useRouter } from "next/router";
import Buttons from "../components/Generals/Buttons";
/* import { Link } from 'react-router-dom' */

import dash from "../assets/imgs/landingpage/dash_.png";
import analytic from "../assets/imgs/landingpage/analytic.png";
import userfriendly from "../assets/imgs/landingpage/userfriendly.png";
import support from "../assets/imgs/landingpage/support.png";
import torus from "../assets/imgs/landingpage/torus.png";
import cone from "../assets/imgs/landingpage/cone.png";
import spherespring from "../assets/imgs/landingpage/spherespring.png";
/* import select from '../../assets/imgs/landingpage/select1.png' */
import select from "../assets/imgs/landingpage/select.gif";
/* import create from '../../assets/imgs/landingpage/create1.png' */
import create from "../assets/imgs/landingpage/create.gif";
/* import checkout from '../../assets/imgs/landingpage/checkout1.png' */
import checkout from "../assets/imgs/landingpage/checkout.gif";
import ribbon from "../assets/imgs/landingpage/ribbon.png";
import supportedby from "../assets/imgs/landingpage/Mockup-Recovered 3.png";
import quote from "../assets/imgs/landingpage/quote.png";
import left from "../assets/imgs/landingpage/Arrow 2.png";
import right from "../assets/imgs/landingpage/Arrow 3.png";

import supportnext from "../assets/imgs/icon/support-next.png";

import glowringlg from "../assets/imgs/Path 5.png";
import img1 from "../assets/imgs/landingpage/img1.jpeg";
import img2 from "../assets/imgs/landingpage/img2.jpeg";
import img3 from "../assets/imgs/landingpage/img3.jpeg";
import img4 from "../assets/imgs/landingpage/img4.jpeg";
import img5 from "../assets/imgs/landingpage/img5.jpeg";
import glowringsm from "../assets/imgs/Path 6.png";
import RightArrow from "../assets/imgs/icon/right-purple-arrow.png";

import Faq from "../components/landing/Faq";
import Software from "../components/landing/Software";
import glowsmhalf from "../assets/imgs/blog/Path 6.png";
import glowhalf from "../assets/imgs/blog/Path 5 (1).png";
import BlogCardLg from "../components/Blog/BlogCardLg";

import BlogService from "../services/BlogService";
import BlogCardSm from "../components/Blog/BlogCardSm";
import JoinWaitlist from "../components/Generals/JoinWaitlist";
import SeeSiteModal from "../components/landing/modals/seeSite";

function Home() {
  const [seeSite, setSeeSite] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailLoding, setEmailLoading] = useState(false);
  const [firstBlog, setFirstBlog] = useState([]);
  const [blogArr, setBlogArr] = useState([]);
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (seeSite) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
  }, [seeSite]);

  useEffect(() => {
    getBlogs();
  }, []);

  const reviews = [
    {
      review:
        "Stellar for me has been the most worth it bot that i use for retail and it’s my go to bot , I got it over a year ago now and it’s paid off for me 100 fold , it’s easy to use and user friendly.",
      img: img1,
      name: "Juice#0069",
    },
    {
      review:
        "I love Stellar, it has provided me a way to make money easily while sitting away from my keyboard. You guys, make it as easy as starting it and not touching anything!.",
      img: img2,
      name: " Chuckles2621#7395",
    },
    {
      review:
        "I feel it’s a great bot that improves daily alongside the retailers constantly changing how their system works. The improvements made daily along with the constant bug fixes is top notch",
      img: img3,
      name: "Jcameron#3663",
    },
    {
      review:
        "From what I've seen Stellar holds up against all of the other competitors quite well. It is a solid bot with great Devs and support",
      img: img4,
      name: "Cardking5432#6326",
    },
    {
      review:
        "Great product, devs seem to be on top of things, continually provide new ideas and services.",
      img: img5,
      name: "Sweetfeet_shoes#1462",
    },
  ];
  const tog_seeSite = () => {
    setSeeSite(!seeSite);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const emailValid = isEmail(email);

    if (!email.length || !emailValid) {
      setEmailError(true);
      return;
    }

    setEmailLoading(true);

    fetch("https://stellarautomation.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        setTimeout(() => {
          router.push("/thank-you");
          setEmailLoading(false);
          setEmailError(false);
        }, 1000);
      })
      .catch((error) => {
        setEmailLoading(false);
        setEmailError(false);
        console.log("Request failed", error);
      });
  };

  const getBlogs = async () => {
    setFirstBlog([await getOneBlog("amazon-buy-bot")]);
    setBlogArr([
      await getOneBlog("best-buy-bot"),
      await getOneBlog("amazon-purchase-bot"),
      await getOneBlog("playstation-bot"),
      await getOneBlog("walmart-bot"),
    ]);
  };
  const getOneBlog = async (slug) => {
    const query = `_fields=id,title,content,acf`;
    try {
      const res = await BlogService.searchOneBlog(slug, query);
      const data = res.data.filter((blog) => blog.acf.url === slug);
      return data[0];
    } catch (e) {
      console.log(e);
      setErrors(e);
      return null;
    }
  };

  const pushToBlogDetail = () => {
    router.push(`/blog/${blog.acf.url}`);
  };

  const pushJoinWaitlist = () => {
    router.push("/add-to-waitlist");
  };

  const prev = () => {
    if (imgIndex === 0) {
      return;
    }
    setImgIndex(imgIndex - 1);
  };

  const next = () => {
    if (imgIndex === reviews.length - 1) {
      return;
    }
    setImgIndex(imgIndex + 1);
  };

  return (
    <>
      <section id="home">
        <CardGradient height={"64.7rem"}>
          <div className="home-div">
            <Row>
              <Col style={{ position: "relative" }} sm={12} md={4}>
                <div className="home__left">
                  <div className="home__left--content">
                    <h1>
                      The Fastest Automation <br /> Checkout Software
                    </h1>
                    <p className="text-muted">
                      Stellar handles the checkout process for you, ensuring you
                      get the products you want before anyone else.
                    </p>
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
                </div>
              </Col>
              <Col sm={12} md={8}>
                <div className="home-right">
                  <div className="home-right-img">
                    <img src={dash} alt="dash" width={"100%"} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </CardGradient>
      </section>

      <Software
        showHeadings={true}
        showConeIcon={true}
        showTorusIcon={true}
        showSphereIcon={true}
      />

      <section id="features" className="c-a-d">
        <div className="head-info">
          <h2 className="text-center">Create. Automate. Dominate</h2>
          <p className="text-center">How it works</p>
        </div>
        <div className="p-relative overflow-hidden">
          <div className="c-a-d__holder">
            <div className="c-a-d__holder--inner">
              <Row className="cad-row align-items-center">
                <Col md={6} sm={12}>
                  <div className="c-a-d__item--img">
                    <img src={select} alt="select" />
                    <img
                      width={"90%"}
                      src={glowringlg}
                      className="c-a-d-glowring"
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6} sm={12} className="align-self-center cad-text-col">
                  <div className="c-a-d__item--texts ml-auto">
                    <h3>
                      Select <br /> Desired Products
                    </h3>
                    <p>
                      Make a choice from the wide range of products suppoted on
                      our Amazing platform.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="c-a-d__holder--inner">
              <Row className="cad-row">
                <Col md={6} sm={12}>
                  <div className="c-a-d__item--img ">
                    <img src={create} alt="create" />
                    <img
                      width={"90%"}
                      src={glowringlg}
                      className="c-a-d-glowring"
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6} sm={12} className="align-self-center cad-text-col">
                  <div className="c-a-d__item--texts ml-auto">
                    <h3>
                      Create <br /> Task Seamlessly.
                    </h3>
                    <p>
                      Easily create Tasks for your coveted products at light
                      speed.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="c-a-d__holder--inner">
              <Row className="cad-row">
                <Col md={6} sm={12}>
                  <div className="c-a-d__item--img ">
                    <img src={checkout} alt="checkout" />
                    <img
                      width={"90%"}
                      src={glowringlg}
                      className="c-a-d-glowring"
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={6} sm={12} className="align-self-center cad-text-col">
                  <div className="c-a-d__item--texts ml-auto">
                    <h3>
                      Checkout <br /> in Milliseconds.
                    </h3>
                    <p>
                      Add your shipping details and your order would be on its
                      way to you..
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="ribbon">
            <img width={"100%"} src={ribbon} alt="ribbon" />
            <div className="ribbon--texts">
              <h3>
                Performance <br /> speaks for itself.
              </h3>
              <p>
                Stellar has again and again proven to be the best choice for
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sites" className="supported">
        <CardGradient className="support-bg">
          <Row>
            <Col lg={6} md={12} style={{ overflow: "visible" }}>
              <div className="support-img">
                <img
                  className="support-img-cell"
                  src={supportedby}
                  alt="supported-img"
                />
                <img src={glowringlg} className="support-img-glowring" alt="" />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="support-text">
                <h1 className="text-right">
                  Supported by the most popular{" "}
                  <span>
                    Big Box <br /> Retailers.
                  </span>
                </h1>
                <p className="text-right">
                  Stellar is your the only one and true AIO that allows you to
                  shop easily and profitably from your favorite retailers
                  globally.
                </p>
              </div>
              <div
                role={"button"}
                onClick={tog_seeSite}
                className="support-actions d-flex align-items-center justify-content-end mt-20px"
              >
                <p className="color-purple-2 me-3 mb-0">See all Site</p>
                <div className="supportaction">
                  <img src={supportnext} alt="next" />
                </div>
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>

      <section className="landing_blog">
        <div className="landing_blog-top">
          <span>BLOG</span>
          <h2 className="app-h2 mb-0">Tips and Insight</h2>
          <span
            role={"button"}
            onClick={() => {
              router.push("/blog");
            }}
            className="d-flex align-items-center gap-3 landing_blog--seemore mb-20px"
          >
            See all <img src={RightArrow} alt="" />{" "}
          </span>
        </div>

        <Row>
          <Col md={6}>
            {/* <div onClick={()=>pushToBlogDetail()} role={'button'} className="blog-card-lg">
              <div className="blog-card-lg-img">
                {blog && <img src={blog.acf.blog_img} alt="" />}
                
              </div>
              <div className="blog-card-lg-content">
                {blog && <h1 dangerouslySetInnerHTML={{__html: blog.title.rendered}} ></h1>}
                
                <p  className="app-color-primary">Author: Stellar AIO</p>
                <div className="blog-card-glow-half">
                  <img src={glowhalf} alt="" />
                </div>
              </div>
            </div> */}
            <div className="landing_blog_lg">
              {firstBlog[0] && (
                <BlogCardLg landing={true} blog={firstBlog[0]} />
              )}
            </div>
          </Col>

          <Col md={6}>
            <Row>
              {blogArr.map((blog, i) => (
                <Col key={i} md={6}>
                  {blog && <BlogCardSm landing={true} blog={blog} />}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>

      <section className="home-users">
        <CardGradient height={"46rem"} className="home-users__card">
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
                  {reviews.map((item, key) => (
                    <div
                      key={key}
                      onClick={() => {
                        setImgIndex(key);
                      }}
                      role={"button"}
                      className={`home-users__user ${
                        imgIndex === key ? "home-users__user-active" : ""
                      }`}
                    >
                      <img src={item.img} alt="u1" />
                    </div>
                  ))}

                  <div onClick={next} className="arrow-icon">
                    <img src={right} alt="left" />
                  </div>
                </div>
              </div>
            </Col>

            <Col
              lg={4}
              md={12}
              className="d-flex justify-content-end align-items-center"
            >
              <div className="home-user-review-img">
                <img
                  className="home-user-reviewimg-img"
                  src={reviews[imgIndex].img}
                  alt=""
                />
                {/* <img className='home-user-review-glowring' src={glowringlg} alt="" /> */}
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>

      <JoinWaitlist />

      <Faq />
      <SeeSiteModal seeSite={seeSite} tog_seeSite={tog_seeSite} />
    </>
  );
}

export default Home;
