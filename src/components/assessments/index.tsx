import assessmentsBackground from '../../assets/imgs/Background-assessments.jpg'
import stars from '../../assets/svgs/Stars.svg'

import leftArrow from '../../assets/svgs/Icon-arrow-left.svg'
import rightArrow from '../../assets/svgs/Icon-arrow-right.svg'

import profile1 from '../../assets/svgs/Img-profile-1.svg'
import profile2 from '../../assets/svgs/Img-profile-2.svg'
import profile3 from '../../assets/svgs/Img-profile-3.svg'
import profile4 from '../../assets/svgs/Img-profile-4.svg'
import profile5 from '../../assets/svgs/Img-profile-5.svg'
import profile6 from '../../assets/svgs/Img-profile-6.svg'
import { useEffect, useRef, useState } from 'react'

const Assessments = () => {
    const slideRef = useRef<HTMLDivElement>(null!)

    const users = [
        {
            id: 1,
            name: "José souza",
            comment: "Excellent site, very fast service and acceptable values ​​for the quality they provided me",
            profilePicture: profile1
        },
        {
            id: 2,
            name: "Carlos costa",
            comment: "The service is by far one of the best I've received.",
            profilePicture: profile2
        },
        {
            id: 3,
            name: "Katarina",
            comment: "I come to talk to you after the trip, the plane was really comfortable, I didn't even see the time passing.",
            profilePicture: profile3
        },
        {
            id: 4,
            name: "Robsom fraga",
            comment: "For those who like to travel, this site is one of the best, very cheap, good comfort and great service.",
            profilePicture: profile4
        },
        {
            id: 5,
            name: "Ana luiza",
            comment: "Excellent flight, I did not expect such a service for the price I paid, I was surprised.",
            profilePicture: profile5
        },
        {
            id: 6,
            name: "Matheus santos",
            comment: "I made my first trip out of this site, and I intend to use this site again.",
            profilePicture: profile6
        },
    ]

    let index: string
    let translate = '50%'

    const advancedSlide = () => {
        index = 'advanced'
        slideRef.current.style.transform = `translateX(-${translate})`;
    }

    const rewindSlide = () => {
        index = 'rewind'
        slideRef.current.style.transform = `translateX(${translate})`;
    }

    const resetSlide =  () => {

        slideRef.current.addEventListener('transitionend', () => {
            if ( index === 'advanced' ) slideRef.current.appendChild( slideRef.current.firstElementChild! )
            else slideRef.current.prepend( slideRef.current.lastElementChild! )
        
            slideRef.current.style.transition = 'none'
            slideRef.current.style.transform = 'translateX(0)'
        
            setTimeout( () => slideRef.current.style.transition = 'all 1s ease-out' )
        })
        
    }

    const slideForwardCycle = () => setInterval( () => advancedSlide(), 5000 )

    useEffect( () => {
        slideForwardCycle()
        resetSlide()

        window.onload = () => window.innerWidth <= 804 ? translate = '100%' : translate = '50%'
        window.onresize = () => window.innerWidth <= 804 ? translate = '100%' : translate = '50%'
    }, [])

  return (
    <div id='assessments'>
        <div></div>
        <div id='assessments__options'>
            <h2 id='assessments__title'>Assessments</h2>
            <div id='assessments__controller'>
                <img onClick={ rewindSlide } className='assessments__arrow' src={ leftArrow } alt="left arrow" />
                <img onClick={ advancedSlide } className='assessments__arrow' src={ rightArrow } alt="right arrow" />
            </div>
        </div>
        <div id='assessments__comments-container'>
            <div ref={ slideRef } id='assessments__comments'>
                {
                    users.map( user => (
                        <div key={ user.id } className='assessments__comment' style={{ background: `url(${ assessmentsBackground })`}}>
                            <img className='assessments__stars-icon' src={ stars } alt="stars icon" />
                            <p className='assessments__text'>{ user.comment }</p>
                            <div className='assessments__profile'>
                                <img className='assessments__picture' src={ user.profilePicture} alt="profile icon" />
                                <span className='assessments__name'>{ user.name }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Assessments