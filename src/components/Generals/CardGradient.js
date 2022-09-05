import React from 'react'
import {Card} from 'reactstrap'

function CardGradient({
  children,
  height,
  className,
  borderRadius = "20px"
}) {
  return (
    <>
      <Card 
        style={{
          minHeight: height,
          borderRadius,
          overflow: 'hidden'
        }}
        className= {className ? className : 'card-gradient'}
      >
        {children}
      </Card>
    </>
  )
}
export default CardGradient