import { useEffect } from 'react'
import logo from '../../assets/svgs/Logo.svg'
import menu from '../../assets/svgs/menu.svg'

const Header = () => {
    
  return (
    <header id='header'>
        <img id='header__logo' src={ logo } alt="logo" />
        <nav id='header__navbar'>
            <ul id='header__list'>
                <li className='header__options'>
                    <a className='header__links' href="#home">Home</a>
                </li>
                <li className='header__options'>
                    <a className='header__links' href="#expeditions">Expeditions</a>
                </li>
                <li className='header__options'>
                    <a className='header__links' href="#plans">Plans</a>
                </li>
                <li className='header__options'>
                    <a className='header__links' href="#assessments">Assessments</a>
                </li>
                <li className='header__options'>
                    <a className='header__links' href="#faq">FAQ</a>
                </li>
            </ul>
            <img id='header__menu' src={ menu } alt="" />
        </nav>
    </header>
  )
}

export default Header