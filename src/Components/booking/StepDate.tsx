import { useState } from "react";
import type { BookingData } from "../../Pages/Booking";

/* ✅ DEFINE PROPS */
interface Props {
  next: () => void;
  back: () => void;
  updateData: (data: Partial<BookingData>) => void;
}

const StepDate = ({ next, back, updateData }: Props) => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!date) {
      setError("Please select a date");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(date);

    if (selectedDate < today) {
      setError("Date cannot be in the past");
      return;
    }

    setError("");
    updateData({ date });
    next();
  };

  return (
    <>
      <h2>Select Date</h2>

      <input
        type="date"
        className="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <div className="actions">
        <button className="btn outline" onClick={back}>
          Back
        </button>
        <button className="btn primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default StepDate;
