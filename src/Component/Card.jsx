import React from 'react'
import "./Card.css";
function Card() {
  return (
    <div className='Card-container'>
        <img className='Card-img' src='photo.png.avif' alt='Card-Image' />
        <h1 className='Card-title'>Butterfly</h1>
        <p className='Card-description'>Butterfly have four wings which are brightly coloured and patterned.
             Butterfly wings are covered in tiny scales and they are the only insects with scaly wings. 
             Each scale on a butterflies wings are a single colour, either red, yellow, black or white.</p>
        <a className='Card-btn' href='CardPage'>Learn More</a>
    </div>
  )
}

export default Card;