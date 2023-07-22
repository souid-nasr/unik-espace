"use client";
import React from "react";
import separation_0 from "@/assets/img/separation/separation.jpg";
import separation_1 from "@/assets/img/separation/separation_1.jpg";
import separation_2 from "@/assets/img/separation/separation_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 1",
    image: separation_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 2",
    image: separation_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 3",
    image: separation_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 4",
    image: separation_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 5",
    image: separation_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 6",
    image: separation_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 7",
    image: separation_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "separation 8",
    image: separation_1,
  },
];

function Separation() {
  return (
    <>
      <Breadcrumbs
        title="Séparations en bois"
        subtitle="Les aménagements intérieurs sur mesure .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3> HABILLAGE D’ENTRÉE ET SÉPARATIONS</h3>
                  <p>
                    Les habillages d’entrées conçus par Unik Espace sont
                    réalisés avec des bois nobles de qualité supérieure tels que
                    le chêne, le frêne ou l’hêtre. Ils offrent une esthétique
                    chaleureuse et élégante, personnalisable selon les
                    préférences du client en termes de finitions, de motifs et
                    d’éléments décoratifs.
                  </p>
                  <p>
                    Les séparations en bois noble et en panneau stratifié
                    permettent de diviser les espaces de manière élégante et
                    fonctionnelle, créant des zones distinctes dans des espaces
                    tels que les salons, les salles à manger ou les bureaux.
                    Elles s’adaptent harmonieusement à la décoration intérieure
                    grâce à une variété de finitions et de styles.
                  </p>

                  <p>
                    L’équipe d’Unik Espace travaille en étroite collaboration
                    avec les clients, comprenant leurs besoins et leurs
                    préférences spécifiques en matière d’habillages d’entrées et
                    de séparations en bois noble et en panneau stratifié. Leur
                    expertise et leur savoir-faire leur permettent de concevoir
                    des solutions sur mesure répondant aux exigences esthétiques
                    et fonctionnelles de chaque projet.
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

export default Separation;
