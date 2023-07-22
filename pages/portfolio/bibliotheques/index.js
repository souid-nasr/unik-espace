"use client";
import React from "react";
import bibliotheque_1 from "@/assets/img/bibliotheque/bibliotheque_1.jpg";
import bibliotheque_2 from "@/assets/img/bibliotheque/bibliotheque_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 1",
    image: bibliotheque_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 2",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 3",
    image: bibliotheque_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 4",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 5",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 6",
    image: bibliotheque_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 7",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 8",
    image: bibliotheque_1,
  },
];

function Bibliotheques() {
  return (
    <>
      <Breadcrumbs
        title="Nos bibliotheques"
        subtitle="Trouver le style de votre bibliotheque .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>Bibliothéque et sous éscalier:</h3>
                  <p>
                    Unik Espace excelle également dans la conception de
                    bibliothèques sur mesure et la transformation des espaces
                    sous escaliers, offrant ainsi des solutions fonctionnelles
                    et esthétiques pour maximiser l&#39;utilisation de
                    l&#39;espace.
                  </p>
                  <p>
                    Les bibliothèques sur mesure conçues par Unik Espace sont
                    adaptées aux besoins spécifiques de chaque client, offrant
                    un espace de rangement optimal pour les livres, les objets
                    décoratifs et les collections personnelles. Les
                    bibliothèques peuvent être réalisées dans une variété de
                    styles, du traditionnel au moderne, en utilisant des
                    matériaux de haute qualité tels que le bois massif, le
                    stratifié, ou encore le verre et le métal, créant ainsi des
                    pièces uniques et durables.{" "}
                  </p>
                  <p>
                    L&#39;équipe d&#39;Unik Espace est experte dans la
                    maximisation de l&#39;espace sous escaliers en concevant des
                    solutions sur mesure qui s&#39;adaptent parfaitement à
                    l&#39;espace disponible et aux besoins spécifiques du
                    client.{" "}
                  </p>
                  <p>
                    Que ce soit pour créer une bibliothèque élégante et
                    fonctionnelle ou pour transformer l&#39;espace sous
                    escaliers en une zone pratique et esthétique, Unik Espace
                    met son expertise et son savoir-faire au service de chaque
                    projet.{" "}
                  </p>
                  <p>
                    En travaillant en étroite collaboration avec les clients,
                    l&#39;équipe d&#39;Unik Espace conçoit des solutions sur
                    mesure qui optimisent l&#39;utilisation de l&#39;espace,
                    ajoutent une touche de style unique et répondent aux besoins
                    et aux préférences individuelles.{" "}
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-5">
              <div className="sidebar">
                <div className="sidebar-item ">
                  <h3 className="sidebar-title">Galerie des photos</h3>
                </div>
                <Gallery data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bibliotheques;
