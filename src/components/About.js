import React from 'react'
import aboutImg1 from '../images/About.jpeg'
import aboutImg2 from '../images/about1.jpeg'

const About = () => {
    return (
        <section className='section container about__section' id='about'>
            <h2 className="section__title section__title-center">Sobre Nosotros</h2>

            <div className="about__blocks">

                <div className="about__content-1 about__content">
                    <div className="about__information about__information-1">
                        <h3>David Ruiz,<br /> Pastor</h3>
                        <p>Somos una famillia dedicada a servir a nuestra communidad con la palabra de Dios.</p>
                    </div>
                    <img className='about__image' src={aboutImg1} alt="" />
                </div>
                <div className="about__content-2 about__content">
                    <div className="about__information">
                        <h3>Nuestra Misión</h3>
                        <p>Amar: Amamos a Dios y a todas personas <br /> Equipar: Nos dedicamos a equipar con la palabra de Dios <br /> Lanzar: Nuestro deseo es que cada uno se lanze a el proposito de Dios en su vida</p>
                    </div>
                    <img className='about__image about__image-2' src={aboutImg2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About