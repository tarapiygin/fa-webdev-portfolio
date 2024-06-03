import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LangChanger from '../LangChanger/LangChanger';

import './Navigation.style.scss';
import logo from '../../asset/logo.png';

export default function Navigation() {
  const lang = useSelector((state) => state.lang);
  console.log(lang);

  return (
    <div>
      <div className="container p-0">
        <nav className="navbar Navigation">
          <div className="container">
            <NavLink className="navbar-brand" to="/fa-webdev-portfolio/">
              <img src={logo} alt="Logo" className="navLogo d-inline-block align-text-top" />
            </NavLink>

            <span className="navbar-text">
              <NavLink to={`/fa-webdev-portfolio/${lang}/contact`}>{lang === 'ru' ? 'Связаться со мной' : 'Contact me'}</NavLink>
            </span>
          </div>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      <LangChanger />
    </div>
  );
}
