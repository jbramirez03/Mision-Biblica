import React from 'react'
import buildingImg from '../images/building2.jpg'

const Contact = () => {
    return (
        <section className="contact__section container section" id="contact">

            <div className="contact__container grid">
                <div className="contact__box">
                    <h2 className="section__title section__title-center contact__title
                    ">Comuníquese con nosotros hoy a través de cualquiera de la información proporcionada</h2>
                    <div className="contact__data">
                        <div className="contact__information">
                            <h3 className="contact__subtitle">Llámenos para soporte instantáneo</h3>
                            <span className='contact__description'><i className="ri-phone-fill"></i> +1336260771</span>
                        </div>
                        <div className="contact__information">
                            <h3 className="contact__subtitle">Escríbanos por correo electrónico</h3>
                            <a href="mailto:imbmebane@gmail.com" className='contact__description'><i className="ri-mail-fill"></i> imbmebane@gmail.com</a>
                        </div>
                    </div>
                </div>

                <form
                    action="https://formspree.io/f/mnqwkygq"
                    method="POST"
                    className="contact__form"
                >
                    <div className="contact__inputs">
                        <div className="contact__content">
                            <input
                                type="email"
                                className="contact__input"
                                name="email"
                                id="email"
                                placeholder=" "
                            />
                            <label htmlFor="email" className="contact__label">Correo electrónico</label>
                        </div>

                        <div className="contact__content">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder=" "
                                className="contact__input"
                            />
                            <label htmlFor="subject" className="contact__label">Sujeto</label>
                        </div>

                        <div className="contact__content contact__area">
                            <textarea
                                name="message"
                                placeholder=" "
                                id="message"
                                data-gramm_editor="false"
                                data-enable-grammarly="false"
                                className="contact__input"
                            ></textarea>
                            <label htmlFor="message" className="contact__label">Mensaje</label>
                        </div>
                    </div>

                    <div className="contact__button">

                        <button action="submit" className="button button--flex">
                            Enviar mensaje
                            <i className="ri-arrow-right-up-line button__icon"></i>
                        </button>
                    </div>
                </form>

                <div className="contact__location">
                    <h2 className="contact__title section__title-center">Nuestra Ubicación<br />Mebane, Nc</h2>

                    <div className="contact__images">
                        <img src={buildingImg} alt="" className="contact__image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact