import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TypesCarousel = ({ selectedTypeIndex, types, onChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider
      {...settings}
      initialSlide={selectedTypeIndex}
      afterChange={onChange}
    >
      {types.map(type => (
        <Type key={type} type={type} />
      ))}
    </Slider>
  );
};

TypesCarousel.propTypes = {};

export default TypesCarousel;

const Type = ({ type }) => {
  return (
    <div>
      <h3>{type}</h3>
    </div>
  );
};
