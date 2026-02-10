import { useState } from "react";
import type { BookingData } from "../../Pages/Booking";

/* ✅ Define Props */
interface Props {
  next: () => void;
  back: () => void;
  updateData: (data: Partial<BookingData>) => void;
}

const StepClient = ({ next, back, updateData }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !email) {
      setError("All fields are required");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter a valid mobile number");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    updateData({ name, phone, email });
    next();
  };

  return (
    <>
      <h2>Your Details</h2>

      <input
        className="input"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <div className="actions">
        <button className="btn outline" onClick={back}>
          Back
        </button>
        <button className="btn primary" onClick={handleSubmit}>
          Confirm Booking
        </button>
      </div>
    </>
  );
};

export default StepClient;
