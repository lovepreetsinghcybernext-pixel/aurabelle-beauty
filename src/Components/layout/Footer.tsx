import { NavLink } from "react-router-dom";
import "./Footer.scss";
import brandLogo from "../../assets/images/LogoLight.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        {/* Brand */}
        <div className="footer-col brand">
          <NavLink to="/">
            <img src={brandLogo} alt="Brand Logo" />
          </NavLink>
          <p>
            A premium salon & spa experience delivering beauty,
            wellness, and confidence through expert care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/stylists">Stylists</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/booking">Book Appointment</NavLink></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Hair Styling</li>
            <li>Spa & Wellness</li>
            <li>Makeup Artistry</li>
            <li>Nail Care</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="footer-col footer-cta">
          <h4>Have a Question?</h4>
          <p className="phone-link">
            <a href="tel:+917404895810">+91 74048 95810</a>
          </p>


        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aurabelle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
