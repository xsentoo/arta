import React from 'react';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <video className="hero-video" autoPlay loop muted>
        <source src="/Artagif.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
      <section className="home">
        <h1>Bienvenue</h1>
      </section>

      {/* Sections de contenu */}
      <div className="content">
        {/* Section À propos avec les vidéos en vertical */}
        <section className="about">
          <div className="video-cards">
            {/* Vidéo 1 */}
            <div className="video-card">
              <video className="about-video" autoPlay loop muted>
                <source src="/vid1.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la vidéo.
              </video>
            </div>

            {/* Vidéo 2 */}
            <div className="video-card">
              <video className="about-video" autoPlay loop muted>
                <source src="/vid2.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la vidéo.
              </video>
            </div>

            {/* Vidéo 3 */}
            <div className="video-card">
              <video className="about-video" autoPlay loop muted>
                <source src="/vid3.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la vidéo.
              </video>
            </div>
          </div>
        </section>

        {/* Section Création */}
        <section className="creation">
          <h2>Création</h2>
          <p>Cette section présente nos projets créatifs et nos réalisations.</p>
        </section>

        {/* Section Contact */}
        <section className="contact">
          <h2>Contact</h2>
          <p>N'hésitez pas à nous contacter pour plus d'informations ou pour toute demande.</p>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
