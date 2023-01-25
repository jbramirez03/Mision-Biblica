import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header' id='header'>
            <nav className='nav container'>
                <Link className='logo nav__logo'>Mísion Biblíca</Link>
                <div className="nav__menu" id='nav-menu'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to='' className='nav__link'></Link>
                        </li>
                        <li className="nav__item">
                            <Link to='' className='nav__link'></Link>
                        </li>
                        <li className="nav__item">
                            <Link to='' className='nav__link'></Link>
                        </li>
                        <li className="nav__item">
                            <Link to='' className='nav__link'></Link>
                        </li>
                        <li className="nav__item">
                            <Link to='' className='nav__link'></Link>
                        </li>
                        <li className="nav__item">
                            <Link to='' className='nav__link'></Link>
                        </li>
                    </ul>

                    <i className="ri-close-line nav__close" id="nav-close"></i>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header