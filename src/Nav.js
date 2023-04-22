export default function Nav() {
  return (
    <nav className="header_nav">
      <ul>
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
  );
}
