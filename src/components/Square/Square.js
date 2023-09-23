import React from 'react'

const Square = (props) => {
  return (
    <button 
      className='square-styles'
      onClick={props.onClickEvent}
      >
      {props.value}
    </button>
  )
}

export default Square