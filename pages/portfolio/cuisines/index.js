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
                {/* <div className="post-img">
                  <Image quality={100} src={Kichen} alt="" className="img-fluid" />
                </div>

                <h2 className="title">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </h2>

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a href="product-details.html">John Doe</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="product-details.html">
                        <time dateTime="2020-01-01">Jan 1, 2022</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <a href="product-details.html">12 Comments</a>
                    </li>
                  </ul>
                </div> */}

                <div className="content">
                  {/* <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>

                  <p>
                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                    reiciendis. Sequi in accusamus harum vel aspernatur.
                    Excepturi numquam nihil cumque odio. Et voluptate
                    cupiditate.
                  </p> */}

                  <blockquote>
                    <p>
                      Qu&#39;est-ce qu&#39;une cuisine aménagée ? C&#39;est du
                      rangement bien sûr ! mais avant tout de l&#39;ergonomie et
                      de la convivialité : car ne l&#39;oublions pas,
                      aujourd&#39;hui quasiment toutes les cuisines sont
                      ouvertes et forment un lieu de vie avec le séjour.
                    </p>
                  </blockquote>

                  {/* <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus
                    omnis dicta inventore tempore provident voluptas mollitia
                    aliquid. Id repellendus quia. Asperiores nihil magni dicta
                    est suscipit perspiciatis. Voluptate ex rerum assumenda
                    dolores nihil quaerat. Dolor porro tempora et quibusdam
                    voluptas. Beatae aut at ad qui tempore corrupti velit
                    quisquam rerum. Omnis dolorum exercitationem harum qui qui
                    blanditiis neque. Iusto autem itaque. Repudiandae hic quae
                    aspernatur ea neque qui. Architecto voluptatem magni. Vel
                    magnam quod et tempora deleniti error rerum nihil tempora.
                  </p> */}

                  <h3>
                    {" "}
                    Un cuisiniste, tel que nous le concevons, doit avant tout
                    prendre le temps de vous connaître.
                  </h3>
                  <p>
                    Vous écoutez, ce qui doit nous permettre non pas de « vous
                    proposer nos cuisines » mais surtout de réaliser VOTRE
                    cuisine.
                  </p>
                  <p>
                    Prenons le temps et discutons-en ensemble… qu&#39;importe le
                    style pourvu qu&#39;on ait l&#39;ivresse !
                  </p>

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

                {/* <div className="meta-bottom">
                  <i className="bi bi-folder"></i>
                  <ul className="cats">
                    <li>
                      <a href="#">Business</a>
                    </li>
                  </ul>

                  <i className="bi bi-tags"></i>
                  <ul className="tags">
                    <li>
                      <a href="#">Creative</a>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div> */}
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
