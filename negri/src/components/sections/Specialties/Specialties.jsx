import ASSETS from '../../../constants/assets'
import './Specialties.scss'

export default function Specialties() {
  const specialtiesList = [
    { id: 1, name: 'Neurology' },
    { id: 2, name: 'Bones' },
    { id: 3, name: 'Oncology' },
    { id: 4, name: 'Otorhinolaryngology' },
    { id: 5, name: 'Otorhinolaryngology' },
    { id: 6, name: 'Cardiovascular' },
    { id: 7, name: 'Pulmonology' },
    { id: 8, name: 'Renal Medicine' },
    { id: 9, name: 'Gastroenterology' },
    { id: 10, name: 'Urology' },
    { id: 11, name: 'Dermatology' },
    { id: 12, name: 'Gynaecology' },
  ]

  return (
    <section id="specialties" className="chetvertyiblok">
      <div className="kartasoderzhanie">
        <header className="verhushechka">
          <h2 className="verhmaly">Always Caring</h2>
          <p className="verhbolshoy">Our Specialties</p>
        </header>

        <div className="dvenadtsatsetka">
          {specialtiesList.map((item) => (
            <div key={item.id} className="napravlenieyacheyka">
              <img
                src={ASSETS.specialties.icon}
                alt={item.name}
                className="napravlenieicon"
              />
              <p className="napravlenienazvanie">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
