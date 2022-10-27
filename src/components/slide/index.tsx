import React, { useEffect } from 'react'

interface SlideI {
    elementRef: React.MutableRefObject<HTMLDivElement>,
    back: React.MutableRefObject<HTMLImageElement | HTMLButtonElement>,
    next: React.MutableRefObject<HTMLImageElement | HTMLButtonElement>,
    autoPlay: boolean,
    percentage: string,
    animationTime: string
}

const Slide = ({ elementRef, back, next, autoPlay, percentage, animationTime }: SlideI ) => {

    let index: string
    let permissionToTriggerTheEvent = true

    const advancedSlide = () => {
        index = 'advanced'
        resetSlide()
        permissionToTriggerTheEvent = false
        elementRef.current.style.transform = `translateX(-${ percentage })`;
    }

    const rewindSlide = () => {
        index = 'rewind'
        resetSlide()
        permissionToTriggerTheEvent = false
        elementRef.current.style.transform = `translateX(${ percentage })`;
    }

    const slideForwardCycle = () => setInterval( () => advancedSlide(), 5000 )

    const resetSlide =  () => {

        if ( permissionToTriggerTheEvent ) {
            elementRef.current.addEventListener('transitionend', () => {
                if ( index === 'advanced' ) elementRef.current.appendChild( elementRef.current.firstElementChild! )
                else elementRef.current.prepend( elementRef.current.lastElementChild! )
            
                elementRef.current.style.transition = 'none'
                elementRef.current.style.transform = 'translateX(0)'
            
                setTimeout( () => elementRef.current.style.transition = `all ${ animationTime } ease-out` )
            })
        }

    }

    useEffect( () => {
        if ( autoPlay ) slideForwardCycle() 
        
        next.current.addEventListener( 'click', advancedSlide )
        back.current.addEventListener( 'click', rewindSlide )
    })

  return null
}

export default Slide