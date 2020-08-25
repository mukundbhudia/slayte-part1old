import React from "react";

import "./WrapImages.css";
import MyImage from "./MyImage";

const WrapImages = ({ images }) => {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);
  return (
    <div className="imgRow">
      {images.map((img, i) => {
        return (
          <div key={i}>
            <MyImage src={img.src} width={img.maxImageWidth} />
          </div>
        );
      })}
    </div>
  );
};

export default WrapImages;
