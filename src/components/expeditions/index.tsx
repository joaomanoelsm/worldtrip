import expeditionsImg from '../../assets/imgs/Img-expeditions.jpg'
import expeditionsBackground from '../../assets/imgs/Background-expeditions.jpg'
import { useEffect, useState } from 'react'

const Expeditions = () => {
    
  return (
    <section id='expeditions'>
        <div id='expeditions__img-container'>
            <img id='expeditions__img' src={ expeditionsImg } alt="country" />
        </div>
        <div id='expeditions__info'>    
            <div id='expeditions__texts'>
                <h2 id='expeditions__title'>Brazil</h2>
                <p id='expeditions__text'>
                    The wonderful city never leaves anything to be desired, especially in the year of the Olympics. If you already know Rio de Janeiro and want a different route to enjoy the city, we made a post with several tips   to make the most of it.
                </p>
            </div>
            <div id='expeditions__buttons-container'>
                <button className='expeditions__buttons'>
                    <a href="#home">Back</a>
                </button>
                <button className='expeditions__buttons'>
                    <a href="#home">Next</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Expeditions