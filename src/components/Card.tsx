import { FunctionComponent } from "react";
import star from "../images/logo/star.png";

interface CardProps {
  image: string;
  rating: number;
  ratingCount: number;
  description: string;
  price: number;
  country: string;
}

const Card: FunctionComponent<CardProps> = (cardProps: CardProps) => {
  return (
    <div className="card">
      <img src={cardProps.image} className="card--image" />
      <span className="rating">
        <img className="rating--image" src={star} />
        <span>{cardProps.rating.toFixed(1)}</span>
        <span className="gray">
          ({cardProps.ratingCount}) • {cardProps.country}
        </span>
      </span>
      <span className="regular">{cardProps.description}</span>
      <span>
        <span className="bold">From ${cardProps.price}</span>{" "}
        <span className="regular">/ Person</span>
      </span>
    </div>
  );
};

export default Card;
