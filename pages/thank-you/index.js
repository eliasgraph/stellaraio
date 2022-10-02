import CardGradient from '../../components/Generals/CardGradient'
import tank from '../../assets/imgs/thankyou/Mockupss 1.png'
import glowring from '../../assets/imgs/Path 5.png'

function ThankYou() {
  return (
    <>
      <section className="thank-you">
        <CardGradient>
          <div className="thank-you-wrapper">
            <h1 className='text-center'>Thank you for taking interest in <br /> <span className="color-purple-2">Stellar AIO.</span></h1>
            <p className="text-center">You will receive an email if you are selected.</p>

            <div className="thank-you-img">
              <img className='thank-img' src={tank} alt="" />
              <img className='thank-glowring-1' src={glowring} alt="" />
              <img className='thank-glowring-2' src={glowring} alt="" />
              <img className='thank-glowring-3' src={glowring} alt="" />
            </div>
          </div>

        </CardGradient>
      </section>
    </>
  )
}

export default ThankYou