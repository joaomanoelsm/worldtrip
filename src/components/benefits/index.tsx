import { icons } from '../../constants'

const Benefits = () => {
  return (
    <section id='benefits'>
        {icons.map( item => (
            <div key={ item.id } className='benefits__itens'>
                <div className='benefits__img-container'>
                    <img className='benefits__img' src={ item.icon } alt="icon" />
                </div>
                <div className='benefits__info'>
                    <h3 className='benefits__title'>{ item.title }</h3>
                    <p className='benefits__text'>{ item.text }</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Benefits