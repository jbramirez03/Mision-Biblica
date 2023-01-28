import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpeg'

const Header = () => {

    const navLink = document.querySelectorAll('.nav__link')
    const [menuState, setMenuState] = React.useState(false);
    const [scrollState, setScrollState] = React.useState(false);

    function linkAction() {
        setMenuState(false);
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    function scrollHeader() {
        if (this.scrollY >= 80) setScrollState(true);
        else setScrollState(false);
    }
    window.addEventListener('scroll', scrollHeader);

    return (
        <header className={`header ${scrollState ? 'scroll-header' : ''}`} id='header'>
            <nav className='nav container'>
                <Link className='logo nav__logo'><img src={Logo} />Misión Bíblica</Link>
                <div className={`nav__menu ${menuState ? 'show-menu' : ''}`} id='nav-menu'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to='/' className='nav__link'>Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/About' className='nav__link'>About</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/Studies' className='nav__link'>Studies</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/Contact' className='nav__link'>Contact</Link>
                        </li>
                    </ul>

                    <i className="ri-close-line nav__close" id="nav-close" onClick={() => setMenuState(false)}></i>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuState(true)}>
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header