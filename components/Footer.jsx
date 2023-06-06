import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div>
          <footer id="footer" className="footer">

<div className="container">
  <div className="row gy-4">
    <div className="col-lg-5 col-md-12 footer-info">
      <a href="index.html" className="logo d-flex align-items-center">
        <span>Unik Espace</span>
      </a>
      <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
      <div className="social-links d-flex mt-4">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
    <div className="col-lg-2 col-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>

    <div className="col-lg-2 col-6 footer-links">
      <h4>Our Services</h4>
      <ul>
        <li><Link href="#">Web Design</Link></li>
        <li><Link href="#">Web Development</Link></li>
        <li><Link href="#">Product Management</Link></li>
        <li><Link href="#">Marketing</Link></li>
        <li><Link href="#">Graphic Design</Link></li>
      </ul>
    </div>

    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
      <h4>Contact Us</h4>
      <p>
        A108 Adam Street <br/>
        New York, NY 535022<br/>
        United States <br/><br/>
        <strong>Phone:</strong> +1 5589 55488 55<br/>
        <strong>Email:</strong> info@example.com<br/>
      </p>

    </div>
  </div>
</div>

<div className="container mt-4">
  <div className="copyright">
    &copy; Copyright <strong><span>Unik Group</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
  Designed by <a href="https://nasrsouid.vercel.app/">Nasr</a>
  </div>
</div>

</footer>
    </div>
  )
}

export default Footer