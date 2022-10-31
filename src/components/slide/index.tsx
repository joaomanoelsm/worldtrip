import React, { useEffect } from 'react'
interface SlideI {
    elementRef: React.MutableRefObject<HTMLDivElement>,
    back: React.MutableRefObject<HTMLImageElement | HTMLButtonElement>,
    next: React.MutableRefObject<HTMLImageElement | HTMLButtonElement>,
    percentage: string,
    animationTime: string
}

const Slide = ({ elementRef, back, next, percentage, animationTime }: SlideI ) => {

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
        next.current.addEventListener( 'click', advancedSlide )
        back.current.addEventListener( 'click', rewindSlide )
    })

    useEffect( () => {
        if ( window.matchMedia("(max-width: 800px)").matches ) percentage = '100%'
        else percentage = '50%'
    }, [ window ])

  return null
}

export default Slide