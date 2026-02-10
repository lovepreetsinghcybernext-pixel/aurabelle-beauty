import { useState } from "react";
import "./AppointmentTable.scss";
import { useBookings } from "../../context/BookingContext";

type Status = "Pending" | "Confirmed" | "Completed" | "Cancelled";

const AppointmentTable = () => {
  const { bookings, updateStatus, deleteBooking } = useBookings();
  const [filterStatus, setFilterStatus] =
    useState<Status | "All">("All");

  const filteredAppointments =
    filterStatus === "All"
      ? bookings
      : bookings.filter(
        (appt) => appt.status === filterStatus
      );

  return (
    <div className="admin-card">

      {/* Filters */}
      <div className="admin-filters">
        <label>Status:</label>
        <select
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(e.target.value as Status | "All")
          }
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Table */}
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Service</th>
            <th>Stylist</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredAppointments.length === 0 ? (
            <tr>
              <td colSpan={7}>No bookings yet</td>
            </tr>
          ) : (
            filteredAppointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.clientName}</td>
                <td>{appt.service}</td>
                <td>{appt.stylist}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>

                <td>
                  <select
                    className={`status ${appt.status.toLowerCase()}`}
                    value={appt.status}
                    onChange={(e) =>
                      updateStatus(appt.id, e.target.value as Status)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>

                {/* ✅ Delete Action */}
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => {
                      if (confirm("Delete this appointment?")) {
                        deleteBooking(appt.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>

            ))
          )}
        </tbody>
      </table>

    </div>
  );
};

export default AppointmentTable;
