import React from "react";

const Image = ({ src, alt, height, width }) => {
  const computeSize = (image) => {
    console.log(image.height, image.width);

    return image;
  };

  let img = React.createElement("img", {
    src,
    // height,
    // width,
    // alt
    ref: (image) => {
      computeSize(image);
    }
  });
  // console.log(img.ref());

  return img;
};

export default Image;
