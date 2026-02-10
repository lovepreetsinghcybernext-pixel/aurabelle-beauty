import "./Booking.scss";

interface Props {
  next: () => void;
  updateData: (data: any) => void;
}

const services = ["Haircut", "Spa Therapy", "Makeup", "Nail Care"];

const StepService = ({ next, updateData }: Props) => {
  return (
    <>
      <h2>Select Service</h2>

      <div className="options-grid">
        {services.map((s) => (
          <button
            key={s}
            className="option-card"
            onClick={() => {
              updateData({ service: s });
              next();
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </>
  );
};

export default StepService;
