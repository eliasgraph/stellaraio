import React from 'react'
import CardGradient from './CardGradient'
import Buttons from './Buttons'

function NeedHelp({title, content}) {
  return (
    <>
      <CardGradient height={"28.8rem"} className="need-h-or-s-card1">
        <div className="need-h-or-s-div">
          <h2 className="app-h2 text-center mb-2">{title ? title : 'Need Help or Support?'}</h2>
          <p className='text-center'>{content ? content : 'Got stuck at any step? Our team of experts and passionate community are there to answer your questions and provide you with handheld support 24/7.'}</p>
          <Buttons text={"Visit Support Center"} className="d-block mx-auto" border={"none"} width={"20.7rem"}/>
        </div>
      </CardGradient>
    </>
  )
}

export default NeedHelp