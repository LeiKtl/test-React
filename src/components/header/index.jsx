import { useState } from 'react';
import './header.scss';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Header () {
    const [isOpen, setIsOpen] = useState(false);

    function menuBurger () {
        setIsOpen(!isOpen)
        const root = document.getElementById("root");
        if (!isOpen) {
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
                    <li className='header_navbar--burger--work'><Link to="/#work" onClick={handleClick}>My work</Link></li>
                    <li className='header_navbar--burger--skills'><Link to="/#skills" onClick={handleClick}>Skills</Link></li>
                    <li className='header_navbar--burger--contact'><Link to="/contact" onClick={handleClick}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header