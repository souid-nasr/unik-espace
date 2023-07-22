"use client";
import React from "react";
import chambre from "@/assets/img/chambre/chambre.jpg";
import chambre_1 from "@/assets/img/chambre/chambre_1.jpg";
import chambre_2 from "@/assets/img/chambre/chambre_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 1",
    image: chambre_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 2",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 3",
    image: chambre_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 4",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 5",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 6",
    image: chambre_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 7",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 8",
    image: chambre_1,
  },
];

function Chambres() {
  return (
    <>
      <Breadcrumbs
        title="Nos chambres d'enfants"
        subtitle="La solution parfaite pour le confort du couchage de vos enfants .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>CHAMBRE D’ENFANTS</h3>
                  <p>
                    Unik Espace met également son savoir-faire et sa créativité
                    au service de la conception de chambres d’enfants qui
                    allient fonctionnalité, sécurité et imagination.{" "}
                  </p>

                  <p>
                    Les chambres d’enfants conçues par Unik Espace sont adaptées
                    aux besoins spécifiques des plus jeunes, tout en reflétant
                    leur personnalité et en favorisant leur épanouissement.{" "}
                  </p>
                  <p>
                    Les chambres sont aménagées de manière ludique et colorée,
                    avec des meubles ergonomiques et des solutions de rangement
                    optimisées pour faciliter l’organisation des jouets, des
                    vêtements et des fournitures scolaires.{" "}
                  </p>
                  <p>
                    La sécurité est une priorité, avec l’utilisation de
                    matériaux non toxiques et durables, ainsi que des
                    dispositifs de protection adaptés à l’âge. Les chambres
                    d’enfants d’Unik Espace sont conçues pour grandir avec les
                    enfants, offrant ainsi des solutions évolutives et
                    modulables qui s’adaptent à leurs besoins en constante
                    évolution.{" "}
                  </p>
                  <p>
                    L’objectif est de créer un espace unique où les enfants se
                    sentiront à l’aise, inspirés et heureux de passer du temps,
                    favorisant ainsi leur développement harmonieux et leur
                    bien-être.{" "}
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

export default Chambres;
