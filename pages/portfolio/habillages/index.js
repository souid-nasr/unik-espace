"use client";
import React from "react";
import habillage_0 from "@/assets/img/habillage/habillage.jpg";
import habillage_1 from "@/assets/img/habillage/habillage_1.jpg";
import habillage_2 from "@/assets/img/habillage/habillage_1.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 1",
    image: habillage_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 2",
    image: habillage_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 3",
    image: habillage_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 4",
    image: habillage_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 5",
    image: habillage_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 6",
    image: habillage_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 7",
    image: habillage_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 8",
    image: habillage_1,
  },
];

function Habillages() {
  return (
    <>
      <Breadcrumbs
        title="Habillages"
        subtitle="Les aménagements intérieurs sur mesure .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>HABILLAGE MURAL</h3>
                  <p>
                    Unik Espace excelle dans la création d’habillages muraux en
                    bois noble et en panneau stratifié, offrant ainsi des
                    solutions élégantes et durables pour transformer les murs en
                    véritables éléments de design.
                  </p>
                  <p>
                    Les habillages muraux en bois noble sont conçus pour
                    apporter chaleur, caractère et sophistication à tout espace.
                  </p>
                  <p>
                    Des essences de bois nobles telles que le chêne, le frêne et
                    le hêtre sont soigneusement sélectionnées pour leur beauté
                    naturelle et leur résistance.
                  </p>
                  <p>
                    Les panneaux stratifiés offrent une alternative moderne et
                    polyvalente, imitant l’apparence du bois avec une durabilité
                    accrue et une facilité d’entretien. Ils sont disponibles
                    dans une large gamme de finitions et de couleurs, permettant
                    de créer des effets visuels uniques et d’harmoniser
                    l’habillage mural avec le style global de la pièce.
                  </p>
                  <p>
                    L’équipe d’Unik Espace travaille en étroite collaboration
                    avec les clients pour comprendre leurs besoins et leurs
                    préférences, afin de créer des habillages muraux sur mesure
                    qui s’adaptent parfaitement à leur espace et à leur
                    esthétique. Que ce soit pour une résidence privée, un
                    restaurant, un hôtel ou un espace commercial, les habillages
                    muraux en bois noble et en panneau stratifié d’Unik Espace
                    ajoutent une touche d’élégance intemporelle et de
                    raffinement à tout environnement.
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

export default Habillages;
