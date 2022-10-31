import assessmentsBackground from '../../assets/imgs/Background-assessments.jpg'
import stars from '../../assets/svgs/Stars.svg'

import leftArrow from '../../assets/svgs/Icon-arrow-left.svg'
import rightArrow from '../../assets/svgs/Icon-arrow-right.svg'

import { useEffect, useRef, useState } from 'react'
import { users } from '../../constants'

import Slide from '../slide'
import Tag from '../tag'

const Assessments = () => {
    const slideRef = useRef<HTMLDivElement>(null!)
    const nextRef = useRef<HTMLImageElement>(null!)
    const backRef = useRef<HTMLImageElement>(null!)

    const [ percentage , setPercentage ] = useState('50%')

    useEffect( () => {
        const switchResponsiveness = () => {
            if ( window.document.body.clientWidth <= 804 ) console.log(window.document.body.clientWidth)
            else setPercentage('50%')
            console.log('ta entrando')
        }

        window.addEventListener( 'load', switchResponsiveness )
        window.addEventListener( 'resize', switchResponsiveness )
    }, [])

  return (
    <div id='assessments'>
        <Slide elementRef={ slideRef } back={ backRef } next={ nextRef } percentage={ percentage } animationTime={ '.7s' } enableMobileResponsiveness={ true } />
        <Tag name='Assessments' />
        <div id='assessments__options'>
            <h2 id='assessments__title'>Assessments</h2>
            <div id='assessments__controller'>
                <img ref={ backRef } className='assessments__arrow' src={ leftArrow } alt="left arrow" />
                <img ref={ nextRef } className='assessments__arrow' src={ rightArrow } alt="right arrow" />
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