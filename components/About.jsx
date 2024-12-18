import React from "react";
import about_img from "../assets/img/about.jpg";
import Image from "next/image";
function About() {
  return (
    <section id="about" className="about pt-0">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <Image
              quality={100}
              src={about_img}
              alt="/"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 content order-last  order-lg-first">
            <div className="section-header">
              <span>SUBLIMER VOTRE INTÉRIEUR </span>
              <h2>SUBLIMER VOTRE INTÉRIEUR </h2>{" "}
            </div>
            <p>
              Unik Espace est une société spécialisée dans ld&#39;aménagement
              intérieur sur mesure. Avec une équipe de designers qualifiés, elle
              offre des services personnalisés de conception et de
              transformation dd&#39;espaces intérieurs.
            </p>
            <p>
              En utilisant des matériaux de qualité et en intégrant des
              technologies innovantes, Unik Espace crée des aménagements
              esthétiques et fonctionnels. La société gère ld&#39;ensemble du
              projet, respectant les normes et les délais, et propose une
              sélection de mobilier adapté
            </p>{" "}
            <p>
              Son objectif est de réaliser des espaces intérieurs uniques et
              personnalisés, répondant parfaitement aux besoins et aux
              préférences des clients.
            </p>
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-diagram-3"></i>
                <div>
                  <h5>UNE LARGE GAMME DE PRODUITS</h5>
                  <p>
                    Avec la sélection rigoureuse de nos fournisseurs nous
                    pouvons proposer un large choix en termes de styles, de
                    matières et de finitions qui nous permettrons de répondre au
                    plus près à vos attentes.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>DES CONSEILS ADAPTÉS À VOS BESOINS</h5>
                  <p>
                    Votre interlocuteur unique, de la conception au suivi de
                    votre projet, vous conseillera et vous accompagnera tout au
                    long de sa réalisation.
                  </p>
                </div>
              </li>
              {/* <li data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-broadcast"></i>
                <div>
                  <h5>Voluptatem et qui exercitationem</h5>
                  <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
