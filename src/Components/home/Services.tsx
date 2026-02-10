import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlairButton from "../ui/FlairButton";
import "./Services.scss";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Hair Styling",
    desc: "Precision cuts, coloring & styling tailored to your look.",
  },
  {
    title: "Spa & Wellness",
    desc: "Relaxing therapies designed to rejuvenate body & mind.",
  },
  {
    title: "Makeup Artistry",
    desc: "Professional makeup for weddings & events.",
  },
  {
    title: "Nail Care",
    desc: "Luxury manicure & pedicure treatments.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".service-item").forEach((item) => {
      gsap.fromTo(
        item,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="services services-split" ref={sectionRef}>
      <div className="container services-inner">

        {/* LEFT SIDE */}
        <div className="services-left">
          <h2>
            Our Services
          </h2>

          <p>
            Crafted experiences designed to enhance your beauty,
            confidence, and wellness with expert care.
          </p>

          <NavLink to="/services">
            <FlairButton label="View All Services" variant="outline" />
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="services-right">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <span className="count">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
