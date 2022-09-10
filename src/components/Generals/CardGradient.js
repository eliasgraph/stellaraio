import React from 'react'
import {Card} from 'reactstrap'

function CardGradient({
  children,
  height,
  className,
  overflow,
  borderRadius = "20px"
}) {
  return (
    <>
      <Card 
        style={{
          minHeight: height,
          borderRadius,
          overflow: overflow ? 'hidden' : 'visible'
        }}
        className= {className ? className : 'card-gradient'}
      >
        {children}
      </Card>
    </>
  )
}
export default CardGradient