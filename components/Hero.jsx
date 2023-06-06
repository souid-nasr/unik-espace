"use client";
import React, { useEffect, useState } from "react";
import hero_img from "../assets/img/hero-img.svg";
import cuisine from "../assets/img/cuisine/kitchen_1920.jpg";
import dressing from "../assets/img/dressing/dressing_1280.jpg";
import bibliotheque from "../assets/img/bibliotheque/bibliotheque_1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Hero() {
  const slides = [
    {
      url: cuisine,
      title: "Cuisine",
      path: "/cuisine",
    },
    {
      url: dressing,
      title: "dressing",
      path: "/dressing",
    },
    {
      url: bibliotheque,
      title: "bibliotheque",
      path: "/bibliotheque",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const goToNext = () => {
    setCurrentSlide(currentSlide + 1);
  };
  return (
    <Carousel>
      <section
        id="hero"
        className="hero bg-[url('../assets/img/cuisine/kitchen_1920.jpg')] bg-cover	"
      >
        <div className="text-white uppercase bg-black/50 ">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
              Cuisines{" "}
            </h1>
            <div className="flex justify-center items-center"></div>
            <p className="md:text-2xl text-xl font-bold text-white">
              Monitor your data analytics to increase revenue for BTB, BTC, &
              SASS platforms.
            </p>
            <Link href="/portfolio/cuisines">
              <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                voir toutes les cuisines{" "}
              </button>
            </Link>
                        <div className="carousel-boullt">
              {" "}
              {slides.map((slides, currentSlide) => {
                <span key={currentSlide} onClick={() => goToNext(currentSlide)}>
                  1
                </span>;
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id="hero"
        className="hero bg-[url('../assets/img/dressing/dressing_1280.jpg')] bg-cover	"
      >
        <div className="text-white uppercase bg-black/50 ">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
              Dressings
            </h1>
            <div className="flex justify-center items-center"></div>
            <p className="md:text-2xl text-xl font-bold text-white">
              Monitor your data analytics to increase revenue for BTB, BTC, &
              SASS platforms.
            </p>
            <Link href="/">
              <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                voir toutes les dressings{" "}
              </button>
            </Link>
            <div className="carousel-boullt">
              {" "}
              {slides.map((slides, currentSlide) => {
                <span key={currentSlide} onClick={() => goToNext(currentSlide)}>
                  1
                </span>;
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id="hero"
        className="hero bg-[url('../assets/img/bibliotheque/bibliotheque_1.jpg')] bg-cover	"
      >
        <div className="text-white uppercase bg-black/50 ">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
              Bibliotheque.
            </h1>
            <div className="flex justify-center items-center"></div>
            <p className="md:text-2xl text-xl font-bold text-white">
              Monitor your data analytics to increase revenue for BTB, BTC, &
              SASS platforms.
            </p>
            <Link href="/">
              <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                voir toutes les Bibliotheques{" "}
              </button>
            </Link>
            <div className="carousel-boullt">
              {" "}
              {slides.map((slides, currentSlide) => {
                <span key={currentSlide} onClick={() => goToNext(currentSlide)}>
                  1
                </span>;
              })}
            </div>
          </div>
        </div>
      </section>
    </Carousel>
  );
}

export default Hero;
