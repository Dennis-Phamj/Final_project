import footer_img from "./assets/icons_assets/footer_img.svg";

export default function Footer() {
  return (
    <footer>
      <img src={footer_img} alt="food" />
      <nav className="doormat_nav">
        <ul>
          <h1>doormat navigation</h1>
          <li>
            <a href="/" aria-label="On Click">
              home
            </a>
          </li>
          <li>
            <a href="/about" aria-label="On Click">
              about
            </a>
          </li>
          <li>
            <a href="/menu" aria-label="On Click">
              menu
            </a>
          </li>
          <li>
            <a href="/booking" aria-label="On Click">
              reservations
            </a>
          </li>
          <li>
            <a href="/order_online" aria-label="On Click">
              order online
            </a>
          </li>
          <li>
            <a href="/login" aria-label="On Click">
              login
            </a>
          </li>
        </ul>
      </nav>
      <nav className="contact">
        <ul>
          <h1>contact</h1>
          <li>
            <a href="/adress" aria-label="On Click">
              address
            </a>
          </li>
          <li>
            <a href="/number" aria-label="On Click">
              phone number
            </a>
          </li>
          <li>
            <a href="/email" aria-label="On Click">
              email
            </a>
          </li>
        </ul>
      </nav>
      <nav className="social_media">
        <ul>
          <h1>social media links</h1>
          <li>
            <a href="/adress" aria-label="On Click">
              address
            </a>
          </li>
          <li>
            <a href="/number" aria-label="On Click">
              phone number
            </a>
          </li>
          <li>
            <a href="/email" aria-label="On Click">
              email
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
