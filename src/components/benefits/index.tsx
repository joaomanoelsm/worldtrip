import hotelIcon from '../../assets/svgs/Icon-Hotel.svg'
import travelIcon from '../../assets/svgs/Icon-Travel.svg'
import schedulingIcon from '../../assets/svgs/Icon-Scheduling.svg'

const Benefits = () => {
  return (
    <section id='benefits'>
        {[
            {
                id: 1,
                icon: hotelIcon,
                title: 'Hotel',
                text: 'Hotels already included'
            },
            {
                id: 2,
                icon: travelIcon,
                title: 'Travel',
                text: '+ 100.000 trips'
            },
            {
                id: 3,
                icon: schedulingIcon,
                title: 'Scheduling',
                text: 'Appointment within 24 hours'
            }
        ].map( item => (
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