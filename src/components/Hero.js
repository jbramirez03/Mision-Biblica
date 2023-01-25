import React from 'react'
import homeImg from '../images/home.jpg'
import Home from '../components/Home'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={homeImg} alt="Home image" className='hero__img' />
            <Home />
        </div>
    )
}

export default Hero