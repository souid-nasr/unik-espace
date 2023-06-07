"use client";
import React, { useState } from "react";
import Kichen from "@/assets/img/cuisine/kitchen_1920.jpg";
import Kichen_1 from "@/assets/img/cuisine/kitchen_1.jpg";
import Kichen_2 from "@/assets/img/cuisine/kitchen_2.jpg";

import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import Gallery from "@/components/Gallery";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 1",
    image: Kichen_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 2",
    image: Kichen_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 3",
    image: Kichen_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 4",
    image: Kichen_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 5",
    image: Kichen_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 6",
    image: Kichen_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 7",
    image: Kichen_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "kichen 8",
    image: Kichen_1,
  },
];
const ModalImage = () => {
  
  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (el) => {
    setImageModal(true);
    setImageSource(el);
  };

  return (
    <>
      <div className={imageModal ? "image-box show-image-box" : "image-box"}>
        <div className="image-box-content">
          <Image src={imageSource} alt="" />
          <span
            className="image-box-close-btn"
            onClick={() => setImageModal(false)}
          >
            <ImCancelCircle size={30} />
          </span>
        </div>
      </div>
      {data.map((el) => {
        return (
          <div
            className="col-lg-4 col-md-6 portfolio-item filter-app"
            key={el._id}
            onClick={() => setImageOnModal(el.image)}
          >
            <div className="portfolio-wrap">
              <Image
                style={{ height: "300px" }}
                src={el.image}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>{el.title}</h4>
                <div className="portfolio-links">
                  {/* <a
                  href="../assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a> */}
                  <a
                    title="App 1"
                    data-gallery="portfolio-gallery"
                    className="glightbox preview-link"
                  >
                    <i
                      className="bi bi-zoom-in"
                      onClick={() => setImageOnModal(el.image)}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
function Cuisine() {
  return (
    <section id="product" className="product">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-9">
            <article className="product-details">
              <div className="post-img">
                <Image src={Kichen} alt="" className="img-fluid" />
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
              </div>

              <div className="content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore.
                </p>

                <p>
                  Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                  reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
                  numquam nihil cumque odio. Et voluptate cupiditate.
                </p>

                <blockquote>
                  <p>
                    Et vero doloremque tempore voluptatem ratione vel aut.
                    Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                    autem quos.
                  </p>
                </blockquote>

                <p>
                  Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                  dicta inventore tempore provident voluptas mollitia aliquid.
                  Id repellendus quia. Asperiores nihil magni dicta est suscipit
                  perspiciatis. Voluptate ex rerum assumenda dolores nihil
                  quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut
                  at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum
                  exercitationem harum qui qui blanditiis neque. Iusto autem
                  itaque. Repudiandae hic quae aspernatur ea neque qui.
                  Architecto voluptatem magni. Vel magnam quod et tempora
                  deleniti error rerum nihil tempora.
                </p>

                <h3>Et quae iure vel ut odit alias.</h3>
                <p>
                  Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                  in qui quos fugit ut rerum atque. Optio provident dolores
                  atque voluptatem rem excepturi molestiae qui. Voluptatem
                  laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                  Voluptatum est libero eum nesciunt aliquid qui. Quia et
                  suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt
                  accusamus quia aut ratione aspernatur dolor. Sint harum
                  eveniet dicta exercitationem minima. Exercitationem omnis
                  asperiores natus aperiam dolor consequatur id ex sed.
                  Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                  minima sunt libero soluta sapiente in rem assumenda. Et qui
                  odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus
                  mollitia aut atque aut.
                </p>
                <Image src={Kichen} className="img-fluid" alt="" />

                <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                <p>
                  Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                  porro amet nostrum. In assumenda quia quae a id praesentium.
                  Quos deleniti libero sed occaecati aut porro autem.
                  Consectetur sed excepturi sint non placeat quia repellat
                  incidunt labore. Autem facilis hic dolorum dolores vel.
                  Consectetur quasi id et optio praesentium aut asperiores eaque
                  aut. Explicabo omnis quibusdam esse. Ex libero illum iusto
                  totam et ut aut blanditiis. Veritatis numquam ut illum ut a
                  quam vitae.
                </p>
                <p>
                  Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                  enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                  nisi asperiores est veniam.
                </p>
              </div>

              <div className="meta-bottom">
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
              </div>
            </article>
          </div>
<Gallery data={data}/>

        </div>
      </div>
    </section>
  );
}

export default Cuisine;
