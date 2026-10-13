import Hero from '../../components/sections/Hero/Hero'
import About from '../../components/sections/About/About'
import Services from '../../components/sections/Services/Services'
import Specialties from '../../components/sections/Specialties/Specialties'
import Appointment from '../../components/sections/Appointment/Appointment'
import Doctors from '../../components/sections/Doctors/Doctors'
import News from '../../components/sections/News/News'
import Contacts from '../../components/sections/Contacts/Contacts'

export default function HomePage() {
  return (
    <main className="glavnayastranitsa">
      <Hero />
      <About />
      <Services />
      <Specialties />
      <Appointment />
      <Doctors />
      <News />
      <Contacts />
    </main>
  )
}
