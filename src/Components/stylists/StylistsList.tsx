import { NavLink } from "react-router-dom";
import "./StylistsList.scss";

/* ================= TYPES ================= */

interface Stylist {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialty: string;
}

/* ================= DATA ================= */

const stylistsData: Stylist[] = [
  {
    id: 1,
    name: "Sophia Miller",
    role: "Senior Hair Stylist",
    experience: "8+ Years Experience",
    specialty: "Haircuts, Coloring",
  },
  {
    id: 2,
    name: "Ava Johnson",
    role: "Makeup Artist",
    experience: "6+ Years Experience",
    specialty: "Bridal & Party Makeup",
  },
  {
    id: 3,
    name: "Isabella Brown",
    role: "Spa Therapist",
    experience: "7+ Years Experience",
    specialty: "Wellness & Relaxation",
  },
  {
    id: 4,
    name: "Liam Wilson",
    role: "Men’s Grooming Expert",
    experience: "5+ Years Experience",
    specialty: "Beard & Hair Styling",
  },
  {
    id: 5,
    name: "Emma Davis",
    role: "Skin Specialist",
    experience: "6+ Years Experience",
    specialty: "Facials & Skin Therapy",
  },
  {
    id: 6,
    name: "Noah Anderson",
    role: "Nail Technician",
    experience: "4+ Years Experience",
    specialty: "Manicure & Pedicure",
  },
];

/* ================= COMPONENT ================= */

const StylistsList = () => {
  return (
    <section className="stylists-page">
      <div className="container">

        {/* Header */}
        <div className="stylists-header">
          <h1>Meet Our Expert Stylists</h1>
          <p>
            Our team of professionals is dedicated to delivering
            personalized beauty and wellness experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="stylists-grid">
          {stylistsData.map((stylist) => (
            <div className="stylist-card" key={stylist.id}>

              {/* Image Placeholder */}
              <div className="stylist-image">
                {stylist.name.charAt(0)}
              </div>

              {/* Info */}
              <h3>{stylist.name}</h3>
              <p className="role">{stylist.role}</p>
              <p className="experience">{stylist.experience}</p>
              <p className="specialty">{stylist.specialty}</p>

              {/* CTA */}
              <NavLink
                to="/booking"
                className="btn outline stylist-btn"
              >
                Book with {stylist.name.split(" ")[0]}
              </NavLink>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StylistsList;
