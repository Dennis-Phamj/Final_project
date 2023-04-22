import star from "./assets/icons_assets/stars.svg";
import ava1 from "./assets/icons_assets/ava1.svg";
import ava2 from "./assets/icons_assets/ava2.svg";
import ava3 from "./assets/icons_assets/ava3.svg";
import ava4 from "./assets/icons_assets/ava4.svg";

export default function Reviews() {
  return (
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
  );
}
