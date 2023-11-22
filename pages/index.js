import React, { useState, useEffect } from "react";
import { Collapse, Button, Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import ArrowRight from "../assets/imgs/newLayout/arrow-right.png";
import HeroImg from "../assets/imgs/newLayout/herooimg.png";
import Lock from "../assets/svgs/LockSvg";
import RightArrowSmSvg from "../assets/svgs/RightArrowSmSvg";
import ScrollSmSvg from "../assets/svgs/ScrollSmSvg";
import Command from "../assets/imgs/newLayout/whats-new-command.png";
import Command2 from "../assets/imgs/newLayout/command2.png";
import RealTime from "../assets/imgs/newLayout/realtimeIcon.png";
import NewImproved from "../assets/imgs/newLayout/newImproved.png";
import Accessibility from "../assets/imgs/newLayout/accesibility.png";
import Redesigned from "../assets/imgs/newLayout/redesigned.png";
import MuchMore from "../assets/imgs/newLayout/muchmore.png";
import TailIconSvg from "../assets/svgs/TailIconSvg";
import Frame1 from "../assets/imgs/newLayout/shortcut-frame-1.png";
import Frame2 from "../assets/imgs/newLayout/shortcut-frame-2.png";
import WhatsNewTable from "../assets/imgs/newLayout/whatsnewtable.png";
import WhatsNewTable2 from "../assets/imgs/newLayout/whatsnewtablecontainer.png";
import StreamlineIcon from "../assets/imgs/newLayout/streamline-top-icon.png";
import Strealine1 from "../assets/imgs/newLayout/streamlineImg1.png";
import Strealine2 from "../assets/imgs/newLayout/streamlineImg2.png";
import Strealine3 from "../assets/imgs/newLayout/streamlineImg3.png";
import Strealine4 from "../assets/imgs/newLayout/streamlineImg4.png";
import HowItWorks from "../assets/imgs/newLayout/howitworks.png";

import CadImg1 from "../assets/imgs/newLayout/cadimg1.png";
import CadImg2 from "../assets/imgs/newLayout/cad-2.png";
import CadImg3 from "../assets/imgs/newLayout/cad-3.png";

import Amazon from "../assets/imgs/newLayout/amazon.png";

import TabNavLeft from "../assets/svgs/TabNavLeft";
import TabNavRight from "../assets/svgs/TabNavRight";

import ViewAllArrow from "../assets/svgs/ViewAllArrow";

import NewAvi1 from "../assets/imgs/newLayout/newAvi1.png";
import NewAvi2 from "../assets/imgs/newLayout/newavi2.png";
import NewAvi3 from "../assets/imgs/newLayout/newavi3.png";
import NewAvi4 from "../assets/imgs/newLayout/newavi4.png";
import NewAvi5 from "../assets/imgs/newLayout/newavi5.png";
import NewAvi6 from "../assets/imgs/newLayout/newavi6.png";
import NewAvi7 from "../assets/imgs/newLayout/newavi7.png";
import NewAvi8 from "../assets/imgs/newLayout/newavi8.png";
import NewAvi9 from "../assets/imgs/newLayout/newavi9.png";

import StarOn from "../assets/imgs/newLayout/star-on.png";
import StarOff from "../assets/imgs/newLayout/start-off.png";

import NewFaqArrow from "../assets/svgs/NewFaqArrowDown";

import BlogLeftGlow from "../assets/imgs/newLayout/blogleftglow.png";
import BlogBottomRightGlow from "../assets/imgs/newLayout/blogbottomrightglow.png";
import FaqGlow from "../assets/imgs/newLayout/faqglow.png";
import FeaturesBigblur from "../assets/imgs/newLayout/featuresbigblur.png";
import FeaturesTopLeftGlow from "../assets/imgs/newLayout/featurestopleftglow.png";
import FeaturesTopRightGlow from "../assets/imgs/newLayout/featurestoprightglow.png";
import FeaturesBottomLeftGlow from "../assets/imgs/newLayout/featuresbottomleftglow.png";
import FeaturesBottomRightGlow from "../assets/imgs/newLayout/featuresbottomrightglow.png";
import HeroGlow from "../assets/imgs/newLayout/heroglow.png";

import WhatsNewTopRightGlow from "../assets/imgs/newLayout/whatsnewtoprightglow.png";
import WhatsNewMiddleLeftGlow from "../assets/imgs/newLayout/whatsnewmidleleftglow.png";
import WhatsNewMiddleRightGlow from "../assets/imgs/newLayout/whatsnewmiddlerightglow.png";
import Header from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function index() {
  const [hostname, setHostname] = useState("");
  const [activeCad, setActiveCad] = useState(0);
  const [linkActive, setLinkActive] = useState("home");

  const [isOpenFaq1, setIsOpenFaq1] = useState(false);
  const [isOpenFaq2, setIsOpenFaq2] = useState(false);
  const [isOpenFaq3, setIsOpenFaq3] = useState(false);
  const [isOpenFaq4, setIsOpenFaq4] = useState(false);
  const [isOpenFaq5, setIsOpenFaq5] = useState(false);

  const cadContent = [
    {
      h2: "Select Desired Products",
      p1: "Design better and spend less time without restricting creative freedom.",
      p2: "Use a set of text and color styles, customize and apply changes to all pages at once. Create a unique look in just a few minutes.",
      img: CadImg1,
    },
    {
      h2: "Create Tasks Seamlessly",
      p1: "Design better and spend less time without restricting creative freedom.",
      p2: "Use a set of text and color styles, customize and apply changes to all pages at once. Create a unique look in just a few minutes.",
      img: CadImg2,
    },
    {
      h2: "Checkout in Milliseconds",
      p1: "Design better and spend less time without restricting creative freedom.",
      p2: "Use a set of text and color styles, customize and apply changes to all pages at once. Create a unique look in just a few minutes.",
      img: CadImg3,
    },
  ];

  const router = useRouter();
  const faq = undefined;

  useEffect(() => {
    setHostname(window.location.origin);
    window.scrollTo(0, 0);
  }, []);

  const pushJoinWaitlist = () => {
    router.push("/add-to-waitlist");
  };

  const pushToBlog = (path) => {
    router.push(`/blog${path ? "/" + path : ""}`);
  };

  const onCadBack = () => {
    if (activeCad > 0) {
      setActiveCad(activeCad - 1);
    }
  };
  const onCadNext = () => {
    if (activeCad < 2) {
      setActiveCad(activeCad + 1);
    }
  };

  const linkClicked = (linkId) => {
    const targetElement = document.getElementById(linkId);

    if (targetElement) {
      // Calculate the offset considering any fixed header height
      const offset = 60; // Adjust this value according to your layout

      // Scroll to the target element with smooth behavior
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
    setLinkActive(linkId);
  };

  return (
    <>
      <div className="new-layout">
        <div className="new-notification-topbar">
          <p className="mb-0 text-center">
            💫 Big news! We just launched Stellar 3.0!{" "}
          </p>
          <span>
            <a href="">
              see what's new <img src={ArrowRight} alt="arrow-right" />
            </a>
          </span>
        </div>
        <Header linkActive={linkActive} />
        <section className="new-hero">
          <img src={HeroGlow} alt="" className="hero-glow" />
          <h1 className="new-app-h1">
            The <span>Fastest</span> automation
            <br /> checkout software.
          </h1>
          <p>
            Stellar handles the checkout process for you, ensuring you get{" "}
            <br /> the products you want before anyone else.
          </p>
          <Button
            onClick={pushJoinWaitlist}
            className="new-gradient-button new-hero-btn"
          >
            <Lock />
            <p className="mb-0">7 days trial</p>
            <RightArrowSmSvg />
          </Button>
          <div className="new-hero-img">
            <img src={HeroImg} alt="hero" />
          </div>

          <div className="new-what-is-stella">
            <Button>What is Stellar?</Button>
            <h2>Intuitive automation for maximized profits.</h2>
            <p>
              An intuitive and efficient UI/UX that allows for streamlined task{" "}
              <br /> creation and faster checkouts.
            </p>
            <div
              onClick={() => {
                linkClicked("new-whats-new");
              }}
              className="new-scroll-to-view"
            >
              <ScrollSmSvg />
              <p>Scroll to view more</p>
            </div>
          </div>
        </section>
        <div className="new-l">
          <section className="new-whats-new" id="new-whats-new">
            <p className="new-top-of-line new-section-top-heading">
              TOP OF THE LINE FEATURES
            </p>
            <h2>
              What's new in <span>3.0</span> <img src={ArrowRight} alt="" />
            </h2>
            <p>
              An intuitive and efficient UI/UX that allows for streamlined task
              creation and faster checkouts.
            </p>
            <div className="new-whats-new-shortcuts">
              <Row>
                <Col md={6}>
                  <div className="new-whats-new-shortcuts-left">
                    <img src={Command} alt="" className="new-command-icon" />
                    <img src={Command2} alt="" className="new-command-icon-2" />
                    <h3>shortcuts + Command Search</h3>
                    <p>
                      Design better and spend less time without restricting
                      creative freedom.
                    </p>
                    <p>
                      Use a set of text and color styles, customize and apply
                      changes to all pages at once. Create a unique look in just
                      a few minutes.
                    </p>
                    <Button className="new-learn-more-btn">
                      Learn more <TailIconSvg />
                    </Button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="new-whats-new-shortcuts-right">
                    <img
                      src={Frame1}
                      alt=""
                      className="new-whats-new-frame-1"
                    />
                    <img
                      src={Frame2}
                      alt=""
                      className="new-whats-new-frame-2"
                    />
                    <img
                      src={WhatsNewTopRightGlow}
                      alt=""
                      className="whats-new-top-right-glow"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="new-whats-new-middle">
              <Row>
                <Col md={5}>
                  <div className="new-whats-new-middle-left">
                    <img src={RealTime} alt="" className="new-command-icon" />
                    <img src={Command2} alt="" className="new-command-icon-2" />
                    <h3>Real-Time Monitor Feeds</h3>
                    <p>
                      Design better and spend less time without restricting
                      creative freedom.
                    </p>
                    <p>
                      Use a set of text and color styles, customize and apply
                      changes to all pages at once. Create a unique look in just
                      a few minutes.
                    </p>
                    <Button className="new-learn-more-btn">
                      Learn more <TailIconSvg />
                    </Button>
                    <div className="new-whats-new-table-img">
                      <img src={WhatsNewTable} alt="" />
                    </div>
                    <img
                      src={WhatsNewMiddleLeftGlow}
                      alt=""
                      className="whats-new-middle-left-glow"
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <div className="new-whats-new-middle-right">
                    <img
                      src={NewImproved}
                      alt=""
                      className="new-command-icon"
                    />
                    <img src={Command2} alt="" className="new-command-icon-2" />
                    <h3>New & Improved Automation Flow</h3>
                    <p>
                      Design better and spend less time without restricting
                      creative freedom.
                    </p>
                    <p>
                      Use a set of text and color styles, customize and apply
                      changes to all pages at once. Create a unique look in just
                      a few minutes.
                    </p>
                    <Button className="new-learn-more-btn">
                      Learn more <TailIconSvg />
                    </Button>
                    <div className="new-whats-new-table-img-right">
                      <img src={WhatsNewTable2} alt="" />
                    </div>
                    <img
                      src={WhatsNewMiddleRightGlow}
                      alt=""
                      className="what-new-middle-right-glow"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="new-whats-new-bottom">
              <Row>
                <Col md={4}>
                  <div className="new-whats-new-bottom-1">
                    <img
                      src={Accessibility}
                      alt=""
                      className="new-command-icon"
                    />
                    <h3>Accessibility Support</h3>
                    <p>
                      Added support for 25+ languages, high-contrast modes, and
                      more.
                    </p>
                    <p>Learn more</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="new-whats-new-bottom-2">
                    <img src={Redesigned} alt="" className="new-command-icon" />
                    <h3>Redesigned from scratch</h3>
                    <p>
                      Design better and spend less time without restricting
                      creative freedom.
                    </p>
                    <p>Learn more</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="new-whats-new-bottom-3">
                    <img src={MuchMore} alt="" className="new-command-icon" />
                    <h3>+ much more</h3>
                    <p>
                      Design better and spend less time without restricting
                      creative freedom.
                    </p>
                    <p>Learn more</p>
                  </div>
                </Col>
              </Row>
            </div>
          </section>

          <section className="new-streamline" id="new-features">
            <div className="new-streamline-top-icon">
              <img src={StreamlineIcon} alt="" />
              <img
                src={FeaturesBigblur}
                alt=""
                className="features-big-blur-glow"
              />
            </div>
            <p className="new-top-of-line new-section-top-heading text-center">
              TOP OF THE LINE FEATURES
            </p>
            <h2 className="text-center">
              Streamline Your Reselling Experience
            </h2>
            <p className="text-center new-streamline-p-top">
              An intuitive and efficient UI/UX that allows for streamlined task{" "}
              <br /> creation and faster checkouts.
            </p>
            <div className="new-streamline-top">
              <Row>
                <Col md={8}>
                  <div className="new-streamline-left">
                    <h3>User-Friendly Interface</h3>
                    <p>
                      With a user-friendly interface, you can set up your
                      automation in just a few clicks. Just a simple, intuitive
                      software that lets you automate your purchasing process
                      and get the items you want.
                    </p>
                    <img src={Strealine1} alt="" />
                    <img
                      src={FeaturesTopLeftGlow}
                      alt=""
                      className="features-top-left-glow"
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="new-streamline-right">
                    <h3>100+ Supported Sites</h3>
                    <p>
                      We support hundreds of retailers for you to obtain the
                      latest sneakers, electronics, cards, or collectibles.
                    </p>
                    <img src={Strealine2} alt="" />
                    <img
                      src={FeaturesTopRightGlow}
                      alt=""
                      className="features-top-right-glow"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="new-streamline-Bottom">
              <Row>
                <Col md={4}>
                  <div className="new-streamline-bottom-left">
                    <h3>24/7 Support</h3>
                    <p>
                      With our 24/7 support, you can rest easy knowing that help
                      is always just a click <br /> or phone call away.
                    </p>
                    <img src={Strealine3} alt="" />
                    <img
                      src={FeaturesBottomLeftGlow}
                      alt=""
                      className="features-bottom-left-glow"
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="new-streamline-bottom-right">
                    <h3>Performance Analytics</h3>
                    <p>
                      You'll have a comprehensive view of your automation
                      activity, allowing you to make data-driven decisions and
                      get even better results. Why settle for a basic automation
                      tool when you can have a powerful performance analytics
                      platform as well?
                    </p>
                    <img src={Strealine4} alt="" />
                    <img
                      src={FeaturesBottomRightGlow}
                      alt=""
                      className="features-bottom-right-glow"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </section>

          <section className="new-c-a-d" id="new-sites">
            <div className="new-streamline-top-icon">
              <img src={HowItWorks} alt="" />
            </div>
            <p className="new-top-of-line new-section-top-heading text-center">
              HOW DOES IT WORK?
            </p>
            <h2 className="text-center">Create. Automate. Dominate</h2>
            <p className="text-center new-c-a-d-p-top">
              An intuitive and efficient UI/UX that allows for streamlined task{" "}
              <br /> creation and faster checkouts.
            </p>

            <div className="new-c-a-d-content">
              <Row>
                <Col md={6} sm={12}>
                  <div className="new-cad-content-left">
                    <div className="new-cad-step-num">
                      <div
                        onClick={() => {
                          setActiveCad(0);
                        }}
                        className={`new-step-1 ${
                          activeCad === 0 ? "new-step-active" : ""
                        }`}
                      >
                        <span>1</span>Create
                      </div>

                      <div className="new-step-line"> </div>

                      <div
                        onClick={() => {
                          setActiveCad(1);
                        }}
                        className={`new-step-2 ${
                          activeCad === 1 ? "new-step-active" : ""
                        }`}
                      >
                        <span>2</span>Automate
                      </div>

                      <div className="new-step-line"> </div>

                      <div
                        onClick={() => {
                          setActiveCad(2);
                        }}
                        className={`new-step-3 ${
                          activeCad === 2 ? "new-step-active" : ""
                        }`}
                      >
                        <span>3</span>Dominate
                      </div>
                    </div>
                    <div className="new-cad-step-item-1">
                      <h3>{cadContent[activeCad].h2}</h3>
                      <p>{cadContent[activeCad].p1}</p>
                      <p>{cadContent[activeCad].p2}</p>

                      <div className="new-cad-step-nav">
                        <TabNavLeft
                          fill={activeCad > 0 ? "#FFFFFF" : "#D7DFEF"}
                          onClick={onCadBack}
                        />
                        <TabNavRight
                          fill={activeCad < 2 ? "#FFFFFF" : "#D7DFEF"}
                          onClick={onCadNext}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="new-cad-content-right">
                    <div className="new-cad-step-item-1-img">
                      <img src={cadContent[activeCad].img} alt="" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>

          <section className="new-our-blog">
            <p className="new-top-of-line new-section-top-heading mb-0">
              STELLAR BLOG
            </p>
            <h2>Our blogs</h2>
            <p>
              An intuitive and efficient UI/UX that allows for streamlined task{" "}
              <br /> creation and faster checkouts.{" "}
              <span
                onClick={() => {
                  pushToBlog();
                }}
              >
                View All <ViewAllArrow />
              </span>
            </p>
            <div className="new-our-blog-bottom">
              <Row>
                <Col md={8}>
                  <div
                    onClick={() => {
                      pushToBlog("/amazon-buy-bot");
                    }}
                    className="new-our-blog-bottom-left"
                  >
                    <div className="new-our-blog-bottom-left-top">
                      <h3>
                        Amazon Buy Bot: What to Consider Before Getting One:
                      </h3>
                      <p>
                        12/25/2012 <br />
                        Written by StellarAIO
                      </p>
                    </div>
                    <Button className="new-learn-more-btn">
                      5-min read <TailIconSvg />
                    </Button>
                    <img src={Amazon} alt="" />
                    <img
                      src={BlogLeftGlow}
                      alt=""
                      className="our-blog-left-glow"
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="new-our-blog-bottom-right-container">
                    <div
                      onClick={() => {
                        pushToBlog("/getting-profitable-leads-on-amazon-fba");
                      }}
                      className="new-our-blog-bottom-right"
                    >
                      <h3>
                        How to get Profitable leads on Amazon FBA — A Stellar
                        Guide
                      </h3>
                      <Button className="new-learn-more-btn">
                        5-min read <TailIconSvg />
                      </Button>
                    </div>
                    <div
                      onClick={() => {
                        pushToBlog("/how-to-set-up-a-sneaker-bot");
                      }}
                      className="new-our-blog-bottom-right"
                    >
                      <h3>
                        How To Set Up A Sneaker Bot For A Release
                        (Easy-To-Follow Guide)
                      </h3>
                      <Button className="new-learn-more-btn">
                        5-min read <TailIconSvg />
                      </Button>
                      <img
                        src={BlogBottomRightGlow}
                        alt=""
                        className="blog-bottom-right-glow"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>

          <section className="new-testimonials">
            <p className="new-top-of-line new-section-top-heading">
              TOP OF THE LINE FEATURES
            </p>
            <h2>What Others Are Saying</h2>
            <p>
              An intuitive and efficient UI/UX that allows for streamlined task
              creation <br /> and faster checkouts.
            </p>
            <div className="new-testimonials-items">
              <div className="new-testimonial-item">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi1} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Martin Donnavan</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  I never thought I'd be able to get my hands on the latest
                  drops, but with Stellar, I was finally able to snag them!
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi2} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Sage Knovo</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  As a collector, I'm always on the lookout for rare and coveted
                  items. This software has been a game-changer for me - it's
                  helped me secure some of the most sought-after collectibles
                  and electronics out there. Highly recommend!
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOff} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi3} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>King Glovor</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  I was skeptical about using automation software at first, but
                  after giving it a try, I'm a believer. I've been able to
                  consistently purchase limited-edition sneakers without the
                  hassle of constantly refreshing websites. It's saved me so
                  much time and frustration.
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item new-translate-up-40px">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi4} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Sammy Pringe</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  As a collector, I'm always on the lookout for rare and coveted
                  items. This software has been a game-changer for me - it's
                  helped me secure some of the most sought-after collectibles
                  and electronics out there. Highly recommend!
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi5} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Holmes Posieder</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  I was skeptical about using automation software at first, but
                  after giving it a try, I'm a believer. I've been able to
                  consistently purchase limited-edition sneakers without the
                  hassle of constantly refreshing websites. It's saved me so
                  much time and frustration.
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item new-translate-down-20px">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi6} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Bridget Knowles</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  I never thought I'd be able to get my hands on the latest
                  drops, but with Stellar, I was finally able to snag them!
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item new-translate-up-30px">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi7} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Kheck Nornasvzski</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  I've been using this software for a few months now and I've
                  been able to purchase sneakers that I never would have been
                  able to get otherwise. The software is reliable and easy to
                  use, and the customer support team is always available to help
                  with any questions.
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item new-translate-down-20px">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi8} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Star Line Ranger</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  I've been using this software for a few months now and I've
                  been able to purchase sneakers that I never would have been
                  able to get otherwise. The software is reliable and easy to
                  use, and the customer support team is always available to help
                  with any questions.
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
              <div className="new-testimonial-item new-translate-up-20px">
                <div className="new-testimonial-top">
                  <div className="new-testimonial-avi">
                    <img src={NewAvi9} />
                  </div>
                  <div className="new-testimonial-user-details">
                    <h4>Harry Gains</h4>
                    <p>Member since 4/12/2023</p>
                  </div>
                </div>
                <p className="new-testimonial-details">
                  I've been using this software for a few months now and I've
                  been able to purchase sneakers that I never would have been
                  able to get otherwise. The software is reliable and easy to
                  use, and the customer support team is always available to help
                  with any questions.
                </p>
                <div className="new-testimonial-bottom">
                  <div className="new-testimonial-review">
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <img src={StarOn} alt="" />
                    <p className="mb-0">5/5</p>
                  </div>
                  <p className="new-testimonial-review-date mb-0">
                    Reviewed 02/14
                  </p>
                </div>
              </div>
            </div>

            <Button className="new-testimonial-view-more-btn new-gradient-button">
              View More
            </Button>
          </section>

          <section className="new-faq" id="new-faq">
            <Row>
              <Col md={5}>
                <div className="faq-left">
                  <p className="new-top-of-line new-section-top-heading">
                    TOP OF THE LINE FEATURES
                  </p>
                  <h2>FAQs</h2>
                  <p>
                    An intuitive and efficient UI/UX that allows for streamlined
                    task creation and faster <br /> checkouts.
                  </p>
                  <img src={FaqGlow} alt="" className="faq-left-glow" />
                </div>
              </Col>
              <Col md={7}>
                {faq ? (
                  <div className="faq__faqs">
                    {faq.faq_question_1 ? (
                      <div
                        className={`new-faq__faqs--item ${
                          isOpenFaq1 ? "new-faq-active" : ""
                        }`}
                      >
                        <h6
                          className="d-flex align-items-center justify-content-between"
                          onClick={() => {
                            setIsOpenFaq1(!isOpenFaq1);
                          }}
                        >
                          {faq.faq_question_1}
                          {/* {!isOpenFaq1 && <span>+</span> }
                {isOpenFaq1 && <span>-</span> } */}
                          <NewFaqArrow active={isOpenFaq1} />
                        </h6>
                        <Collapse isOpen={isOpenFaq1}>
                          <div className="">
                            <p>{faq.faq_answer_1}</p>
                          </div>
                        </Collapse>
                      </div>
                    ) : (
                      <></>
                    )}

                    {faq.faq_question_2 ? (
                      <div
                        className={`new-faq__faqs--item ${
                          isOpenFaq2 ? "new-faq-active" : ""
                        }`}
                      >
                        <h6
                          className="d-flex align-items-center justify-content-between"
                          onClick={() => {
                            setIsOpenFaq2(!isOpenFaq2);
                          }}
                        >
                          {faq.faq_question_2}
                          {/* {!isOpenFaq2 && <span>+</span> }
                {isOpenFaq2 && <span>-</span> } */}
                          <NewFaqArrow active={isOpenFaq2} />
                        </h6>
                        <Collapse isOpen={isOpenFaq2}>
                          <div className="">
                            <p>{faq.faq_answer_2}</p>
                          </div>
                        </Collapse>
                      </div>
                    ) : (
                      <></>
                    )}

                    {faq.faq_question_3 ? (
                      <div
                        className={`new-faq__faqs--item ${
                          isOpenFaq3 ? "new-faq-active" : ""
                        }`}
                      >
                        <h6
                          className="d-flex align-items-center justify-content-between"
                          onClick={() => {
                            setIsOpenFaq3(!isOpenFaq3);
                          }}
                        >
                          {faq.faq_question_3}
                          {/* {!isOpenFaq3 && <span>+</span> }
                {isOpenFaq3 && <span>-</span> } */}
                          <NewFaqArrow active={isOpenFaq1} />
                        </h6>
                        <Collapse isOpen={isOpenFaq3}>
                          <div className="">
                            <p>{faq.faq_answer_3}</p>
                          </div>
                        </Collapse>
                      </div>
                    ) : (
                      <></>
                    )}

                    {faq.faq_question_4 ? (
                      <div
                        className={`new-faq__faqs--item ${
                          isOpenFaq4 ? "new-faq-active" : ""
                        }`}
                      >
                        <h6
                          className="d-flex align-items-center justify-content-between"
                          onClick={() => {
                            setIsOpenFaq4(!isOpenFaq4);
                          }}
                        >
                          {faq.faq_question_4}
                          {/* {!isOpenFaq4 && <span>+</span> }
                {isOpenFaq4 && <span>-</span> } */}
                          <NewFaqArrow active={isOpenFaq4} />
                        </h6>
                        <Collapse isOpen={isOpenFaq4}>
                          <div className="">
                            <p>{faq.faq_answer_4}</p>
                          </div>
                        </Collapse>
                      </div>
                    ) : (
                      <></>
                    )}

                    {faq.faq_question_5 ? (
                      <div
                        className={`new-faq__faqs--item ${
                          isOpenFaq5 ? "new-faq-active" : ""
                        }`}
                      >
                        <h6
                          className="d-flex align-items-center justify-content-between"
                          onClick={() => {
                            setIsOpenFaq5(!isOpenFaq5);
                          }}
                        >
                          {faq.faq_question_5}
                          {/* {!isOpenFaq5 && <span>+</span> }
                {isOpenFaq5 && <span>-</span> } */}
                          <NewFaqArrow active={isOpenFaq5} />
                        </h6>
                        <Collapse isOpen={isOpenFaq5}>
                          <div className="">
                            <p>{faq.faq_answer_5}</p>
                          </div>
                        </Collapse>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div className="new-faq__faqs">
                    <div
                      className={`new-faq__faqs--item ${
                        isOpenFaq1 ? "new-faq-active" : ""
                      }`}
                    >
                      <h6
                        className="d-flex align-items-center justify-content-between"
                        onClick={() => {
                          setIsOpenFaq1(!isOpenFaq1);
                        }}
                      >
                        How much does Stellar AIO cost?
                        {/* {!isOpenFaq1 && <span>+</span> }
                {isOpenFaq1 && <span>-</span> } */}
                        <NewFaqArrow active={isOpenFaq1} />
                      </h6>
                      <Collapse isOpen={isOpenFaq1}>
                        <div className="">
                          <p>
                            The initial price for Stellar AIO is $300 and comes
                            with 30 days of free updates. The monthly renewal
                            fee is $30.
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className={`new-faq__faqs--item ${
                        isOpenFaq2 ? "new-faq-active" : ""
                      }`}
                    >
                      <h6
                        className="d-flex align-items-center justify-content-between"
                        onClick={() => {
                          setIsOpenFaq2(!isOpenFaq2);
                        }}
                      >
                        What sites do you currently support?
                        {/* {!isOpenFaq2 && <span>+</span> }
                {isOpenFaq2 && <span>-</span> } */}
                        <NewFaqArrow active={isOpenFaq2} />
                      </h6>
                      <Collapse isOpen={isOpenFaq2}>
                        <div className="">
                          <p>
                            Stellar AIO supports over 50 websites. Our most
                            popular site modules include Amazon, Walmart,
                            Target, Best Buy, The Home Depot, Academy, Pokémon
                            Center, Fanatics, Topps, Panini, GameStop, BH Photo,
                            Newegg, Converse, Dick Sporting Goods, Footlocker,
                            FLX Raffles, SSense, Yeezy Supply, and all Shopify
                            sites (Kith, Undefeated, and Shop Nice Kicks).
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className={`new-faq__faqs--item ${
                        isOpenFaq3 ? "new-faq-active" : ""
                      }`}
                    >
                      <h6
                        className="d-flex align-items-center justify-content-between"
                        onClick={() => {
                          setIsOpenFaq3(!isOpenFaq3);
                        }}
                      >
                        What software system does Stellar work on?
                        {/* {!isOpenFaq3 && <span>+</span> }
                {isOpenFaq3 && <span>-</span> } */}
                        <NewFaqArrow active={isOpenFaq3} />
                      </h6>
                      <Collapse isOpen={isOpenFaq3}>
                        <div className="">
                          <p>Stellar AIO can be used on Windows and MacOS.</p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className={`new-faq__faqs--item ${
                        isOpenFaq4 ? "new-faq-active" : ""
                      }`}
                    >
                      <h6
                        className="d-flex align-items-center justify-content-between"
                        onClick={() => {
                          setIsOpenFaq4(!isOpenFaq4);
                        }}
                      >
                        What regions do you currently support?
                        {/* {!isOpenFaq4 && <span>+</span> }
                {isOpenFaq4 && <span>-</span> } */}
                        <NewFaqArrow active={isOpenFaq4} />
                      </h6>
                      <Collapse isOpen={isOpenFaq4}>
                        <div className="">
                          <p>
                            Stellar AIO's supported site regions include the
                            United States, Japan, and Canada. We plan on adding
                            EU and UK sites in the future.
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className={`new-faq__faqs--item ${
                        isOpenFaq5 ? "new-faq-active" : ""
                      }`}
                    >
                      <h6
                        className="d-flex align-items-center justify-content-between"
                        onClick={() => {
                          setIsOpenFaq5(!isOpenFaq5);
                        }}
                      >
                        I want to purchase StellarAIO. When is your next
                        restock?
                        {/* {!isOpenFaq5 && <span>+</span> }
                {isOpenFaq5 && <span>-</span> } */}
                        <NewFaqArrow active={isOpenFaq5} />
                      </h6>
                      <Collapse isOpen={isOpenFaq5}>
                        <div className="">
                          <p>
                            We currently have no planned restocks or group buys.
                            We recommend that you join our waitlist and follow
                            us on Twitter to stay up to date!
                          </p>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </section>

          <section className="new-by-numbers">
            <p className="new-top-of-line new-section-top-heading text-center my-0">
              by the numbers
            </p>
            <h2 className="text-center">
              Join a user-base of 1 million <br /> succesful checkouts.
            </h2>
            <p className="text-center my-20px new-by-numbers-p">
              An intuitive and efficient UI/UX that allows for streamlined task{" "}
              <br /> creation and faster checkouts.
            </p>
            <Button
              onClick={pushJoinWaitlist}
              className="new-gradient-button new-hero-btn"
            >
              <Lock />
              <p className="mb-0">7 days trial</p>
              <RightArrowSmSvg />
            </Button>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default index;
