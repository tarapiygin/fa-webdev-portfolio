import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setLanguage } from '../../redux/actions/langActions';

import './LangChanger.style.scss';

export default function LangChanger() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const [activeButton, setActiveButton] = useState(lang);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang) => {
    setActiveButton(newLang);
    let newPath = `/${newLang}/`;
    if (newLang === 'en') {
      newPath = '/';
    } else if (location.pathname === `/${lang}/`) {
      newPath = location.pathname.replace(`/${lang}/`, `/${newLang}/`);
    }
    dispatch(setLanguage(newLang));
    navigate(newPath);
  };

  return (
    <div className="container LangChanger">
      <div className="row">
        <div className="col-6 p-0">
          <button type="button" className={`LangChanger__button ${activeButton === 'en' ? 'LangChanger__button_active' : ''}`} onClick={() => handleLanguageChange('en')}>EN</button>
        </div>
        <div className="col-6 p-0">
          <button type="button" className={`LangChanger__button ${activeButton === 'ru' ? 'LangChanger__button_active' : ''}`} onClick={() => handleLanguageChange('ru')}>РУ</button>
        </div>
      </div>
    </div>
  );
}
