import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ServicesList.scss";
import FlairButton from "../ui/FlairButton";

/* ================= TYPES ================= */

type ServiceType = "hair" | "spa" | "makeup" | "men";

interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceCategory {
  category: string;
  type: ServiceType;
  items: ServiceItem[];
}

/* ================= DATA ================= */

const servicesData: ServiceCategory[] = [
  {
    category: "Hair Services",
    type: "hair",
    items: [
      { name: "Haircut & Styling", price: "₹1,200" },
      { name: "Hair Coloring", price: "₹3,500" },
      { name: "Hair Spa Treatment", price: "₹2,800" },
    ],
  },
  {
    category: "Spa & Wellness",
    type: "spa",
    items: [
      { name: "Full Body Massage", price: "₹4,000" },
      { name: "Aromatherapy", price: "₹3,200" },
      { name: "Facial Rejuvenation", price: "₹2,500" },
    ],
  },
  {
    category: "Makeup & Beauty",
    type: "makeup",
    items: [
      { name: "Party Makeup", price: "₹5,000" },
      { name: "Bridal Makeup", price: "₹18,000" },
      { name: "Engagement Makeup", price: "₹12,000" },
    ],
  },
  {
    category: "Nail Care",
    type: "hair",
    items: [
      { name: "Classic Manicure", price: "₹1,200" },
      { name: "Luxury Pedicure", price: "₹1,800" },
      { name: "Gel Nail Extensions", price: "₹2,500" },
    ],
  },
  {
    category: "Skin Treatments",
    type: "spa",
    items: [
      { name: "Hydra Facial", price: "₹3,500" },
      { name: "Anti-Aging Treatment", price: "₹4,200" },
      { name: "Acne Repair Therapy", price: "₹3,000" },
    ],
  },
  {
    category: "Men’s Grooming",
    type: "men",
    items: [
      { name: "Men’s Haircut", price: "₹1,000" },
      { name: "Beard Styling", price: "₹800" },
      { name: "Detan & Cleanup", price: "₹1,500" },
    ],
  },
];

/* ================= COMPONENT ================= */

const ServicesList = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | ServiceType
  >("all");

  const filteredServices =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter(
        (service) => service.type === activeFilter
      );

  return (
    <section className="services-page">
      <div className="container">

        {/* Header */}
        <div className="services-header">
          <h1>Our Services</h1>
          <p>
            Explore our premium range of salon & spa services,
            crafted to enhance your beauty and wellness.
          </p>
        </div>

        {/* Filters */}
        <div className="services-filters">
          {["all", "hair", "spa", "makeup", "men"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""
                }`}
              onClick={() =>
                setActiveFilter(filter as "all" | ServiceType)
              }
            >
              {filter === "all"
                ? "All"
                : filter.charAt(0).toUpperCase() +
                filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-categories">
          {filteredServices.map((group, index) => (
            <div className="service-category" key={index}>
              <h2>{group.category}</h2>

              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                  </li>
                ))}
              </ul>
              <NavLink to="/booking">
                <FlairButton label="Book Now" variant="outline" />
              </NavLink>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesList;
