import ASSETS from '../../../constants/assets'
import './Hero.scss'

export default function Hero() {
  const quickActionCards = [
    {
      id: 'appointment',
      title: 'Book an Appointment',
      icon: ASSETS.hero.calendar,
      variantClass: 'temnykarton',
    },
    {
      id: 'team',
      title: 'Book an Appointment',
      icon: ASSETS.hero.team,
      variantClass: 'svetlykarton',
    },
    {
      id: 'cash',
      title: 'Book an Appointment',
      icon: ASSETS.hero.cash,
      variantClass: 'goluboykarton',
    },
  ]

  return (
    <section className="pervyiblok">
      <div className="obolochka">
        <div className="tekstovik">
          <header className="zagolovki">
            <h1 className="sinenkaya">Caring for Life</h1>
            <p className="glavnayatema">Leading the Way in Medical Excellence</p>
          </header>
          <button type="button" className="knopkauslug">
            Our Services
          </button>
        </div>

        <div className="troikasetka">
          {quickActionCards.map((card) => (
            <div
              key={card.id}
              className={`troikakarton ${card.variantClass}`}
            >
              <p className="kartontekst">{card.title}</p>
              <img
                src={card.icon}
                alt={card.title}
                className="kartonkartinka"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
