import React from "react";
import service from "../assets/img/service-details.jpg";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

function page() {
  return (
    <div>
      <Breadcrumbs
        title="Service details"
        subtitle="Découvrez en images la réalisation de nos agencements sur mesure"
      />
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="services-list">
                <a href="#" className="active">
                  Storage
                </a>
                <a href="#">Logistics</a>
                <a href="#">Cargo</a>
                <a href="#">Trucking</a>
                <a href="#">Packaging</a>
                <a href="#">Warehousing</a>
              </div>

              <h4>Enim qui eos rerum in delectus</h4>
              <p>
                Nam voluptatem quasi numquam quas fugiat ex temporibus quo est.
                Quia aut quam quod facere ut non occaecati ut aut. Nesciunt
                mollitia illum tempore corrupti sed eum reiciendis. Maxime modi
                rerum.
              </p>
            </div>

            <div className="col-lg-8">
              <Image quality={100} src={service} alt="" className="img-fluid services-img" />

              <h3>
                Temporibus et in vero dicta aut eius lidero plastis trand lined
                voluptas dolorem ut voluptas
              </h3>
              <p>
                Blanditiis voluptate odit ex error ea sed officiis deserunt.
                Cupiditate non consequatur et doloremque consequuntur.
                Accusantium labore reprehenderit error temporibus saepe
                perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem
                architecto eum et quos deleniti officia qui.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  <span>Aut eum totam accusantium voluptatem.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  <span>
                    Assumenda et porro nisi nihil nesciunt voluptatibus.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>{" "}
                  <span>Ullamco laboris nisi ut aliquip ex ea</span>
                </li>
              </ul>
              <p>
                Est reprehenderit voluptatem necessitatibus asperiores neque sed
                ea illo. Deleniti quam sequi optio iste veniam repellat odit.
                Aut pariatur itaque nesciunt fuga.
              </p>
              <p>
                Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam
                aut consequuntur recusandae mollitia doloremque est architecto
                cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
                repellendus eveniet velit sint quia sapiente cumque. Et ipsa
                perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
                Eaque iusto cupiditate et totam et quia dolorum in. Sunt
                molestiae ipsum at consequatur vero. Architecto ut pariatur
                autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit
                dolore alias explicabo ea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
