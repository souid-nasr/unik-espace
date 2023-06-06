import React from "react";
import about_img from "../assets/img/about.jpg";
import Image from "next/image";
import Stats from "@/components/Stats";
import Breadcrumbs from "@/components/Breadcrumbs";
function About() {
  return (
    <div>
      <Breadcrumbs
        title="A propos "
        subtitle="Avec Unik Espace, votre interlocuteur vous accompagne de A à Z dans la réalisation de votre projet : cuisines, dressings, placards, bibliothèques, mobiliers de salon, séparations de pièces et lits relevables.
        Nous vous proposons la possibilité d’aménager l’ensemble de votre habitat sur-mesure.
        "
      />
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <Image src={about_img} alt="/" className="img-fluid" />{" "}
              {/* <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox play-btn"
              ></a> */}
            </div>
            <div className="col-lg-6 content order-last  order-lg-first">
              <h3>About Us</h3>
              <p>
                … avec Unik Espace qui est spécialiste de l’aménagement
                d’intérieur sur mesure : dressings, placards, bibliothèques,
                cuisines depuis 2016
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h5>UNE LARGE GAMME DE PRODUITS</h5>
                    <p>
                      Avec la sélection rigoureuse de nos fournisseurs nous
                      pouvons proposer un large choix en termes de styles, de
                      matières et de finitions qui nous permettrons de répondre
                      au plus près à vos attentes.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h5>DES CONSEILS ADAPTÉS À VOS BESOINS</h5>
                    <p>
                      Votre interlocuteur unique, de la conception au suivi de
                      votre projet, vous conseillera et vous accompagnera tout
                      au long de sa réalisation.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-broadcast"></i>
                  <div>
                    <h5>Voluptatem et qui exercitationem</h5>
                    <p>
                      Et velit et eos maiores est tempora et quos dolorem autem
                      tempora incidunt maxime veniam
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Stats />
    </div>
  );
}

export default About;
