import React from 'react'
import { GoTools } from "react-icons/go";

function Featured() {
  return (
    <section id="featured-services" className="featured-services">
    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
          <div className="icon flex-shrink-0"><GoTools className=""></GoTools></div>
          <div>
            <h4 className="title">Construction</h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            <a href="/services" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="icon flex-shrink-0"><i className="bi bi-truck"></i></div>
          <div>
            <h4 className="title">Livraison</h4>
            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            <a href="/service" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="icon flex-shrink-0"><i className="bi bi-house-check"></i></div>
          <div>
            <h4 className="title">Instalation</h4>
            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <a href="/services" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Featured