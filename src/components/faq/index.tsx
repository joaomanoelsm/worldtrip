import bottomArrow from '../../assets/svgs/Icon-Arrow-Bottom.svg'
import faqImg from '../../assets/imgs/Img-faq.jpg'
import { useEffect, useRef } from 'react'

const Faq = () => { 
    
    const doubts = [
        {
            id: 1,
            question: 'What is the minimum amount to travel?',
            answer: 'Currently the cheapest trip we have is to Italy, even though it is cheap it is one of the most visited countries we have.'
        },
        {
            id: 2,
            question: 'Only coffee is free?',
            answer: 'Yes, in all travel options, we only leave breakfast included'
        },
        {
            id: 3,
            question: 'Which month travel is cheapest?',
            answer: 'Trips are more affordable during non-commemorative seasons or with few holidays, such as January, February and March'
        },
        {
            id: 4,
            question: 'Why some trips were unavailable?',
            answer: 'Due to covid, some countries have blocked the entry of immigrants'
        },
        {
            id: 5,
            question: 'Is hosting free?',
            answer: 'Yes, the value is already included in the contracted plan'
        },
        {
            id: 6,
            question: 'The price of the plan is round trip?',
            answer: 'Yes, it is included from breakfast, to round trip and accommodation'
        }
    ]

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