"use client";
import React from "react";
import dressing from "@/assets/img/dressing/dressing_1280.jpg";
import dressing_1 from "@/assets/img/dressing/d1.jpg";
import dressing_2 from "@/assets/img/dressing/d3.jpg";
import dressing_3 from "@/assets/img/dressing/d4.jpg";
import dressing_4 from "@/assets/img/dressing/d5.jpg";
import dressing_5 from "@/assets/img/dressing/d6.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 1",
    image: dressing_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 2",
    image: dressing_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 3",
    image: dressing_3,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 4",
    image: dressing_4,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 5",
    image: dressing_5,
  },
];

function Dressings() {
  return (
    <>
      <Breadcrumbs
        title="Dressings sur-mesure"
        subtitle="Des solutions personnalisées pour votre dressing .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <h2 className="title">DRESSINGS SUR MESURE</h2>
                <div className="content">
                  <blockquote>
                    <p>
                      L’accompagnement et le conseil pour un dressing à votre
                      image
                    </p>
                  </blockquote>
                  <p>
                    Le dressing est un espace dédié au rangement de vêtements.
                    Nous vous accompagnons dans votre réflexion afin d’optimiser
                    au maximum la place disponible.{" "}
                  </p>
                  <h3> DRESSING MODERNE</h3>
                  <p>
                    Les dressings modernes se distinguent par leur design épuré
                    et minimaliste, leur fonctionnalité optimisée et
                    l’utilisation de matériaux contemporains. Ils offrent des
                    solutions de rangement intelligentes pour optimiser l’espace
                    et faciliter l’organisation des vêtements et des
                    accessoires. Ils intègrent également des technologies
                    avancées, tels que l’éclairage LED, les systèmes
                    d’automatisation et les dispositifs de contrôle intelligent.
                  </p>
                  <p>
                    Ils créent ainsi des espaces esthétiques, fonctionnels et
                    pratiques pour faciliter le rangement.
                  </p>

                  <h3>CHAMBRE A DRESSING</h3>
                  <p>
                    Les chambres à dressing sont conçues pour offrir des espaces
                    de rangement fonctionnels et organisés. Elles intègrent des
                    solutions intelligentes telles que des penderies, des
                    étagères modulables et des tiroirs pour faciliter
                    l’organisation des vêtements et des accessoires. Les
                    chambres à dressing permettent d’optimiser l’espace de
                    manière esthétique et pratique, offrant ainsi un
                    environnement idéal pour s’habiller et se préparer chaque
                    jour.
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

export default Dressings;
