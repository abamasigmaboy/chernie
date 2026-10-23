import ASSETS from '../../../constants/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './News.scss'

const novostispisok = [
  { id: 1, title: "This Article's Title goes Here, but not too long.", date: 'Monday 05, September 2021 | By Author' },
  { id: 2, title: "This Article's Title goes Here, but not too long.", date: 'Monday 05, September 2021 | By Author' },
  { id: 3, title: "This Article's Title goes Here, but not too long.", date: 'Monday 05, September 2021 | By Author' },
  { id: 4, title: "This Article's Title goes Here, but not too long.", date: 'Monday 05, September 2021 | By Author' },
]

export default function News() {
  return (
    <section id="news" className="sedmoyblok">
      <div className="novostivnutri">
        <header className="novostishapka">
          <h2 className="novostimaly">Better information, Better health</h2>
          <p className="novostibolshoy">News</p>
        </header>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="novostislayder"
        >
          {[1, 2, 3].map((num) => (
            <SwiperSlide key={num}>
              <div className="chetyrenovostisetka">
                {novostispisok.map((item) => (
                  <article key={item.id} className="novostkarta">
                    <img
                      src={ASSETS.news.thumb}
                      alt={item.title}
                      className="novostkartinka"
                    />
                    <div className="novosttekst">
                      <span className="novostdata">{item.date}</span>
                      <h3 className="novostzagol">{item.title}</h3>
                      <img
                        src={ASSETS.news.stats}
                        alt="metrics"
                        className="novoststatistika"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <img
          src={ASSETS.news.dots}
          alt="dots"
          className="tochkinovosti"
        />
      </div>
    </section>
  )
}
