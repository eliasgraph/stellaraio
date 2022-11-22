import React from 'react'
import check from '../../assets/imgs/products/check.png'

function ProductPlans({msrp=false}) {
  return (
    <>
      <div className="product-plans">
        <h2 className="app-h2 text-center">Never <span>pay resale</span> on Cards or Collectibles <br /> ever again.</h2>

        <div className="product-plans-plans d-flex">
          
          <a href='https://account.stellaraio.com/stellaraio?checkout=true&directPlanIdplan_fzdpIxLQSRBQL' target={'_blank'} rel="noreferrer" className="p-plan p-plan-2 d-block">
            <div className="p-plan-content">
              <div className="p-plan-top">
                <h3 className="app-h3 mb-20px">Quarterly</h3>
                <p className='d-flex align-items-center gap-2'><span>149</span>per year</p>
              </div>

              <div className='p-plan-check'>Retail Software<img src={check} alt="check" /></div>
              <div className='p-plan-check'>Retail Sites<img src={check} alt="check" /></div>
              <div className='p-plan-check'>Sneakers Sites<img src={check} alt="check" /></div>
              <div className='p-plan-check'>Unlimited Tasks<img src={check} alt="check" /></div>
              <div className='p-plan-check'>3 Months<img src={check} alt="check" /></div>

              

              <button>Choose Plan</button>
            </div>
            

          </a>
          <a href='https://account.stellaraio.com/stellaraio?checkout=true&directPlanId=plan_Y22l5R4VK1aBQ' target={'_blank'} rel="noreferrer" className="p-plan p-plan-3 p-plan-active d-block">
            <div className="p-plan-badge">Most Popular</div>
            <div className="p-plan-content">
              <div className="p-plan-top">
                <h3 className="app-h3 ">Premium</h3>
                <p className='d-flex align-items-center gap-2'><span>499</span> per year</p>
              </div>

              <div className='p-plan-check'>Retail Software<img src={check} alt="check" /></div>
              <div className='p-plan-check'>Retail Sites<img src={check} alt="check" /></div>
              <div className='p-plan-check'>Sneakers Sites<img src={check} alt="check" /></div>
              <div className='p-plan-check'>Unlimited Tasks<img src={check} alt="check" /></div>
              <div className='p-plan-check'>6 Months<img src={check} alt="check" /></div>

            

              <button>Choose Plan</button>

            </div>

          </a>
          <a href='https://account.stellaraio.com/stellaraio?checkout=true&directPlanId=plan_3KO63fE24depc' target={'_blank'} rel="noreferrer" className="p-plan p-plan-4 d-block">
          <div className="p-plan-badge">Best Value</div>
            <div className="p-plan-content">
              <div className="p-plan-top">
                <h3 className="app-h3 mb-20px">Starter</h3>
                <p className='d-flex align-items-center gap-2'><span>999</span>per year</p>
              </div>

              <div className='p-plan-check'>Retail Software<img src={check} alt="check" /></div>
                <div className='p-plan-check'>Retail Sites<img src={check} alt="check" /></div>
                <div className='p-plan-check'>Sneakers Sites<img src={check} alt="check" /></div>
                <div className='p-plan-check'>Unlimited Tasks<img src={check} alt="check" /></div>
                <div className='p-plan-check'>Unlimited<img src={check} alt="check" /></div>


              <button>Choose Plan</button>
            </div>

          </a>
          
        </div>

        { msrp && <p className='text-center'>How much would you pay to get the cards you want, at MSRP, every time?</p> }
      </div>
    </>
  )
}

export default ProductPlans