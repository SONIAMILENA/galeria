import React from "react";
import PropTypes from "prop-types";

import "./card.css";


function Card({ imageSource, title }) {
  return (
    <div className="card text-center bg-pink animateanimated animatefadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        
        
        
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;