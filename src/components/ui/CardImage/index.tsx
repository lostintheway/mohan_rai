import React from "react";
import "./CardImage.css"; // Import your CSS file for styling

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

function CardImage({ imageUrl, title, description }: Props) {
  return (
    <div className="image-card-wrapper">
      <div className="image-card">
        <img src={imageUrl} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardImage;