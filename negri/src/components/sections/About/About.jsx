import ASSETS from '../../../constants/assets'
import './About.scss'

export default function About() {
  return (
    <section id="about" className="vtoroyblok">
      <div className="seredina">
        <div className="tekstbaza">
          <h2 className="podzagol">Welcome to Meddical</h2>
          <p className="temaglav">A Great Place to Receive Care</p>
          <p className="dlinnytekst">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>

          <a href="#learn-more" className="chitatdalshe">
            <span className="tekstdalshe">Learn More</span>
            <span className="strelkavpravo">→</span>
          </a>
        </div>

        <div className="kartinkabaza">
          <img
            src={ASSETS.about.banner}
            alt="Welcome to Meddical"
            className="doktorafoto"
          />
        </div>
      </div>
    </section>
  )
}
