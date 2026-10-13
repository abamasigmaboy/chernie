import ASSETS from '../../../constants/assets'
import './Appointment.scss'

export default function Appointment() {
  const formFieldItems = [
    { id: 'name', label: 'Name' },
    { id: 'gender', label: 'Gender' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone' },
    { id: 'date', label: 'Date' },
    { id: 'time', label: 'Time' },
    { id: 'doctor', label: 'Doctor' },
    { id: 'department', label: 'Department' },
  ]

  return (
    <section id="appointment" className="pyatyiblok">
      <div className="zapisvnutri">
        <div className="levayachast">
          <h2 className="zapistemaglava">Book an Appointment</h2>
          <p className="zapisopisukha">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Convallis felis vitae
            tortor augue. Velit nascetur proin massa in. Consequat faucibus
            porttitor enim et.
          </p>
        </div>

        <form className="temnayaforma" onSubmit={(e) => e.preventDefault()}>
          <div className="vvodsetka">
            {formFieldItems.map((field) => (
              <div key={field.id} className="vvodkletka">
                <span className="vvodnazvanie">{field.label}</span>
                <img
                  src={ASSETS.appointment.chevron}
                  alt="Dropdown Icon"
                  className="vvodstrelochka"
                />
              </div>
            ))}
          </div>

          <div className="polepisma">
            <span className="tekstpisma">Message</span>
          </div>

          <button type="submit" className="knopkaotpravit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
