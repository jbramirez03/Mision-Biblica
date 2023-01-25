import React from 'react'
import homeImg from '../images/home.jpg'

const Home = () => {
    return (
        <div className='hero'>
            <img src={homeImg} alt="Home image" className='hero__img' />
            <div className="welcome__container">
                <h1 className="welcome__title"></h1>
                <h2 className="welcome__subtitle"></h2>
            </div>
        </div>
    )
}

export default Home