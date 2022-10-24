import expeditionsImg from '../../assets/imgs/Img-expeditions.jpg'
import expeditionsBackground from '../../assets/imgs/Background-expeditions.jpg'
import { useEffect, useRef, useState } from 'react'
import { ExpeditionsCountryArray } from '../../constants'
import Slide from '../slide'

const Expeditions = () => {
    const slideRef = useRef<HTMLDivElement>(null!)
    const textSlideRef = useRef<HTMLDivElement>(null!)

    const backRef = useRef<HTMLButtonElement>(null!)
    const nextRef = useRef<HTMLButtonElement>(null!)

    useEffect( () => {
        const links = document.querySelectorAll('.expeditions__links') as NodeListOf<HTMLAnchorElement>
        links.forEach( link => link.addEventListener('click', ( e ) => e.preventDefault() ))
    }, [])
    
  return (
    <section id='expeditions'>
        <Slide elementRef={ slideRef } back={ backRef } next={ nextRef } autoPlay={ false } percentage={ '100%' } animationTime={ '.4s' }  />
        <Slide elementRef={ textSlideRef } back={ backRef } next={ nextRef } autoPlay={ false } percentage={ '100%' } animationTime={ '.4s' }  />
        <div id='expeditions__img-container'>
            <div ref={ slideRef } className='expeditions__slide'>
                {
                    ExpeditionsCountryArray.map( country => (
                        <img key={ country.id } id='expeditions__img' src={ country.img } alt="country" />
                    ))
                }
            </div>
        </div>
        <div id='expeditions__info'>    
            <div id='expeditions__texts'>
                <div ref={ textSlideRef } className='expeditions__slide-container'>
                    {
                        ExpeditionsCountryArray.map( country => (
                            <div key={ country.id } className='expeditions__slide'>
                                <h2 id='expeditions__title'>{ country.title }</h2>
                                <p id='expeditions__text'>{ country.text }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id='expeditions__buttons-container'>
                <button ref={ backRef } className='expeditions__buttons'>
                    <a className='expeditions__links' href="">Back</a>
                </button>
                <button ref={ nextRef } className='expeditions__buttons'>
                    <a className='expeditions__links' href="">Next</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Expeditions