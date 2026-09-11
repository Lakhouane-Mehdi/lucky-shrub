import logo from "../assets/logos/logo-light.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <img src={logo} alt="Lucky Shrub logo" width="60" height="121" />
      </div>
      <div className="footer-col">
        <p>&copy; {new Date().getFullYear()} Lucky Shrub. All rights reserved.</p>
      </div>
    </footer>
  );
}
