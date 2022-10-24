import homeBackground from '../../assets/imgs/Background-Home.jpg'
import homeBackground2 from '../../assets/imgs/Background-Home-2.jpg'
import homeBackground3 from '../../assets/imgs/Background-Home-3.jpg'
import { useEffect, useState } from 'react';

const Home = () => { 
  const [ backgroundt, setBackground ] = useState( homeBackground )

  const filterUnitsOfMeasure = () => {
    if ( window.innerWidth <= 804 ) setBackground(homeBackground3)
    else if ( window.innerWidth <= 1439 ) setBackground(homeBackground2)
    else if ( window.innerWidth > 1439 ) setBackground(homeBackground)
  }

  useEffect( () => {

    window.addEventListener('load', filterUnitsOfMeasure )
    window.addEventListener('resize', filterUnitsOfMeasure )
  }, [])  

  // useEffect(() => {
  //   window
  //   .matchMedia("(max-width: 768px)")
  //   .
  // }, []);

  return (
    <section id='home' style={{ background: `url(${ backgroundt })`}}>
      <div id='home__info-container'>
        <div id='home__info'>
          <h1 id='home__title'>Welcome to WorldTrip, your international travel website</h1>
          <p id='home__text'>Only on worldTrip can you get a trip with a paid hotel and coffee included</p>
          <button id='home__button'>Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Home