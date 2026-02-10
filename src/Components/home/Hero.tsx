import { NavLink } from "react-router-dom";
import "./Hero.scss";
import FlairButton from "../ui/FlairButton";
import HeroImageFlip from "./HeroImageFlip";
import ScrollText from "../ui/ScrollText";


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <ScrollText text="Experience" />{" "}
            <span className="highlight">
              <ScrollText text="Luxury" />
            </span>
            <br />
            <span className="highlight">
              <ScrollText text="Beauty" />
            </span>{" "}
            <ScrollText text="& Wellness" />
          </h1>

          <p>
            Book premium salon & spa services with expert stylists.
            Elevate your beauty experience today.
          </p>

          <div className="hero-actions">
            <NavLink to="/booking">
              <FlairButton label="Book Appointment" />
            </NavLink>

            <NavLink to="/services">
              <FlairButton label="View Services" variant="outline" />
            </NavLink>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-image">
          <HeroImageFlip />
        </div>


      </div>
    </section>
  );
};

export default Hero;
