import React from 'react'

const Contact = () => {
    return (
        <section className="contact__section container section" id="contact">
            <h2 className="section__title section__title-center">Contact</h2>

            <div className="contact__info grid">
                <h3 className="contact__title">Comuníquese con nosotros hoy a través de cualquiera de la información proporcionada</h3>

                <div className="contact__box">
                    <h3 className="contact__subtitle">Llámenos para soporte instantáneo</h3>
                    <p><i class="ri-phone-fill"></i> +1336260771</p>
                </div>

                <div className="contact__box">
                    <h3 className="contact__subtitle">Escríbanos por correo electrónico</h3>
                    <p><i class="ri-mail-fill"></i> <a href="mailto:imbmebane@gmail.com">imbmebane@gmail.com</a></p>
                </div>

            </div>
        </section>
    )
}

export default Contact