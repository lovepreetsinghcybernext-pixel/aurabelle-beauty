export type BookingStatus =
  | "Pending"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export type Booking = {
  id: string; // ✅ string UUID
  service: string;
  stylist: string;
  date: string;
  time: string;
  clientName: string;
  phone: string;
  status: BookingStatus;
};
