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

function Pieces() {
  return (
    <>
      <Breadcrumbs
        title="Nos Pièces unik"
        subtitle="Trouver le style de votre décoration exceptionnelles .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <blockquote>
                    <p>
                      Il est donc primordial de concilier harmonieusement
                      l&#39;espace de travail et de détente. C&#39;est à cela
                      que nous sommes aussi attentifs.
                    </p>
                  </blockquote>

                  <h3>PIECES UNIK</h3>
                  <p>
                    Unik Espace se spécialise dans la création de pièces de
                    décoration exceptionnelles en bois, telles que des fauteuils
                    et des banquettes, qui se démarquent par leur beauté
                    naturelle, leur confort et leur originalité. Que vous
                    souhaitiez ajouter une pièce maîtresse remarquable à votre
                    salon ou créer une atmosphère accueillante dans votre salle
                    à manger, Unik Espace propose des pièces en bois uniques qui
                    apporteront une touche distincte à votre intérieur.
                  </p>
                  <p>
                    Les pièces en bois conçues sont des éléments de décoration
                    polyvalents et conviviaux. Elles sont entièrement
                    personnalisables en termes de taille, de forme et de style
                    pour s&#39;adapter parfaitement à chaque espace et créer une
                    ambiance unique. Qu&#39;il s&#39;agisse d&#39;un salon,
                    d&#39;une salle à manger, d&#39;une entrée ou même d&#39;un
                    espace extérieur, ces créations apportent une chaleur et une
                    convivialité indéniables.{" "}
                  </p>
                  <p>
                    Les matériaux utilisés sont sélectionnés avec une grande
                    attention pour garantir une durabilité et une résistance
                    optimales. Chaque pièce en bois est conçue pour résister à
                    l&#39;épreuve du temps et à une utilisation régulière, tout
                    en conservant son charme naturel.{" "}
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

export default Pieces;
