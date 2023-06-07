"use client"
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import Image from "next/image";
// import {galerie} from '../../constants/data'
const Gallery = ({data}) => {

  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (el) => {
    setImageModal(true);
    setImageSource(el);
  };

  return (
    <div className="work section-p" id="work">
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

      <div className="container">
        <div className="work-content">
          <div className="work-list grid">
            {data.map((el) => {
              return (
              
                  <div
                    className="work-item"
                    key={el._id}
                    onClick={() => setImageOnModal((el.image))}
                  >
                    <Image src={el.image} alt="" />
                    <span className="work-item-icon">
                      <BsPlusLg size={38} className="text-brown" />
                    </span>
                  </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
