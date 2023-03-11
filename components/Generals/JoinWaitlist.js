import React, { useState } from "react";
import CardGradient from "./CardGradient";
import Buttons from "./Buttons";
import glowringsm from "../../assets/imgs/Path 6.png";
import { useRouter } from "next/router";

function JoinWaitlist({ height = "32.7rem" }) {
  const [email, setEmail] = useState("");
  const [emailLoding, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const router = useRouter();

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
  return (
    <section className="skip-to-front">
      <CardGradient height={height}>
        <div className="skip-to-front-div px-3">
          <h2 className="app-h2 mb-30px text-center">Join the Waitlist</h2>
          <form
            onSubmit={sendEmail}
            method="POST"
            action="https://stellarautomation.activehosted.com/proc.php"
            id="form_9"
            className="_form _form_9 _inline-form  _dark"
            noValidate
          >
            <input type="hidden" name="u" value="9" />
            <input type="hidden" name="f" value="9" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input
              type="hidden"
              name="or"
              value="0734ba72b8be9f78c85dd4bfb81da87f"
            />
            <div className="_form-content">
              <div className="enter-email-div d-flex align-items-start">
                <div className="enter-email-wrapper me-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your Email"
                    className={`text-center form-control ${
                      emailError ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback text-center mt-3">
                    Please provide a valid email address
                  </div>
                </div>
                <div className="gt-access-btn-div">
                  <img
                    className="join-waitlist-glowring"
                    src={glowringsm}
                    alt=""
                  />
                  <Buttons
                    text={"Be First in Line"}
                    loading={emailLoding}
                    className="d-block mx-auto mb-0 position-relative"
                    border={"none"}
                    width={"17.7rem"}
                    zIndex={1}
                  />
                </div>
              </div>
              <div className="_clear-element"></div>
            </div>
            <div className="_form-thank-you" style={{ display: "none" }}></div>
          </form>
        </div>
      </CardGradient>
    </section>
  );
}

export default JoinWaitlist;
