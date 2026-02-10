import { useState } from "react";
import StepService from "../Components/booking/StepService";
import StepStylist from "../Components/booking/StepStylist";
import StepDate from "../Components/booking/StepDate";
import StepTime from "../Components/booking/StepTime";
import StepClient from "../Components/booking/StepClient";
import StepSuccess from "../Components/booking/StepSuccess";

export interface BookingData {
  service?: string;
  stylist?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  email?: string;
}

const Booking = () => {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<BookingData>({});

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const updateData = (newData: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <section className="booking-page">
      <div className="container booking-box">

        {step === 1 && <StepService next={next} updateData={updateData} />}
        {step === 2 && <StepStylist next={next} back={back} updateData={updateData} />}
        {step === 3 && <StepDate next={next} back={back} updateData={updateData} />}
        {step === 4 && <StepTime next={next} back={back} updateData={updateData} />}
        {step === 5 && <StepClient next={next} back={back} updateData={updateData} />}
        {step === 6 && <StepSuccess data={data} />}

      </div>
    </section>
  );
};

export default Booking;
