import React from 'react'
import {Button} from 'reactstrap'

function Buttons(
  { 
  color = '#DBDCEC',
  background = '#650AC5',
  width,
  maxWidth,
  height="4rem",
  text,
  boxShadow = '0px 3px 16px 1px rgba(0,0,0,0.2)',
  borderRadius = '4px',
  fontSize = '1.6rem',
  border='none',
  zIndex,
  className,
  clicked = () =>{}
}
) {
  return (
    <Button 
      className={className}
      style={{
      width,
      maxWidth,
      height,
      backgroundColor: background,
      color,
      boxShadow,
      borderRadius,
      border,
      fontSize,
      zIndex
    }} 
    onClick={clicked}
    >{text}</Button>
  )
}

export default Buttons
