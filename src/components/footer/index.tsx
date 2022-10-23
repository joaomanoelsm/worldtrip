import logo from '../../assets/svgs/Logo-Footer.svg'
import whatsappIcon from '../../assets/svgs/Icon-Whatsapp.svg'
import instagramIcon from '../../assets/svgs/Icon-Instagram.svg'
import linkedinIcon from '../../assets/svgs/Icon-Linkedin.svg'
import footerImg from '../../assets/imgs/Background-footer.jpg'

const Footer = () => {
  return (
    <footer id='footer' style={{ background: `url(${ footerImg })`}}>
        <div id='footer__contain'>
            <div id='footer__icons-container'>
                <img id='footer__logo' src={ logo } alt="footer logo" />
                <div id='footer__icons'>
                    <img className='footer__icon' src={ whatsappIcon } alt="whatsapp icon" />
                    <img className='footer__icon' src={ instagramIcon } alt="instagram icon" />
                    <img className='footer__icon' src={ linkedinIcon } alt="linkedin icon" />
                </div>
            </div>
            <hr />
            <div id='footer__navigate'>
                <h3 className='footer__title'>Navigate</h3>
                <ul className='footer__list'>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#expeditions">Expeditions</a>
                    </li>
                    <li>
                        <a href="#plans">Plans</a>
                    </li>
                    <li>
                        <a href="#assessments">Assessments</a>
                    </li>
                </ul>
            </div>
            <hr />
            <div id='footer__support'>
                <h3 className='footer__title'>Support Us</h3>
                <ul className='footer__list'>
                    <li>
                        <a href="#home">Faq</a>
                    </li>
                    <li>
                        <a href="#home">Contact Us</a>
                    </li>
                    <li>
                        <a href="#home">Suppor Center</a>
                    </li>
                    <li>
                        <a href="#home">Security</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer