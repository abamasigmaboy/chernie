import ASSETS from '../../../constants/assets'
import './Contacts.scss'

export default function Contacts() {
  const contactBlocks = [
    {
      id: 'emergency',
      icon: ASSETS.contacts.emergency,
      title: 'Emergency',
      lines: ['(237) 681-812-255', '(237) 666-331-894'],
      variantClass: 'svetlykontakt',
    },
    {
      id: 'location',
      icon: ASSETS.contacts.location,
      title: 'Location',
      lines: ['0123 Some place', '9876 Some country'],
      variantClass: 'temnykontakt',
    },
    {
      id: 'email',
      icon: ASSETS.contacts.email,
      title: 'Email',
      lines: ['fildineeesoe@gmil.com', 'myebstudios@gmail.com'],
      variantClass: 'svetlykontakt',
    },
    {
      id: 'hours',
      icon: ASSETS.contacts.hours,
      title: 'Working Hours',
      lines: ['Mon-Sat 09:00-20:00', 'Sunday Emergency only'],
      variantClass: 'svetlykontakt',
    },
  ]

  return (
    <section id="contact" className="vosmoyblok">
      <div className="kontaktvnutri">
        <header className="kontaktshapka">
          <h2 className="kontaktmaly">Get in touch</h2>
          <p className="kontaktbolshoy">Contact</p>
        </header>

        <div className="chetyrekontaktsetka">
          {contactBlocks.map((block) => (
            <div
              key={block.id}
              className={`kontaktkarta ${block.variantClass}`}
            >
              <div className="kontaktinfo">
                <img
                  src={block.icon}
                  alt={block.title}
                  className="kontaktznachok"
                />
                <h3 className="kontakttema">{block.title}</h3>
                {block.lines.map((line, idx) => (
                  <p key={idx} className="kontaktstroka">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
