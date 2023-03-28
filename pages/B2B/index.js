import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import CardGradient from "../../components/Generals/CardGradient";
import { Row, Col } from "reactstrap";
import Hero from "../../assets/imgs/B2B/hero.png";
import Robot from "../../assets/imgs/B2B/robot.png";
import Dollar from "../../assets/imgs/B2B/dollar.png";
import Clock from "../../assets/imgs/B2B/clock.png";
import Setting from "../../assets/imgs/B2B/setting.png";
import Cog from "../../assets/imgs/B2B/cogs.png";
import BoxPink from "../../assets/imgs/B2B/boxpink1.png";
import BoxBlue from "../../assets/imgs/B2B/boxblue1.png";
import Ellipse from "../../assets/imgs/B2B/ellipse.png";
import Buttons from "../../components/Generals/Buttons";
import glowrngsm from "../../assets/imgs/B2B/glwrinsm.png";
import glowbg from "../../assets/imgs/B2B/Path 5.png";
import glowbig from "../../assets/imgs/B2B/Path 6.png";
import glowbigest from "../../assets/imgs/B2B/Ellipse 124.png";
import Logo from "../../assets/imgs/favicon.png";

function index() {
  const [state, handleSubmit] = useForm("xbjezjre", {
    data: {
      subject: "B2B Contact Form",
    },
  });
  return (
    <div className="b2b">
      {" "}
      <section>
        <CardGradient className="b2b-hero-card">
          <Row>
            <Col md={5} sm={12}>
              <div className="b2b-hero-left">
                <h2 className="app-h2 mb-20px">
                  Revolutionize your <br /> Company’s Workflow <br /> Today.
                </h2>
                <p className="mb-20px">
                  Optimize your Company’s Processes and <br /> Accelerate your
                  Growth Today!
                </p>
                <Buttons text={"Get Started"} width={"177px"} />
              </div>
            </Col>
            <Col md={7} sm={12}>
              <div className="b2b-hero-right">
                <img src={Hero} alt="" className="b2b-hero-img" />
                <img src={Robot} alt="" className="b2b-robot" />
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>
      <section className="b2b-stellar-ad">
        <div className="b2b-stellar-ad-wrapper">
          <div className="b2b-stellar-ad-left">
            <img src={Cog} alt="" />
          </div>
          <div className="b2b-stellar-ad-right">
            <h3 className="mb-20px">
              The <span>Stellar</span> AI
              <img src={Logo} alt="" /> <br /> Advantage
            </h3>
            <p>
              Are you struggling with manual processes, lost time, and
              inefficiencies in your business? Look no further! Stellar AIO
              offers custom automation solutions tailored to your company's’
              unique needs. Our Platform helps you optimize your processes,
              reduce costs, and increase revenue, giving your business the
              competitive edge it needs to succeed.
              <img src={glowbg} alt="" />
            </p>
          </div>
        </div>
      </section>
      <section className="b2b-automation">
        <h2>
          The Power of <span>Automation</span>
        </h2>
        <div className="b2b-automation-wrapper">
          <div className="b2b-automation-item">
            <div className="b2b-auto-item-head d-flex gap-3 align-items-center mb-4">
              <img src={Clock} alt="" />{" "}
              <h3 className="mb-0">Time & Resources Savings</h3>
            </div>
            <p>
              Eliminate manual tasks and human errors, freeing up time and
              resources for more strategic initiatives.
            </p>
          </div>
          <div className="b2b-automation-item">
            <div className="b2b-auto-item-head d-flex gap-3 align-items-center mb-4">
              <img src={Setting} alt="" />{" "}
              <h3 className="mb-0">Improved Emergency</h3>
            </div>
            <p>
              Accelerate your business processes, allowing you to process more
              orders and serve more customers with ease.
            </p>
          </div>
          <div className="b2b-automation-item">
            <div className="b2b-auto-item-head d-flex gap-3 align-items-center mb-4">
              <img src={Dollar} alt="" />{" "}
              <h3 className="mb-0">Increased Revenue</h3>
            </div>
            <p>
              Optimize your operations for faster turnaround time and increased
              customer satisfaction, driving sales and profits.
            </p>
          </div>
        </div>
      </section>
      <section className="b2b-proven-process">
        <h2>
          Our <span>Proven</span> Process
        </h2>
        <div className="b2b-proven-process-wrapper">
          <Row>
            <Col md={6}>
              <div className="b2b-proven-process-item">
                <h3 className="mb-3">
                  Need <br />
                  Assessment
                  <img src={glowrngsm} alt="" />
                </h3>
                <p className="mb-0">
                  We start by understanding your business and its unique
                  challenges, identifying areas where automation can provide the
                  greatest benefits.
                </p>
                <img src={Ellipse} className="b2b-ellipse" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="b2b-proven-process-item">
                <h3 className="mb-3">
                  Need <br />
                  Assessment
                  <img src={glowrngsm} alt="" />
                </h3>
                <p className="mb-0">
                  We start by understanding your business and its unique
                  challenges, identifying areas where automation can provide the
                  greatest benefits.
                </p>
                <img src={Ellipse} className="b2b-ellipse" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="b2b-proven-process-item">
                <h3 className="mb-3">
                  Need <br />
                  Assessment
                  <img src={glowrngsm} alt="" />
                </h3>
                <p className="mb-0">
                  We start by understanding your business and its unique
                  challenges, identifying areas where automation can provide the
                  greatest benefits.
                </p>
                <img src={Ellipse} className="b2b-ellipse" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="b2b-proven-process-item">
                <h3 className="mb-3">
                  Need <br />
                  Assessment
                  <img src={glowrngsm} alt="" />
                </h3>
                <p className="mb-0">
                  We start by understanding your business and its unique
                  challenges, identifying areas where automation can provide the
                  greatest benefits.
                </p>
                <img src={Ellipse} className="b2b-ellipse" alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="mx-auto">
          <Buttons
            text={"Claim Your Free Automation Assessment"}
            width={"364px"}
          />
        </div>
      </section>
      <section className="b2b-success-story">
        <div className="b2b-success-story-top">
          <h2>
            <span>Success</span> Stories
            <img src={glowbigest} alt="" />
          </h2>
          <div className="b2b-success-story-top-wrapper">
            <div className="d-flex justify-content-between inner">
              <p>
                Over <br /> <span>20,000</span> <br /> Total Customers <br />
                Served
              </p>
              <p>
                Over <br /> <span>$1 Billion</span> <br /> Generated for Sellers{" "}
                <br />
                And Resellers
              </p>
            </div>
          </div>
        </div>
        <div className="b2b-success-story-bottom-wrapper">
          <h3 className="mb-20px">
            Our <span>Happy</span> clients are saying that...
          </h3>
          <div className="b2b-success-story-carousel">
            <div className="carousel-nav">{"<"}</div>
            <div className="carousel-div">
              <div className="b2b-carousel-item">
                <p>
                  Stellar’s Automation software completely transformed the way
                  we run our business. Tasks that used to take us hours to
                  complete are now done in a matter of minutes. We can now focus
                  on growing our business instead of getting bogged down in
                  tedious tasks.
                </p>
                <h3>
                  <span>Chengen Rowlings Chan</span>
                </h3>
                <h6>China</h6>
              </div>
              <div className="b2b-carousel-item">
                <p>
                  I was skeptical about the idea of automation, but it's been a
                  game changer for my businesses. It has helped us streamline
                  our processes, reduce errors, and save money on labor costs. I
                  don't know how we managed without it.
                </p>
                <h3>Maryleene Audery</h3>
                <h6>China</h6>
              </div>
            </div>
            <div className="carousel-nav">{">"}</div>
          </div>
        </div>
      </section>
      <section className="b2b-limited-time">
        <div className="b2b-limited-time-wrapper">
          <div className="b2b-limited-time-left">
            <h2>
              Limited-Time <br /> <span>Offer</span>{" "}
            </h2>
            <p>
              To celebrate our success, in helping businesses like yours, we’re
              offering an exclusive partners for new B2B Clients.
            </p>
            <p>
              Don’t miss out on this incredible opportunity to optimize your
              business processes and take your company to new heights.
            </p>
          </div>
          <div className="b2b-limited-time-right">
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxPink} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxBlue} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxBlue} alt="" />
            </div>
            <div className="b2b-limited-time-right-item">
              <img src={BoxBlue} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="b2b-get-started">
        <CardGradient overflow={"hidden"} className="b2b-get-started-card">
          <Row>
            <Col md={6}>
              <div className="b2b-get-started-left">
                <h2 className="app-h2">
                  Get <span>Started</span> Today
                </h2>
                <h3>
                  Ready to unlock the <br /> full potential of your <br />{" "}
                  business?
                </h3>
                <p>
                  Contact us now for free, no-obligation automation assessment
                  and discover how Stellar AIO can revolutionize your
                  operations.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="b2b-get-started-right">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Name"
                      id="name"
                      required
                    />
                    <ValidationError
                      field="name"
                      prefix="Name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Name"
                      name="company"
                      id="company"
                      required
                    />
                    <ValidationError
                      field="company"
                      prefix="Company"
                      errors={state.errors}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Contact Number"
                      name="contact"
                      id="contact"
                      required
                    />
                    <ValidationError
                      field="contact"
                      prefix="Contact"
                      errors={state.errors}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="email"
                      id="email"
                      required
                    />
                    <ValidationError
                      field="email"
                      prefix="Email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">How can we help you</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Message"
                      rows={4}
                      name="message"
                      id="message"
                      required
                    ></textarea>
                    <ValidationError
                      field="message"
                      prefix="Message"
                      errors={state.errors}
                    />
                    <ValidationError
                      field="message"
                      prefix="Message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mx-auto b2b-action">
                    <Buttons
                      type={"submit"}
                      text={"Submit"}
                      width={"177px"}
                      disabled={state.submitting}
                    />
                    <img src={glowbig} alt="" />
                  </div>
                </form>
                <img src={glowbg} alt="" />
              </div>
            </Col>
          </Row>
        </CardGradient>
      </section>
    </div>
  );
}

export default index;
