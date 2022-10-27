import homeBackground from '../../assets/imgs/Background-Home.jpg'
import homeBackground2 from '../../assets/imgs/Background-Home-2.jpg'
import homeBackground3 from '../../assets/imgs/Background-Home-3.jpg'
import { useEffect, useState } from 'react';

const Home = () => {
  return (
    <section id='home' style={{ backgroundSize: 'cover', background: `url(${ homeBackground })`}}>
      <div id='home__info-container'>
        <div id='home__info'>
          <h1 id='home__title'>Welcome to WorldTrip, your international travel website</h1>
          <p id='home__text'>Only at World Trip can you get a trip with a paid hotel and coffee included, we have more than 10 years of work and about 100,000 trips.</p>
          <button id='home__button'>Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Home