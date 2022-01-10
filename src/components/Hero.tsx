import hero from "../images/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={hero} className="hero--image" />
      <h1 className="hero--title">Online Experiences</h1>
      <h4 className="hero--content">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h4>
    </div>
  );
}
