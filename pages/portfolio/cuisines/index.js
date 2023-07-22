"use client";
import React from "react";
import Kichen from "@/assets/img/cuisine/c1.jpg";
import Kichen_1 from "@/assets/img/cuisine/c2.jpg";
import Kichen_2 from "@/assets/img/cuisine/c4.jpg";
import Kichen_3 from "@/assets/img/cuisine/c5.jpg";
import Kichen_4 from "@/assets/img/cuisine/c6.jpg";
import Kichen_5 from "@/assets/img/cuisine/c7.jpg";
import Kichen_6 from "@/assets/img/cuisine/c8.jpg";
import Kichen_7 from "@/assets/img/cuisine/c3.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 1",
    image: Kichen,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 2",
    image: Kichen_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 3",
    image: Kichen_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 4",
    image: Kichen_3,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 5",
    image: Kichen_3,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 6",
    image: Kichen_4,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 7",
    image: Kichen_5,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 8",
    image: Kichen_6,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 8",
    image: Kichen_7,
  },
];

function Cuisine() {
  return (
    <>
      <Breadcrumbs
        title="Nos Cuisines"
        subtitle="Trouver le style de votre cuisine .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">


                  <h3>CUISINE MODERNE</h3>
                  <p>
                    Les cuisines modernes se caractérisent par leur design
                    contemporain, fonctionnel et esthétiquement attrayant. Elles
                    intègrent souvent des éléments innovants, des matériaux de
                    haute qualité et des technologies avancées pour offrir une
                    expérience culinaire pratique et agréable.
                  </p>
                  <p>
                    Elles se distinguent par leur design minimaliste et épuré.
                    Les lignes sont souvent droites et nettes, avec une absence
                    dl&#39;ornements superflus.{" "}
                  </p>
                  <p>
                    Les armoires et les surfaces de travail sont souvent lisses
                    et sans poignées visibles, créant ainsi une apparence propre
                    et élégante.{" "}
                  </p>
                  <p>
                    Les matériaux utilisés dans ces cuisines sont souvent des
                    matériaux contemporains tels que, le stratifié, le verre, le
                    marbre, et le métal en acier inoxydable.{" "}
                  </p>
                  <p>
                    Ces matériaux confèrent à la cuisine une allure sophistiquée
                    et durable.
                  </p>
                  <h3>CUISINE MODERNE STYLE FRAMCAIS</h3>
                  <p>
                    La cuisine moderne de style français combine
                    l&#39;esthétique contemporaine avec des éléments de design
                    traditionnels français.
                  </p>
                  <p>
                    Ce style met souvent en valeur des armoires en bois de
                    qualité. Elles peuvent être dotées de finitions lisses ou
                    texturées, créant ainsi un aspect chaleureux et naturel.
                  </p>
                  <p>
                    Il se caractérise par ses couleurs douces et subtiles; Les
                    teintes populaires incluent les tons de blanc cassé, de
                    crème, de gris clair et de beige. Ces couleurs créent une
                    ambiance calme et élégante.
                  </p>
                  <p>
                    le style est riche aussi par des détails décoratifs
                    traditionnelle comme les moulures sur les armoires, et les
                    pieds sculptés. Ces éléments apportent une touche de
                    sophistication et de raffinemen. Il se caractérise aussi par
                    un plan de travail en marbre ou en quartz, ces matériaux
                    haut de gamme ajoutent une touche de luxe à l&#39;espace et
                    offrent une surface durable et facile à entretenir.
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

export default Cuisine;
