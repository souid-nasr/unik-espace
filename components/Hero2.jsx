"use client"
import React, { useState,useEffect } from 'react';
import cuisine from '../assets/img/cuisine/kitchen_1920.jpg'
import dressing from '../assets/img/dressing/dressing_1280.jpg'
import bibliotheque from '../assets/img/bibliotheque/bibliotheque_1.jpg'
import Link from 'next/link';

import Image from 'next/image';
function App() {
  const slides = [
    {
      url: cuisine,
      title: "Cuisine",
      path:"/cuisine"
    },
    {
      url: dressing,
      title: "dressing",
      path:"/dressing"
    },
    {
      url: bibliotheque,
      title: "bibliotheque",
      path:"/bibliotheque"
    },
  ];
  const [currentSlide,setCurrentSlide]=useState(0)
const bgImageStyle={
  backgroundImage:`url(${slides[currentSlide].url})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  // height:"100vh"
}
  return (
    <>
    <div style={{backgroundImage:`url(${cuisine})`}}></div>
<div style={{backgroundImage:`url(${cuisine})`}}>
<section
          id="hero"
          className="hero" 
        >
          <div className="text-white uppercase ">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
              {/* <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p> */}
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Grow with data.
              </h1>
              <div className="flex justify-center items-center">
                {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p> */}
                {/* <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
              </div>
              <p className="md:text-2xl text-xl font-bold text-white">
                Monitor your data analytics to increase revenue for BTB, BTC, &
                SASS platforms.
              </p>
              <Link href="/">
                <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                  voir toutes les dressings{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>
        </div>
        </>
  );
}

export default App;