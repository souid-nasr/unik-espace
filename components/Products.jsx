import React from 'react'
import cuisine from "../assets/img/cuisine/kitchen_1920.jpg";
import dressing from "../assets/img/dressing/dressing_1280.jpg";
import bibliotheque from "../assets/img/bibliotheque/bibliotheque_1.jpg";
import Link from 'next/link';
import Image from 'next/image'
function Products() {
  return (
    <>
    
    <section id="products" className="products">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
        
          <span>DÉCOUVREZ NOTRE SAVOIR-FAIRE</span>
          <h2>DÉCOUVREZ NOTRE SAVOIR-FAIRE</h2>

                <p>Avec Agencements MG, votre interlocuteur vous accompagne de A à Z dans la réalisation de votre projet : cuisines, dressings, placards, bibliothèques, mobiliers de salon, sous escalier, sous pente, verrières, séparations de pièces et lits relevables.
Nous vous proposons la possibilité d’aménager l’ensemble de votre habitat sur-mesure.</p>
        </div>

        <div className="row gy-5">

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="product-item">
              <div className="img">
                <Image src={cuisine} className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <Link href="/portfolio/cuisines" className="stretched-link">
                  <h3>Cuisines</h3>
                </Link>
                {/* <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p> */}
              </div>
            </div>
          </div>




        </div>

      </div>
    </section>
    </>
  )
}

export default Products