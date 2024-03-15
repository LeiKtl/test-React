import './footer.scss';
import githubLogo from '../../assets/logo_github.png';
import linkedinLogo from '../../assets/logo_linkedin.png'
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer className='footer'>
            <Link to="/contact" className='footer_contact'>Let's<br/>collaborate</Link>
            <div className='footer_container'>
                <Link to="https://github.com/LeiKtl?tab=repositories">
                    <img className='footer_container_logo1' src={githubLogo} alt='Github Logo'/>
                </Link>
                <img className='footer_container_logo2' src={linkedinLogo} alt='Linkedin Logo'/>
            </div>
            {/* <p className='footer_content'>Designed by Leï. - <Link>Mentions Légales</Link></p> */}
        </footer>
    )
};

export default Footer