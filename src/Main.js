import hero_img from "./assets/icons_assets/hero_food.svg";
import bike from "./assets/icons_assets/bike.svg";
import greek from "./assets/icons_assets/Greek_salad.svg";
import bruchetta from "./assets/icons_assets/bruchetta.svg";
import lemon from "./assets/icons_assets/Lemon_dessert.svg";
import star from "./assets/icons_assets/stars.svg";
import ava1 from "./assets/icons_assets/ava1.svg";
import ava2 from "./assets/icons_assets/ava2.svg";
import ava3 from "./assets/icons_assets/ava3.svg";
import ava4 from "./assets/icons_assets/ava4.svg";
import about_img from "./assets/icons_assets/about.svg";

export default function Main() {
  return (
    <main>
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
            <button className="custom_btn">Reserve a Table</button>
          </div>
          <img src={hero_img} alt="food img" />
        </div>
      </article>
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
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
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
      <article className="testimonials">
        <h1>Testimonials</h1>
        <div className="comments">
          <div className="review">
            <img src={star} alt="5*" />
            <div className="avatar">
              <img src={ava1} alt="avatar" />
              <div className="profile">
                <span className="name">Sara Lopez</span>
                <span className="id">Sara72</span>
              </div>
            </div>
            <p>
              “Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”
            </p>
          </div>
          <div className="review">
            <img src={star} alt="5*" />
            <div className="avatar">
              <img src={ava2} alt="avatar" />
              <div className="profile">
                <span className="name">Jon do</span>
                <span className="id">Johnny_Utah</span>
              </div>
            </div>
            <p>
              “We had such a great time celebrating my grandmothers bitthday!”
            </p>
          </div>
          <div className="review">
            <img src={star} alt="5*" />
            <div className="avatar">
              <img src={ava3} alt="avatar" />
              <div className="profile">
                <span className="name">Sara Lopez</span>
                <span className="id">Sara72</span>
              </div>
            </div>
            <p>“Best Feta Salad in town. Flawless everytime!”</p>
          </div>
          <div className="review">
            <img src={star} alt="5*" />
            <div className="avatar">
              <img src={ava4} alt="avatar" />
              <div className="profile">
                <span className="name">Sara Lopez</span>
                <span className="id">Sara72</span>
              </div>
            </div>
            <p>“Such a chilled out atmosphere - love it!”</p>
          </div>
        </div>
      </article>
      <article className="about">
        <div className="about_content">
          <div className="about_title">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <img src={about_img} alt="about LL" />
      </article>
    </main>
  );
}
