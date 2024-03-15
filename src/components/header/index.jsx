import { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header () {
    const [isOpen, setIsOpen] = useState(false);

    function menuBurger () {
        setIsOpen(!isOpen)
        const root = document.getElementById("root");
        if (isOpen) {
            root.style.overflow = "hidden";
            root.style.height = "100vh";
        } else {
            root.style.overflow = "none";
            root.style.height = "";
        }
    };

    function handleClick () {
        setIsOpen(false)
        const root = document.getElementById("root");
        root.style.overflow = "none";
        root.style.height = "";
    };

    return (
        <header className={isOpen ? 'header hide header_nav' : 'header'}>
            <Link to="/">
                <span className={isOpen ? 'header_logo hide' : 'header_logo'}>Leï.</span>
            </Link>
            <div className={isOpen ? 'header_icone hide' : 'header_icone'} onClick={menuBurger}>
                <div className='header_icone-line1'></div>
                <div className='header_icone-line2'></div>
                <div className='header_icone-line3'></div>
            </div>
            <nav className={isOpen ? 'header_navbar' : 'header_navbar hide'}>
                <div className='header_icone2' onClick={menuBurger}>
                    <div className=' header_icone2-close'></div>
                </div>
                <ul className='header_navbar--burger'>
                    <a href="#work">
                        <li className='header_navbar--burger--work' onClick={handleClick}>My work</li>
                    </a>
                    <a href="#skills">
                        <li className='header_navbar--burger--skills'>Skills</li>
                    </a>
                    <Link to="/contact" onClick={handleClick}>
                        <li className='header_navbar--burger--contact'>Contact<span className='line'></span></li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
};

export default Header