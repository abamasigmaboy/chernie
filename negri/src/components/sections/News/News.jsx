import ASSETS from '../../../constants/assets'
import './News.scss'

export default function News() {
  const newsArticles = [
    {
      id: 1,
      date: 'Monday 05, September 2021 | By Author',
      title: "This Article’s Title goes Here, but not too long.",
      thumbnail: ASSETS.news.thumb,
      statsIcon: ASSETS.news.stats,
    },
    {
      id: 2,
      date: 'Monday 05, September 2021 | By Author',
      title: "This Article’s Title goes Here, but not too long.",
      thumbnail: ASSETS.news.thumb,
      statsIcon: ASSETS.news.stats,
    },
    {
      id: 3,
      date: 'Monday 05, September 2021 | By Author',
      title: "This Article’s Title goes Here, but not too long.",
      thumbnail: ASSETS.news.thumb,
      statsIcon: ASSETS.news.stats,
    },
    {
      id: 4,
      date: 'Monday 05, September 2021 | By Author',
      title: "This Article’s Title goes Here, but not too long.",
      thumbnail: ASSETS.news.thumb,
      statsIcon: ASSETS.news.stats,
    },
  ]

  return (
    <section id="news" className="sedmoyblok">
      <div className="novostivnutri">
        <header className="novostishapka">
          <h2 className="novostimaly">
            Better information, Better health
          </h2>
          <p className="novostibolshoy">News</p>
        </header>

        <div className="chetyrenovostisetka">
          {newsArticles.map((article) => (
            <article key={article.id} className="novostkarta">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="novostkartinka"
              />

              <div className="novosttekst">
                <span className="novostdata">{article.date}</span>
                <h3 className="novostzagol">
                  {article.title}
                </h3>
                <img
                  src={article.statsIcon}
                  alt="Article metrics"
                  className="novoststatistika"
                />
              </div>
            </article>
          ))}
        </div>

        <img
          src={ASSETS.news.dots}
          alt="Pagination dots"
          className="tochkinovosti"
        />
      </div>
    </section>
  )
}
