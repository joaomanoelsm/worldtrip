import { useEffect } from 'react'
import logo from '../../assets/svgs/Logo.svg'
import menu from '../../assets/svgs/menu.svg'
import close from '../../assets/svgs/close.svg'

const Header = () => {

   useEffect( () => {
        const menu = document.querySelector('#header__menu') as HTMLImageElement
        const list = document.querySelector('.header__list') as HTMLUListElement

        menu.onclick = () => list.classList.add('header__list--appearance')
   }, [])

   useEffect( () => {
        const close = document.querySelector('.header__close') as HTMLImageElement
        const links = document.querySelectorAll('.header__links') as NodeListOf<HTMLLIElement>
        const list = document.querySelector('.header__list') as HTMLUListElement

        close.onclick = () => list.classList.remove('header__list--appearance')
        links.forEach( link => link.onclick = () => list.classList.remove('header__list--appearance'))
    }, [])
    
  return (
    <header id='header'>
        <img id='header__logo' src={ logo } alt="logo" />
        <nav id='header__navbar'>
            <ul className='header__list'>
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
                <img className='header__close' src={ close } alt="" />
            </ul>
            <img id='header__menu' src={ menu } alt="" />
        </nav>
    </header>
  )
}

export default Header