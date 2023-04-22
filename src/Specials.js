import bike from "./assets/icons_assets/bike.svg";
import greek from "./assets/icons_assets/Greek_salad.svg";
import bruchetta from "./assets/icons_assets/bruchetta.svg";
import lemon from "./assets/icons_assets/Lemon_dessert.svg";

export default function Specials() {
  return (
    <article className="highlights">
      <div className="header">
        <h1>This weeks specials!</h1>
        <button className="custom_btn">Online Menu</button>
      </div>
      <div className="cards">
        <div className="card">
          <img src={greek} alt="greek salad" />
          <div className="container">
            <div className="title_price">
              <h3>Greek salad</h3>
              <h4>$12.99</h4>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="order">
              <a href="order_online">Order A Delivery</a>
              <img src={bike} alt="bike img" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={bruchetta} alt="greek salad" />
          <div className="container">
            <div className="title_price">
              <h3>Bruchetta</h3>
              <h4>$5.99</h4>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <div className="order">
              <a href="order_online">Order A Delivery</a>
              <img src={bike} alt="bike img" />
            </div>
          </div>
        </div>
        <div className="card">
          <img src={lemon} alt="greek salad" />
          <div className="container">
            <div className="title_price">
              <h3>Lemon Dessert</h3>
              <h4>$5.00</h4>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <div className="order">
              <a href="order_online">Order A Delivery</a>
              <img src={bike} alt="bike img" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
