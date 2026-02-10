interface Props {
  next: () => void;
  back: () => void;
  updateData: (data: any) => void;
}

const times = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

const StepTime = ({ next, back, updateData }: Props) => {
  return (
    <>
      <h2>Select Time</h2>

      <div className="options-grid">
        {times.map((t) => (
          <button
            key={t}
            className="option-card"
            onClick={() => {
              updateData({ time: t });
              next();
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <button className="btn outline" onClick={back}>Back</button>
    </>
  );
};

export default StepTime;
