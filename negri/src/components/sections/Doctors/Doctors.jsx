import ASSETS from '../../../constants/assets'
import './Doctors.scss'

export default function Doctors() {
  const doctorsList = [
    {
      id: 1,
      name: "Doctor's Name",
      specialty: 'Neurology',
      photo: ASSETS.doctors.doctor1,
    },
    {
      id: 2,
      name: "Doctor's Name",
      specialty: 'Neurology',
      photo: ASSETS.doctors.doctor2,
    },
    {
      id: 3,
      name: "Doctor's Name",
      specialty: 'Neurology',
      photo: ASSETS.doctors.doctor3,
    },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: ASSETS.doctors.socialIn },
    { name: 'Facebook', icon: ASSETS.doctors.socialFb },
    { name: 'Instagram', icon: ASSETS.doctors.socialInsta },
  ]

  return (
    <section id="doctors" className="shestoyblok">
      <div className="doktoravnutri">
        <header className="doktorashapka">
          <h2 className="doktoramaly">Trusted Care</h2>
          <p className="doktorabolshoy">Our Doctors</p>
        </header>

        <div className="troikavrachsetka">
          {doctorsList.map((doc) => (
            <article key={doc.id} className="vrachkarta">
              <img
                src={doc.photo}
                alt={doc.name}
                className="vrachfoto"
              />

              <div className="vrachopis">
                <p className="vrachimya">{doc.name}</p>
                <h3 className="vrachspec">{doc.specialty}</h3>

                <div className="vrachsocseti">
                  {socialLinks.map((social, idx) => (
                    <img
                      key={idx}
                      src={social.icon}
                      alt={social.name}
                      className="socikonka"
                    />
                  ))}
                </div>
              </div>

              <button type="button" className="profilknopka">
                View Profile
              </button>
            </article>
          ))}
        </div>

        <img
          src={ASSETS.doctors.dots}
          alt="Pagination dots"
          className="tochkislayder"
        />
      </div>
    </section>
  )
}
