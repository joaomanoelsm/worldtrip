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

    const advancedSlide = () => {
        index = 'advanced'
        console.log('advancesd')
        elementRef.current.style.transform = `translateX(-${ percentage })`;
    }

    const rewindSlide = () => {
        index = 'rewind'
        elementRef.current.style.transform = `translateX(${ percentage })`;
    }

    const resetSlide =  () => {

        elementRef.current.addEventListener('transitionend', () => {
            if ( index === 'advanced' ) elementRef.current.appendChild( elementRef.current.firstElementChild! )
            else elementRef.current.prepend( elementRef.current.lastElementChild! )
        
            elementRef.current.style.transition = 'none'
            elementRef.current.style.transform = 'translateX(0)'
        
            setTimeout( () => elementRef.current.style.transition = `all ${ animationTime } ease-out` )
        })
        
    }

    const slideForwardCycle = () => setInterval( () => advancedSlide(), 5000 )

    useEffect( () => {
    
        if ( autoPlay ) slideForwardCycle() 
        
        resetSlide()
        
        next.current.addEventListener( 'click', advancedSlide )
        back.current.addEventListener( 'click', rewindSlide )
    }, [])


  return null
}

export default Slide