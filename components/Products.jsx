import React from "react";
import cuisine from "../assets/img/cuisine/c1.jpg";
import dressings from "../assets/img/dressing/d1.jpg";
import bibliotheques from "../assets/img/bibliotheque/bibliotheque_1.jpg";
import chambres from "../assets/img/chambre/chambre.jpg";
import habillages from "../assets/img/habillage/habillage.jpg";
import portes from "../assets/img/porte/porte.jpg";
import separations from "../assets/img/separation/separation.jpg";
import sousescaliers from "../assets/img/sousescalier/sousescalier.jpg";
import Link from "next/link";
import Image from "next/image";
import { IoFingerPrintOutline } from "react-icons/io5";

function Products() {
  const data = [
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: cuisine,
      title: "Cuisines",
      path: "/portfolio/cuisines",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: dressings,
      title: "Dressings",
      path: "/portfolio/dressings",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: bibliotheques,
      title: "Bibliotheques",
      path: "/portfolio/bibliotheques",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: chambres,
      title: "Chambres d’enfants",
      path: "/portfolio/chambres-enfants",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: chambres,
      title: "Chambres à coucher",
      path: "/portfolio/chambres-a-coucher",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: habillages,
      title: "Habillages",
      path: "/portfolio/habillages",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: portes,
      title: "Portes",
      path: "/portfolio/portes",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: separations,
      title: "Separations",
      path: "/portfolio/separations",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: sousescaliers,
      title: "Pieces Unik",
      path: "/portfolio/pieces-unik",
    },
  ];
  return (
    <>
      <section id="products" className="products">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>DÉCOUVREZ NOTRE SAVOIR-FAIRE</span>
            <h2>DÉCOUVREZ NOTRE SAVOIR-FAIRE</h2>

            <p>
              Unik Espace est une société spécialisée dans l’aménagement
              intérieur sur mesure. Avec une équipe de designers qualifiés, elle
              offre des services personnalisés de conception et de
              transformation d’espaces intérieurs. En utilisant des matériaux de
              qualité et en intégrant des technologies innovantes, Unik Espace
              crée des aménagements esthétiques et fonctionnels. La société gère
              l’ensemble du projet, respectant les normes et les délais, et
              propose une sélection de mobilier adapté. Son objectif est de
              réaliser des espaces intérieurs uniques et personnalisés,
              répondant parfaitement aux besoins et aux préférences des clients.
            </p>
          </div>

          <div className="row gy-3">
            {data.map((el) => {
              return (
                <div
                  className="col-xl-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  key={el._id}
                >
                  <div className="product-item">
                    <div className="img">
                      <Image
                        quality={100}
                        src={el.url}
                        className="img-fluid"
                        alt="cuisine"
                      />
                    </div>
                    <div className="details position-relative">
                      <div className="icon">
                        <IoFingerPrintOutline />
                      </div>
                      <Link
                        href={el.path}
                        style={{ textDecoration: "none" }}
                        className="stretched-link"
                      >
                        <h3>{el.title}</h3>
                      </Link>
                      {/* <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
