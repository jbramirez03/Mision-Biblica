import React from 'react'
import logo from '../images/logo.jpeg';

const Footer = () => {
    return (
        <footer className='footer' id='footer'>


            <div className="footer__content">
                <div className="footer__light-bg">
                    <div className="footer__socials container">
                        <div className="social__links">

                            <a
                                href="https://www.instagram.com/imbmebane/"
                                className="footer__social-link"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/people/Misi%C3%B3n-Biblica/100080076774844/"
                                className="footer__social-link"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className="ri-facebook-line"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/@Imbmebane"
                                className="footer__social-link"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className="ri-youtube-line"></i>
                            </a>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <p className="footer__copy container">&#169; Misión Bíblica. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer