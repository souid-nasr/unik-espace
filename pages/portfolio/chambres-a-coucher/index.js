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
                  <p>
                    Le confort du couchage est optimal car nos produits
                    proposent un vrai sommier et un matelas de qualité. De
                    nombreuses compositions sont possibles autour du lit
                    relevable afin de venir l’intégrer au mieux dans l’espace
                    disponible. Entouré par une composition bibliothèque ou un
                    bureau.
                  </p>

                  <blockquote>
                    <p>
                      Nos solutions sur mesures permettent une optimisation de
                      n’importe quel espace
                    </p>
                  </blockquote>

                  <h3>CHAMBRE A COUCHER</h3>
                  <p>
                    Unik Espace se spécialise dans la conception et la
                    réalisation de chambres à coucher modernes et sur mesure.
                    Chaque chambre est soigneusement conçue pour offrir un
                    espace de repos contemporain et personnalisé, mettant en
                    valeur les caractéristiques suivantes:
                  </p>

                  <p>
                    - Un design minimaliste mettant en avant des lignes épurées
                    et des formes simples. Les couleurs choisies sont souvent
                    neutres et apaisantes, créant une ambiance relaxante dans la
                    chambre.
                  </p>
                  <p>
                    - L’utilisation de matériaux haut de gamme est privilégiée
                    pour les meubles et les finitions. La société Unik Espace
                    sélectionne des bois naturels nobles, des finitions laquées
                    de qualité, des métaux élégants et des tissus luxueux pour
                    les textiles, garantissant ainsi une esthétique et une
                    durabilité exceptionnelles.
                  </p>
                  <p>
                    - Chaque lit est conçu sur mesure, offrant ainsi la
                    possibilité de personnaliser la taille, le style et le
                    confort en fonction des préférences individuelles. Des
                    fonctionnalités supplémentaires telles que des têtes de lit
                    intégrées, des rangements dissimulés ou des systèmes
                    d’éclairage intégrés peuvent être ajoutées pour répondre aux
                    besoins spécifiques.
                  </p>
                  <p>
                    - Des solutions de rangement intelligentes sont intégrées à
                    la conception de la chambre à coucher. Des armoires
                    encastrées, des dressings sur mesure avec des compartiments
                    dédiés aux vêtements, aux chaussures et aux accessoires,
                    ainsi que des tiroirs coulissants et des étagères modulables
                    permettent une organisation optimale de l’espace, tout en
                    maintenant l’ordre et la fonctionnalité.
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
