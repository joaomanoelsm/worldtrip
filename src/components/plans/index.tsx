import chinaImg from '../../assets/imgs/Img-China.jpg'
import californiaImg from '../../assets/imgs/Img-California.jpg'
import greceImg from '../../assets/imgs/Img-Grece.jpg'
import italyImg from '../../assets/imgs/Img-Italy.jpg'
import portugualImg from '../../assets/imgs/Img-Portugual.jpg'
import canadaImg from '../../assets/imgs/Img-Canada.jpg'

const Plans = () => {
    const countryArray = [
        {
            id: 1,
            country: "China",
            city: "Hong Kong",
            text: "The city with the most skyscrapers on the planet, Hong Kong is a 'must' for tourists. The land of Bruce Lee guarantees many activities for those looking for the best places to travel in the world.",
            img: chinaImg
        },
        {
            id: 2,
            country: "California",
            city: "San francisco",
            text: "San Francisco is increasingly on the world gastronomy scene. In addition, enjoying a day on the city's cable cars and visiting Alcatraz prison are essential tours.",
            img: californiaImg
        },
        {
            id: 3,
            country: 'Grece',
            city: 'Atenas',
            text: 'Natural beauties, history, gastronomy, excellent weather especially in the European summer and the receptivity of the local people are just some of the reasons.',
            img: greceImg
        },
        {
            id: 4,
            country: 'Italy',
            city: 'Roma',
            text: 'The country has a little bit of everything in its extension: mountains, snow, lakes, crystalline beaches, old cities with charming architecture, medieval fortresses, wineries as far as the eye can see.',
            img: italyImg
        },
        {
            id: 5,
            country: 'Portugual',
            city: 'Lisbon',
            text: 'Bring together history, architectural beauty and incredible landscapes, wonderful food and one of the best value for money among European countries.',
            img: portugualImg
        },
        {
            id: 6,
            country: 'Canada',
            city: 'Ottawa',
            text: 'Cutting through the city is the fascinating Rideau Canal. Considered a UNESCO World Heritage Site, it is a famous tourist spot that brings great pride to Canadians.',
            img: canadaImg
        },
    ]

  return (
    <section id='plans'>
        <div id='plans__tag'></div>
        <div id='plans__texts'>
            <h2 id='plans__title'>Choose your travel plan now</h2>
            <p id='plans__text'>
                Buying the package now you compete for a trip to Bora Bora, French Polynesia, including hotel and free food for 7 days.
            </p>
        </div>
        <div id='plans__itens-container'>
            {
                countryArray.map( elem => (
                    <div key={ elem.id } className='plans__itens'>
                        <div className='plans__img-container'>
                            <div className={`plans__background ${'plans__background--linear-' + elem.id}`}>
                                <h3 className='plans__country'>{ elem.country }</h3>
                            </div>
                            <img className='plans__img' src={ elem.img } alt="country" />
                        </div>
                        <div className='plans__info'>
                            <div className='plans__texts'>
                                <h4 className='plans__city'>{ elem.city }</h4>
                                <p className='plans__summary'>{ elem.text }</p>
                            </div>
                            <button className='plans__button'>
                                <a href="#home">Buy</a>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Plans