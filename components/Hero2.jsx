import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import Image from "next/image";
import dressings from "../assets/img/dressing/dressing_1280.jpg";
import bibliotheques from "../assets/img/bibliotheque/bibliotheque_1.jpg";
import chambres from "../assets/img/chambre/chambre.jpg";
import habillages from "../assets/img/habillage/habillage.jpg";
import portes from "../assets/img/porte/porte.jpg";
import separations from "../assets/img/separation/separation.jpg";
import sousescaliers from "../assets/img/sousescalier/sousescalier.jpg";
const Slider = ({ slides }) => {
  SwiperCore.use([Navigation, Autoplay, Pagination]);
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >

        <SwiperSlide >
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
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/cuisines">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les cuisines{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
        <SwiperSlide >
          <section
            id="hero"
            className="hero bg-[url('../assets/img/dressing/dressing_1280.jpg')] bg-cover	"
          >
            <div className="text-white uppercase bg-black/50 ">
              <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                  Dressings{" "}
                </h1>
                <div className="flex justify-center items-center"></div>
                <p className="md:text-2xl text-xl font-bold text-white">
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/dressings">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les dressings{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
        <SwiperSlide >
          <section
            id="hero"
            className="hero bg-[url('../assets/img/bibliotheque/bibliotheque_1.jpg')] bg-cover	"
          >
            <div className="text-white uppercase bg-black/50 ">
              <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                  Bibliothèques{" "}
                </h1>
                <div className="flex justify-center items-center"></div>
                <p className="md:text-2xl text-xl font-bold text-white">
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/bibliotheques">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les bibliothèques{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
        <SwiperSlide >
          <section
            id="hero"
            className="hero bg-[url('../assets/img/chambre/chambre.jpg')] bg-cover	"
          >
            <div className="text-white uppercase bg-black/50 ">
              <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                  Chambres d’enfants {" "}
                </h1>
                <div className="flex justify-center items-center"></div>
                <p className="md:text-2xl text-xl font-bold text-white">
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/chambres">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les Chambres d’enfants{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
        <SwiperSlide >
          <section
            id="hero"
            className="hero bg-[url('../assets/img/habillage/habillage.jpg')] bg-cover	"
          >
            <div className="text-white uppercase bg-black/50 ">
              <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                  Habillages {" "}
                </h1>
                <div className="flex justify-center items-center"></div>
                <p className="md:text-2xl text-xl font-bold text-white">
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/habillages">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les Habillages{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
        <SwiperSlide >
          <section
            id="hero"
            className="hero bg-[url('../assets/img/porte/porte.jpg')] bg-cover	"
          >
            <div className="text-white uppercase bg-black/50 ">
              <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                  Portes {" "}
                </h1>
                <div className="flex justify-center items-center"></div>
                <p className="md:text-2xl text-xl font-bold text-white">
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/portes">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les Portes{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
        <SwiperSlide >
          <section
            id="hero"
            className="hero bg-[url('../assets/img/separation/separation.jpg')] bg-cover	"
          >
            <div className="text-white uppercase bg-black/50 ">
              <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                  Separations {" "}
                </h1>
                <div className="flex justify-center items-center"></div>
                <p className="md:text-2xl text-xl font-bold text-white">
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/separations">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les Separations{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
        <SwiperSlide >
          <section
            id="hero"
            className="hero bg-[url('../assets/img/sousescalier/sousescalier.jpg')] bg-cover	"
          >
            <div className="text-white uppercase bg-black/50 ">
              <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
                Sous escaliers {" "}
                </h1>
                <div className="flex justify-center items-center"></div>
                <p className="md:text-2xl text-xl font-bold text-white">
                  Monitor your data analytics to increase revenue for BTB, BTC,
                  & SASS platforms.
                </p>
                <Link href="/portfolio/sousescaliers">
                  <button className="uppercase  rounded-full font-medium my-6 px-3 py-3 border-red border-2 text-white">
                    voir toutes les Sous escaliers{" "}
                  </button>
                </Link>
              </div>
            </div>
          </section>{" "}
        </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
