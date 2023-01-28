import React from 'react'
import aboutImg1 from '../images/About.jpg'
import aboutImg2 from '../images/about2.jpg'

const About = () => {
    return (
        <section className='section container about__section' id='about'>
            <h2 className="section__title section__title-center">About</h2>

            <div className="about__content-1">
                <div className="about__information">
                    <h3>David Ruiz, Pastor</h3>
                    <p>Somos una famillia de 5 dedicada a servir a nuestra communidad con la palabra de dios y el espíritu de Dios.</p>
                </div>
                <img className='about__image' src={aboutImg1} alt="" />
            </div>
            <div className="about__content-2">
                <div className="about__information">
                    <h3>Nuestra Misión</h3>
                    <p>Amar: Amamos a Dios y a todas personas <br /> Equipar: Nos dedicamos a equipar con la palabra de Dios y ayudar llegar a ser lo que Dios tiene para su vida</p>
                </div>
                <img className='about__image' src={aboutImg2} alt="" />
            </div>
        </section>
    )
}

export default About