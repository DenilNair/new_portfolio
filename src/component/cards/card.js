import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div><div className='card'>
        <div><img className='image' src={props.passedImage} alt='project1'/></div>
        <div className='card-data'></div></div></div>
  )
}

export default Card