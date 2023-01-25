import React from 'react'
import homeImg from '../images/home.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={homeImg} alt="Home image" className='hero__img' />
        </div>
    )
}

export default Hero