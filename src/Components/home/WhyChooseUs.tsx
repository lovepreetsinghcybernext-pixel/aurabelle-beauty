import "./WhyChooseUs.scss";

const benefits = [
  {
    title: "Expert Professionals",
    desc: "Our stylists and therapists are highly trained, certified, and passionate about their craft.",
  },
  {
    title: "Luxury Ambience",
    desc: "Enjoy a calm, elegant environment designed to relax your mind and elevate your experience.",
  },
  {
    title: "Premium Products",
    desc: "We use only top-quality, skin-safe, and salon-grade products for all treatments.",
  },
  {
    title: "Personalized Care",
    desc: "Every service is tailored to your unique style, preferences, and wellness needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">

        {/* Header (UNCHANGED) */}
        <div className="why-header">
          <h2>Why Choose Aurabelle</h2>
          <p>
            We combine expertise, luxury, and personalized care to deliver
            an exceptional salon & spa experience.
          </p>
        </div>

        {/* NEW LAYOUT */}
        <div className="benefits-layout">
          <div className="benefits-col">
            <div className="benefit-card">
              <div className="benefit-icon">1</div>
              <h3>{benefits[0].title}</h3>
              <p>{benefits[0].desc}</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">3</div>
              <h3>{benefits[1].title}</h3>
              <p>{benefits[1].desc}</p>
            </div>
          </div>

          <div className="benefits-col">
            <div className="benefit-card">
              <div className="benefit-icon">2</div>
              <h3>{benefits[2].title}</h3>
              <p>{benefits[2].desc}</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">4</div>
              <h3>{benefits[3].title}</h3>
              <p>{benefits[3].desc}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
