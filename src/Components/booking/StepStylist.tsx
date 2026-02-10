interface Props {
  next: () => void;
  back: () => void;
  updateData: (data: any) => void;
}

const stylists = ["Sophia", "Ava", "Isabella", "Liam"];

const StepStylist = ({ next, back, updateData }: Props) => {
  return (
    <>
      <h2>Select Stylist</h2>

      <div className="options-grid">
        {stylists.map((s) => (
          <button
            key={s}
            className="option-card"
            onClick={() => {
              updateData({ stylist: s });
              next();
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <button className="btn outline" onClick={back}>Back</button>
    </>
  );
};

export default StepStylist;
