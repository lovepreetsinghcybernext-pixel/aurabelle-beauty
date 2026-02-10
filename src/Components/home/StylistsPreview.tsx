import { NavLink } from "react-router-dom";
import "./StylistsPreview.scss";
import FlairButton from "../ui/FlairButton";
import expert1 from "../../assets/images/expert1.jpg";
import expert2 from "../../assets/images/expert2.jpg";
import expert3 from "../../assets/images/expert3.jpg";

<>
  <img src={expert1} alt="Expert" />
  <img src={expert2} alt="Expert" />
  <img src={expert3} alt="Expert" />
</>


const stylists = [
  {
    name: "Sophia Miller",
    role: "Senior Hair Stylist",
    experience: "8+ Years Experience",
    image: expert1,
  },
  {
    name: "Ava Johnson",
    role: "Makeup Artist",
    experience: "Bridal & Editorial Expert",
    image: expert2,
  },
  {
    name: "Isabella Brown",
    role: "Spa Therapist",
    experience: "Wellness Specialist",
    image: expert3,
  },
];

const StylistsPreview = () => {
  return (
    <section className="stylists-preview">
      <div className="container">

        {/* Section Header */}
        <div className="stylists-header">
          <h2>Meet Our Expert Stylists</h2>
          <p>
            Our professionals are handpicked for their expertise,
            creativity, and passion for beauty & wellness.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="stylists-grid">
          {stylists.map((stylist, index) => (
            <div className="stylist-card" key={index}>

              <div className="stylist-image">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  loading="lazy"
                />
              </div>

              <h3>{stylist.name}</h3>
              <p className="role">{stylist.role}</p>
              <p className="exp">{stylist.experience}</p>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="stylists-cta">
          <NavLink to="/stylists">
            <FlairButton label="View All Stylists" variant="outline" />
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default StylistsPreview;
