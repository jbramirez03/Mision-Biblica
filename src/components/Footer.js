import React from 'react'

const Footer = () => {
    return (
        <footer className='footer section container' id='footer'>
            <h2 className="section__title section__title-center">Socials</h2>

            <div className="footer__content">
                <div className="footer__socials">
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

                <p className="footer__copy">&#169; Misión Bíblica. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer