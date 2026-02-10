import { useEffect, useRef } from "react";
import { useBookings } from "../../context/BookingContext";
import type { BookingData } from "../../Pages/Booking";

const StepSuccess = ({ data }: { data: BookingData }) => {
  const { addBooking } = useBookings();
  const hasSubmitted = useRef(false);

  useEffect(() => {
    // 🚫 Prevent duplicate submit (React StrictMode)
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;

    // ✅ Guard: ensure required fields exist
    if (
      !data.service ||
      !data.stylist ||
      !data.date ||
      !data.time ||
      !data.name ||
      !data.phone
    ) {
      return;
    }

    addBooking({
      id: crypto.randomUUID(), // ✅ string
      service: data.service,
      stylist: data.stylist,
      date: data.date,
      time: data.time,
      clientName: data.name,
      phone: data.phone,
      status: "Pending",
    });


  }, []);

  return (
    <div className="success-screen">
      <h2>Booking Confirmed 🎉</h2>

      <p>
        Thank you <strong>{data.name}</strong>!
      </p>

      <ul>
        <li><strong>Service:</strong> {data.service}</li>
        <li><strong>Stylist:</strong> {data.stylist}</li>
        <li><strong>Date:</strong> {data.date}</li>
        <li><strong>Time:</strong> {data.time}</li>
      </ul>

      <p>Our team will contact you shortly.</p>
    </div>
  );
};

export default StepSuccess;
