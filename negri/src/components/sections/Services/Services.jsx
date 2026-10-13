import ASSETS from '../../../constants/assets'
import './Services.scss'

export default function Services() {
  const serviceCategories = [
    {
      id: 'checkup',
      title: 'Free Checkup',
      icon: ASSETS.services.checkup,
      isActive: false,
      gridRow: '1 / 2',
    },
    {
      id: 'cardiogram',
      title: 'Cardiogram',
      icon: ASSETS.services.cardiogram,
      isActive: true,
      gridRow: '2 / 3',
    },
    {
      id: 'dna',
      title: 'Dna Testing',
      icon: ASSETS.services.dna,
      isActive: false,
      gridRow: '3 / 4',
    },
    {
      id: 'blood-bank',
      title: 'Blood Bank',
      icon: ASSETS.services.bloodBank,
      isActive: false,
      gridRow: '4 / 5',
    },
  ]

  const featureChecklist = [
    'A Passion for Healing',
    '5-Star Care',
    'All our best',
    'Believe in Us',
    'A Legacy of Excellence',
    'Always Caring',
  ]

  return (
    <section id="services" className="tretiyblok">
      <div className="uslugisoderzhanie">
        <header className="shapkauslug">
          <h2 className="uslugisinaya">Care you can believe in</h2>
          <p className="uslugitema">Our Services</p>
        </header>

        <div className="bolshayasetka">
          <aside className="stolbikmenyu">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className={`stolbikyacheyka ${
                  cat.isActive ? 'stolbikaktivnaya' : ''
                }`}
                style={{ gridRow: cat.gridRow }}
              >
                <img
                  src={cat.icon}
                  alt={cat.title}
                  className="yacheykaicon"
                />
                <span className="yacheykanazvanie">{cat.title}</span>
              </div>
            ))}

            <div className="vseuslugiknopka" style={{ gridRow: '5 / 6' }}>
              <span className="vseuslugitekst">View All</span>
            </div>
          </aside>

          <article className="sredniytekst">
            <h3 className="vazhnyzagolovok">
              A passion for putting patients first.
            </h3>

            <div className="galochkiblok">
              <ul className="dvoynayasetkaspiska">
                {featureChecklist.map((item, index) => (
                  <li key={index} className="spisokpunkt">
                    <a href="#feature" className="spisokssylka">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="uslugiopisanie">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p className="uslugiopisanie">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </article>

          <figure className="dvefotki">
            <img
              src={ASSETS.services.feature1}
              alt="Medical equipment"
              className="odnafotka"
            />
            <img
              src={ASSETS.services.feature2}
              alt="Medical facility"
              className="odnafotka"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
