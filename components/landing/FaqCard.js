import { useState } from 'react'
import { Collapse} from 'reactstrap'
import CardGradient from '../Generals/CardGradient'

function FaqCard({faq}) {
  const [isOpenFaq1, setIsOpenFaq1] = useState(false)
  const [isOpenFaq2, setIsOpenFaq2] = useState(false)
  const [isOpenFaq3, setIsOpenFaq3] = useState(false)
  const [isOpenFaq4, setIsOpenFaq4] = useState(false)
  const [isOpenFaq5, setIsOpenFaq5] = useState(false)
  /* console.log(faq); */
  return (
    <>
      {
       faq ? (
        <CardGradient
          height={'57.5rem'}
          className={'faq__card'}
        >
          <div className="faq__faqs">
            <h3>Frequently Asked Questions.</h3>

            {faq.faq_question_1 ? <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq1(!isOpenFaq1)}}
              >
                {faq.faq_question_1}
                {!isOpenFaq1 && <span>+</span> }
                {isOpenFaq1 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq1}>
                <div className="">
                  <p >
                    {faq.faq_answer_1}
                  </p>
                </div>
              </Collapse>
            </div> : <></>}

            {faq.faq_question_2 ? <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq2(!isOpenFaq2)}}
              >
                {faq.faq_question_2}
                {!isOpenFaq2 && <span>+</span> }
                {isOpenFaq2 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq2}>
                <div className="">
                  <p >
                  {faq.faq_answer_2}
                  </p>
                </div>
              </Collapse>
            </div>: <></>}

            {faq.faq_question_3 ? <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq3(!isOpenFaq3)}}
              >
                {faq.faq_question_3}
                {!isOpenFaq3 && <span>+</span> }
                {isOpenFaq3 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq3}>
                <div className="">
                  <p >
                  {faq.faq_answer_3}
                  </p>
                </div>
              </Collapse>
            </div>: <></>}

            {faq.faq_question_4 ? <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq4(!isOpenFaq4)}}
              >
                {faq.faq_question_4}
                {!isOpenFaq4 && <span>+</span> }
                {isOpenFaq4 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq4}>
                <div className="">
                  <p >
                  {faq.faq_answer_4}
                  </p>
                </div>
              </Collapse>
            </div>: <></>}

            {faq.faq_question_5 ? <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq5(!isOpenFaq5)}}
              >
                {faq.faq_question_5}
                {!isOpenFaq5 && <span>+</span> }
                {isOpenFaq5 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq5}>
                <div className="">
                  <p >
                    {faq.faq_answer_5}
                  </p>
                </div>
              </Collapse>
            </div> : <></>}
          </div>
        </CardGradient>
       ) : (
        <CardGradient
          height={'57.5rem'}
          className={'faq__card'}
        >
          <div className="faq__faqs">
            <h3>Frequently Asked Questions.</h3>

            <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq1(!isOpenFaq1)}}
              >
                How much does Stellar AIO cost?
                {!isOpenFaq1 && <span>+</span> }
                {isOpenFaq1 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq1}>
                <div className="">
                  <p >The initial price for Stellar AIO is $300 and comes with 30 days of free updates. The monthly renewal fee is $30.
                  </p>
                </div>
              </Collapse>
            </div>
            <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq2(!isOpenFaq2)}}
              >
                What sites do you currently support?
                {!isOpenFaq2 && <span>+</span> }
                {isOpenFaq2 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq2}>
                <div className="">
                  <p >Stellar AIO supports over 50 websites. Our most popular site modules include Amazon, Walmart, Target, Best Buy, The Home Depot, Academy, Pokémon Center, Fanatics, Topps, Panini, GameStop, BH Photo, Newegg, Converse, Dick Sporting Goods, Footlocker, FLX Raffles, SSense, Yeezy Supply, and all Shopify sites (Kith, Undefeated, and Shop Nice Kicks).
                  </p>
                </div>
              </Collapse>
            </div>
            <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq3(!isOpenFaq3)}}
              >
                What software system does Stellar work on?
                {!isOpenFaq3 && <span>+</span> }
                {isOpenFaq3 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq3}>
                <div className="">
                  <p >Stellar AIO can be used on Windows and MacOS.
                  </p>
                </div>
              </Collapse>
            </div>
            <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq4(!isOpenFaq4)}}
              >
                What regions do you currently support?
                {!isOpenFaq4 && <span>+</span> }
                {isOpenFaq4 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq4}>
                <div className="">
                  <p >Stellar AIO's supported site regions include the United States, Japan, and Canada. We plan on adding EU and UK sites in the future.
                  </p>
                </div>
              </Collapse>
            </div>
            <div className="faq__faqs--item">
              <h6
                className='d-flex align-items-center justify-content-between'
                onClick={()=>{setIsOpenFaq5(!isOpenFaq5)}}
              >
                I want to purchase StellarAIO. When is your next restock?
                {!isOpenFaq5 && <span>+</span> }
                {isOpenFaq5 && <span>-</span> }

              </h6>
              <Collapse isOpen={isOpenFaq5}>
                <div className="">
                  <p >We currently have no planned restocks or group buys. We recommend that you join our waitlist and follow us on Twitter to stay up to date!
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
        </CardGradient>
       )

      }
    </>
  )
}

export default FaqCard