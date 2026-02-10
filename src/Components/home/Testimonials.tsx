import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.scss";


const testimonials = [
  {
    name: "Emily Watson",
    role: "Hair & Spa Client",
    review:
      "Absolutely loved the experience! The staff was professional, warm, and the results exceeded my expectations.",
  },
  {
    name: "Rachel Green",
    role: "Bridal Makeup Client",
    review:
      "From consultation to final look, everything was flawless. I felt confident and beautiful on my big day.",
  },
  {
    name: "Olivia Martinez",
    role: "Wellness Therapy Client",
    review:
      "The ambience, the service, and the attention to detail are unmatched. Truly a luxury salon experience.",
  },
  {
    name: "Sophia Turner",
    role: "Hair Styling Client",
    review:
      "The stylists really listened to what I wanted. I walked out feeling refreshed and confident.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials testimonials-split">
      <div className="container testimonials-inner">

        {/* LEFT */}
        <div className="testimonials-feature">
          <span className="eyebrow">Testimonials</span>
          <h2>
            Clients don’t just visit us.
            <span> They trust us.</span>
          </h2>
          <p>
            We take pride in delivering exceptional beauty and wellness
            experiences that our clients love and remember.
          </p>
        </div>

        {/* RIGHT */}
        <div className="testimonials-carousel">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".testimonials-pagination",
              clickable: true,
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <p className="review">“{item.review}”</p>

                  <div className="client">
                    <div className="avatar">
                      {item.name.charAt(0)}
                    </div>

                    <div className="info">
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ REQUIRED */}
          <div className="testimonials-pagination" />
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
