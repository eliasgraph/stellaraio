import React, { useState } from "react";
import CardGradient from "./CardGradient";
import { useRouter } from "next/router";
import glowringsm from "../../assets/imgs/Path 6.png";
import Buttons from "./Buttons";
function SkipToFrontCard({ h2, p, onSubmit }) {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [emailError, setEmailError] = useState(false);
  const [emailLoding, setEmailLoading] = useState(false);
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
    <>
      <CardGradient overflow={"hidden"} height={"32.7rem"}>
        <div className="skip-to-front-div px-3">
          {h2 && <h2 className="app-h2 text-center mb-20px"> {h2}</h2>}
          {p && <p className="text-center mb-30px">{p}</p>}
          {/* <div className="skip-to-front-input-wrapper">
              <input type="email" placeholder='Enter your Email'/>
              <Buttons text={"Be First in Line"} className="d-block mx-auto" border={"none"} width={"17.7rem"} zIndex={1}/>
              <img className='skip-glowring' src={glowringsm} alt="" />
            </div> */}
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
              {/* <div class="_form_element _x16931030 _full_width " >
                    <label for="email" class="_form-label">
                      Email*
                    </label>
                    <div class="_field-wrapper">
                      <input type="text" id="email" name="email" placeholder="Type your email" required/>
                    </div>
                  </div> */}
              {/* <div class="_button-wrapper _full_width">
                    <button id="_form_1_submit" className="_submit" type="submit">
                      Submit
                    </button>
                  </div> */}
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
    </>
  );
}

export default SkipToFrontCard;
