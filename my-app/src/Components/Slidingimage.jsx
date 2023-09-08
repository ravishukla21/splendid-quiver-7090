import React from "react";
import Imageslider from "./ImageSlider";
import "./SlidingImage.css";
const slides = [
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Sep/OneCard-2000/Unrec-PC-3000._CB596309095_.jpg",
    title: "img1",
  },
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCokiu._CB596249098_.jpg",
    title: "img2",
  },
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Sep/OneCard-2000/Unrec-PC-3000._CB596309095_.jpg",
    title: "img3",
  },
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Sep/OneCard-2000/Unrec-PC-3000._CB596309095_.jpg",
    title: "img4",
  },
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Sep/OneCard-2000/Unrec-PC-3000._CB596309095_.jpg",
    title: "img5",
  },
];

const Slidingimage = () => {
  return (
    <div style={{ width: "100%", height: "600px", margin: "2px 0px" }}>
      <Imageslider slides={slides} />
    </div>
  );
};

export default Slidingimage;
