import React from "react";
import service_1 from "../assets/img/storage-service.jpg";
import service_2 from "../assets/img/logistics-service.jpg";
import service_3 from "../assets/img/cargo-service.jpg";
import service_4 from "../assets/img/storage-service.jpg";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import Featured from "../components/Featured";
import Features from "../components/Features";
function page() {
  return (
    <div>
      <Breadcrumbs
        title="Services"
        subtitle="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
      />
      <Featured/>
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>Our Services</span>
            <h2>Our Services</h2>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img">
                  <Image src={service_1} alt="" className="img-fluid" />
                </div>
                <h3>
                  <a href="/service" className="stretched-link">
                    Storage
                  </a>
                </h3>
                <p>
                  Cumque eos in qui numquam. Aut aspernatur perferendis sed
                  atque quia voluptas quisquam repellendus temporibus
                  itaqueofficiis odit
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <div className="card-img">
                  <Image src={service_2} alt="" className="img-fluid" />
                </div>
                <h3>
                  <a href="/service" className="stretched-link">
                    Logistics
                  </a>
                </h3>
                <p>
                  Asperiores provident dolor accusamus pariatur dolore nam id
                  audantium ut et iure incidunt molestiae dolor ipsam ducimus
                  occaecati nisi
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image src={service_3} alt="" className="img-fluid" />
                </div>
                <h3>
                  <a href="/service" className="stretched-link">
                    Cargo
                  </a>
                </h3>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image src={service_4} alt="" className="img-fluid" />
                </div>
                <h3>
                  <a href="/service" className="stretched-link">
                    Cargo
                  </a>
                </h3>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image src={service_1} alt="" className="img-fluid" />
                </div>
                <h3>
                  <a href="/service" className="stretched-link">
                    Cargo
                  </a>
                </h3>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image src={service_2} alt="" className="img-fluid" />
                </div>
                <h3>
                  <a href="/service" className="stretched-link">
                    Cargo
                  </a>
                </h3>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features/>
    </div>
  );
}

export default page;
