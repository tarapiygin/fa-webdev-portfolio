import './Index.styles.scss';
import { useParams } from 'react-router-dom';

import myphoto from '../../asset/myphoto.png';
import email from '../../asset/email.png';
import telegram from '../../asset/telegram.png';
import vkontakte from '../../asset/vkontakte.png';

export default function Index() {
  const { lang } = useParams();

  return (
    <div>
      <div className="container-fluid container-lg mt-5">
        <div className="first-screen-container row p-4 p-md-0">
          <div className="col-md-4 p-2 d-flex align-items-center align-items-md-end justify-content-center justify-content-md-start">
            <div className="first-screen-text-container mb-lg-5">
              <div className="first-screen-text-border">
                <p className="text-center text-md-start base-text">
                  {lang === 'ru' ? `Я Web реазработчик, использую React, Redux и python.
                  Специализируюсь на доступностом и нейроинклюзивном дизайне.` : `I am a Web developer,
                  I use React, Redux and python. I specialize in accessibility and neuro-inclusive design.`}
                </p>
              </div>

              <div className="row d-flex justify-content-center justify-content-md-start">
                <div className="col-4 col-md-3 d-flex justify-content-center justify-content-md-start"><img className="social-image" src={telegram} alt="" /></div>
                <div className="col-4 col-md-3 d-flex justify-content-center justify-content-md-start"><img className="social-image" src={vkontakte} alt="" /></div>
                <div className="col-4 col-md-3 d-flex justify-content-center justify-content-md-start"><img className="social-image" src={email} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0 d-flex align-items-center justify-content-center justify-content-md-start mt-5">
            <div className="d-flex justify-content-center">
              <img className="first-screen-image" src={myphoto} alt="" />
            </div>
          </div>
          <div className="col-md-4 p-2 d-flex align-items-center align-items-md-start justify-content-center justify-content-md-end mt-5">
            <div className="mt-lg-3 first-screen-text-border">
              <h1>{lang === 'ru' ? 'Денис Васильев' : 'Denis Vassilyev'}</h1>
              <p className="text-center text-md-start base-text mb-2">{lang === 'ru' ? '(Баг — это еще не записанная  фича)' : '(yes, its a mouthful)'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-about">
        <div className="container p-4 text-md-center d-flex justify-content-center align-items-center align-items-md-end">
          <div className="row col-12 col-md-8">
            <p>
              {lang === 'ru' ? `Отличный веб-сайт по умолчанию предназначен для всех людей,
               независимо от ограничений.
                Это означает что нужно помнить что некоторые люди используют вспомогательные средства для получения информации
                 и нам нужно  не забывать о них!` : `A great website is designed for all people, by default.
              That means considering people using assistive
              technology and everyones ability to process information.`}
              {' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
