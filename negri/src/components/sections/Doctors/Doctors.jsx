import ASSETS from '../../../constants/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Doctors.scss'

const vrachispisok = [
  { id: 1, photo: ASSETS.doctors.doctor1, imya: "Doctor's Name", spec: 'Neurology' },
  { id: 2, photo: ASSETS.doctors.doctor2, imya: "Doctor's Name", spec: 'Neurology' },
  { id: 3, photo: ASSETS.doctors.doctor3, imya: "Doctor's Name", spec: 'Neurology' },
]

export default function Doctors() {
  return (
    <section id="doctors" className="shestoyblok">
      <div className="doktoravnutri">
        <header className="doktorashapka">
          <h2 className="doktoramaly">Trusted Care</h2>
          <p className="doktorabolshoy">Our Doctors</p>
        </header>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="vrachislayder"
        >
          {[1, 2, 3].map((num) => (
            <SwiperSlide key={num}>
              <div className="troikavrachsetka">
                {vrachispisok.map((doc) => (
                  <article key={doc.id} className="vrachkarta">
                    <img
                      src={doc.photo}
                      alt={doc.imya}
                      className="vrachfoto"
                    />
                    <div className="vrachopis">
                      <p className="vrachimya">{doc.imya}</p>
                      <h3 className="vrachspec">{doc.spec}</h3>
                      <div className="vrachsocseti">
                        <img src={ASSETS.doctors.socialIn} alt="LinkedIn" className="socikonka" />
                        <img src={ASSETS.doctors.socialFb} alt="Facebook" className="socikonka" />
                        <img src={ASSETS.doctors.socialInsta} alt="Instagram" className="socikonka" />
                      </div>
                    </div>
                    <button type="button" className="profilknopka">
                      View Profile
                    </button>
                  </article>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <img
          src={ASSETS.doctors.dots}
          alt="dots"
          className="tochkislayder"
        />
      </div>
    </section>
  )
}
