import bottomArrow from '../../assets/svgs/Icon-Arrow-Bottom.svg'
import faqImg from '../../assets/imgs/Img-faq.jpg'
import { useEffect } from 'react'
import { doubts } from '../../constants'

const Faq = () => { 

    useEffect( () => {
        const options = document.querySelectorAll('.faq__options') as NodeListOf<HTMLLIElement>

        options?.forEach( elem  => {
            elem.addEventListener('click', () => elem.classList.toggle("faq__options--animation"))
        })
    })

  return (
    <section id='faq'>
        <div></div>
        <h2 id='faq__title'>Frequently asked questions</h2>
        <div id='faq__contain'>
            <div id='faq__doubts'>
                <ul className='faq__options-container'>
                    {
                        doubts.map( doubt => (
                            <li key={ doubt.id } className='faq__options'>
                                <div className='faq__view'>
                                    <span>{ doubt.question }</span>
                                    <img className='faq__arrow' src={ bottomArrow } alt="bottom arrow" />
                                </div>
                                <hr />
                                <div className='faq__summary'>
                                    <p>{ doubt.answer }</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <img id='faq__img' src={ faqImg } alt="" />
        </div>
    </section>
  )
}

export default Faq