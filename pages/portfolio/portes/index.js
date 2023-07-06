"use client";
import React from "react";
import porte_0 from "@/assets/img/porte/porte.jpg";
import porte_1 from "@/assets/img/porte/porte_1.jpg";
import porte_2 from "@/assets/img/porte/porte_2.jpg";


import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 1",
    image: porte_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 2",
    image: porte_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 3",
    image: porte_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 4",
    image: porte_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 5",
    image: porte_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 6",
    image: porte_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 7",
    image: porte_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 8",
    image: porte_1,
  },
];

function porte() {
  return (
    <>
      <Breadcrumbs
        title="Portes"
        subtitle="L’accompagnement et le conseil pour un projet qui vous ressemble .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <p>
                    Unik Espace excelle également dans la conception et la
                    fabrication de portes intérieures et extérieures, offrant
                    des solutions esthétiques et fonctionnelles pour embellir et
                    sécuriser votre espace.
                  </p>

                  <blockquote>
                    <p>
                      Les portes intérieures conçues par Unik Espace sont
                      réalisées avec une attention particulière aux détails et à
                      la qualité des matériaux.
                    </p>
                  </blockquote>

                  <p>
                    Elles sont disponibles dans une variété de styles, de
                    finitions et de designs pour s’adapter à tous les goûts et à
                    tous les décors. Que vous recherchiez des portes modernes,
                    classiques, minimalistes ou rustiques, Unik Espace propose
                    des options sur mesure pour répondre à vos besoins
                    spécifiques.
                  </p>
                  <p>
                    Les portes intérieures peuvent être réalisées en bois noble,
                    en panneaux de bois stratifié ou en combinaison de
                    matériaux, offrant à la fois durabilité et esthétique.
                  </p>
                  <p>
                    En ce qui concerne les portes extérieures, Unik Espace met
                    l’accent sur la sécurité, la durabilité et l’esthétique.
                  </p>
                  <p>
                    Les portes extérieures sont fabriquées avec des matériaux de
                    haute qualité, résistants aux intempéries et aux
                    effractions. Elles peuvent être personnalisées avec des
                    finitions et des motifs pour s’harmoniser avec le style
                    architectural de votre maison. Les portes extérieures d’Unik
                    Espace offrent non seulement une protection, mais elles
                    ajoutent également une touche d’élégance à l’entrée de votre
                    maison.
                  </p>
                  <p>
                    Que ce soit pour rehausser l’apparence de vos espaces
                    intérieurs avec des portes élégantes ou pour sécuriser votre
                    maison avec des portes extérieures de qualité, Unik Espace
                    offre des solutions sur mesure qui répondent à vos exigences
                    spécifiques.
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

export default porte;
