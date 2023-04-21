import Nav from "./Nav";
import logo from "./assets/icons_assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <Nav />
    </header>
  );
}
