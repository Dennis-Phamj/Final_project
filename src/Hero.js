import hero_img from "./assets/icons_assets/hero_food.svg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <article className="hero_group">
      <span className="hero_background"></span>
      <div className="hero_content">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twists
          </p>
          <Link to="/booking">
            <button className="custom_btn">Reserve a Table</button>
          </Link>
        </div>
        <img src={hero_img} alt="food img" />
      </div>
    </article>
  );
}
