import React from 'react'

const Contact = () => {
    return (
        <section className="contact__section container section" id="contact">

            <div className="contact__container grid">
                <div className="contact__box">
                    <h2 className="section__title section__title-center">Comuníquese con nosotros hoy a través de cualquiera de la información proporcionada</h2>
                    <div className="contact__data">
                        <div className="contact__information">
                            <h3 className="contact__subtitle">Llámenos para soporte instantáneo</h3>
                            <span className='contact__description'><i class="ri-phone-fill"></i> +1336260771</span>
                        </div>
                        <div className="contact__information">
                            <h3 className="contact__subtitle">Escríbanos por correo electrónico</h3>
                            <a href="mailto:imbmebane@gmail.com" className='contact__description'><i class="ri-mail-fill"></i> imbmebane@gmail.com</a>
                        </div>
                    </div>
                </div>

                <form
                    action="https://formspree.io/f/mnqwkygq"
                    method="POST"
                    class="contact__form"
                >
                    <div class="contact__inputs">
                        <div class="contact__content">
                            <input
                                type="email"
                                class="contact__input"
                                name="email"
                                id="email"
                                placeholder=" "
                            />
                            <label for="email" class="contact__label">Email</label>
                        </div>

                        <div class="contact__content">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder=" "
                                class="contact__input"
                            />
                            <label for="subject" class="contact__label">Subject</label>
                        </div>

                        <div class="contact__content contact__area">
                            <textarea
                                name="message"
                                placeholder=" "
                                id="message"
                                data-gramm_editor="false"
                                data-enable-grammarly="false"
                                class="contact__input"
                            ></textarea>
                            <label for="message" class="contact__label">Message</label>
                        </div>
                    </div>

                    <button action="submit" class="button button--flex">
                        Send Message
                        <i class="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact