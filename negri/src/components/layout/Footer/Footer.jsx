import ASSETS from '../../../constants/assets'
import './Footer.scss'

export default function Footer() {
  const importantLinks = ['Appointment', 'Doctors', 'Services', 'About Us']

  const contactDetails = [
    'Call: (237) 681-812-255',
    'Email: fildineesoe@gmail.com',
    'Address: 0123 Some place',
    'Some country',
  ]

  const socialIcons = [
    { name: 'LinkedIn', icon: ASSETS.footer.socialIn },
    { name: 'Facebook', icon: ASSETS.footer.socialFb },
    { name: 'Instagram', icon: ASSETS.footer.socialInsta },
  ]

  return (
    <footer className="samypodval">
      <div className="podvalobshiy">
        <div className="podvalsetka">
          <div className="brendchast">
            <h2 className="brendzagol">Meddical</h2>
            <p className="brendslogan">
              Leading the Way in Medical Execellence, Trusted Care.
            </p>
          </div>

          <div className="ssylkichast">
            <h3 className="ssylkizagol">Important Links</h3>
            <div className="ssylkispisok">
              {importantLinks.map((linkText, idx) => (
                <p key={idx} className="ssylkapunkt">
                  {linkText}
                </p>
              ))}
            </div>
          </div>

          <div className="kontaktchast">
            <h3 className="kontaktzagol">Contact Us</h3>
            <div className="kontaktspisok">
              {contactDetails.map((detail, idx) => (
                <p key={idx} className="kontaktpunkt">
                  {detail}
                </p>
              ))}
            </div>
          </div>

          <div className="rassylkachast">
            <h3 className="rassylkazagol">Newsletter</h3>
            <button type="button" className="pochtainputknopka">
              <span>Enter your email address</span>
              <img
                src={ASSETS.footer.send}
                alt="Send icon"
                className="pochtainputicon"
              />
            </button>
          </div>
        </div>

        <hr className="razdelitellinia" />

        <div className="nizpodvala">
          <p className="avtorprava">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </p>

          <div className="socsetipodval">
            {socialIcons.map((item, idx) => (
              <img
                key={idx}
                src={item.icon}
                alt={item.name}
                className="socikonkapodval"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
