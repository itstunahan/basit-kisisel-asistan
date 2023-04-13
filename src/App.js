import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Kişisel Dijital Asistanlar</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa, Amazon tarafından oluşturuldu ve bir şeyler satın almanıza yardımcı oluyor."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana, Microsoft tarafından yapılmıştır. Kim bilir ne yapar?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri, Apple tarafından yapıldı ve aşamalı olarak kullanımdan kaldırılıyor"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
