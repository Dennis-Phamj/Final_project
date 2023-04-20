import footer_img from "./assets/icons_assets/footer_img.svg";

export default function Footer() {
  return (
    <footer>
      <img src={footer_img} alt="food" />
      <nav>
        <ul className="doormat_nav">
          <h1>doormat navigation</h1>
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/blog">menu</a>
          </li>
          <li>
            <a href="/blog">reservations</a>
          </li>
          <li>
            <a href="/blog">order online</a>
          </li>
          <li>
            <a href="/blog">login</a>
          </li>
        </ul>
      </nav>
      <nav className="contact">
        <ul>
          <h1>contact</h1>
          <li>
            <a href="/home">address</a>
          </li>
          <li>
            <a href="/about">phone number</a>
          </li>
          <li>
            <a href="/blog">email</a>
          </li>
        </ul>
      </nav>
      <nav className="social_media">
        <ul>
          <h1>social media links</h1>
          <li>
            <a href="/home">address</a>
          </li>
          <li>
            <a href="/about">phone number</a>
          </li>
          <li>
            <a href="/blog">email</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
