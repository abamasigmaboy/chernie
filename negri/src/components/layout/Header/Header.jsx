import { Link } from 'react-router-dom'
import ASSETS from '../../../constants/assets'
import './Header.scss'

export default function Header() {
  const navItems = [
    { label: 'Home', path: '/Page_1', isRouterLink: true },
    { label: 'About Us', path: '#about', isRouterLink: false },
    { label: 'Services', path: '#services', isRouterLink: false },
    { label: 'Doctor', path: '#doctors', isRouterLink: false },
    { label: 'News', path: '#news', isRouterLink: false },
    { label: 'Contact', path: '#contact', isRouterLink: false },
  ]

  return (
    <header className="verhnyayashapka">
      <nav className="navik">
        <ul className="menushnik">
          {navItems.map((item, index) => (
            <li key={index} className="punktik">
              {item.isRouterLink ? (
                <Link to={item.path} className="ssylkamenyu">
                  {item.label}
                </Link>
              ) : (
                <a href={item.path} className="ssylkamenyu">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="pravayachast">
          <img
            src={ASSETS.header.search}
            alt="Search Icon"
            className="lupaicon"
          />
          <button type="button" className="zapisalovoknopka">
            Appointment
          </button>
        </div>
      </nav>
    </header>
  )
}
