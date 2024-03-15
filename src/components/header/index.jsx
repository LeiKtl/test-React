import { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header () {
    const [open, setIsOpen] = useState(false);

    function menuBurger () {
        setIsOpen(!open)
        const root = document.getElementById("root");
        if (!open) {
            root.style.overflow = "hidden";
            root.style.height = "100vh";
        } else {
            root.style.overflow = "none";
            root.style.height = ""
        }
    }

    function handleClick () {
        setIsOpen(false)
        const root = document.getElementById("root");
        root.style.overflow = "none";
        root.style.height = ""
    }

    return (
        <header className={open ? 'header hide header_nav' : 'header'}>
            <Link to="/">
                <span className={open ? 'header_logo hide' : 'header_logo'}>Leï.</span>
            </Link>
            <div className={open ? 'header_icone hide' : 'header_icone'} onClick={menuBurger}>
                <div className='header_icone-line1'></div>
                <div className='header_icone-line2'></div>
                <div className='header_icone-line3'></div>
            </div>
            
            <nav className={open ? 'header_navbar' : 'header_navbar hide'}>
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

export default Header;