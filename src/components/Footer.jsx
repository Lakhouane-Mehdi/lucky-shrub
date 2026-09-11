import logo from "../assets/logos/logo-light.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <img src={logo} alt="Lucky Shrub logo" width="60" height="121" />
        <p className="footer-address">
          1204 East Grant Road, Tucson, AZ 85719
          <br />
          <a href="tel:+15205550147">(520) 555-0147</a>
        </p>
      </div>

      <div className="footer-col">
        <p>&copy; {new Date().getFullYear()} Lucky Shrub. All rights reserved.</p>
      </div>
    </footer>
  );
}
