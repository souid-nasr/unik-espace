import React from 'react'
import Link from 'next/link'
function Call() {
  return (
    
    <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="zoom-out">

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link className="cta-btn" href="/contact">Call To Action</Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Call