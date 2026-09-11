import logo from "../assets/logos/logo-teal.png";

export default function Header() {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Lucky Shrub logo: a potted plant above the words Lucky Shrub"
        width="110"
        height="221"
      />
    </header>
  );
}
