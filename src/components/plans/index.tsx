import { PlansCountryArray } from "../../constants"

const Plans = () => {

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
                PlansCountryArray.map( country => (
                    <div key={ country.id } className='plans__itens'>
                        <div className='plans__img-container'>
                            <div className={`plans__background ${'plans__background--linear-' + country.id}`}>
                                <h3 className='plans__country'>{ country.name }</h3>
                            </div>
                            <img className='plans__img' src={ country.img } alt="country" />
                        </div>
                        <div className='plans__info'>
                            <div className='plans__texts'>
                                <h4 className='plans__city'>{ country.city }</h4>
                                <p className='plans__summary'>{ country.text }</p>
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