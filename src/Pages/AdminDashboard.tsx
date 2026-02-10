import AppointmentTable from "../Components/admin/AppointmentTable";

const AdminDashboard = () => {
  return (
    <section className="admin-page">
      <div className="container">
        <div className="dashboard-header">
          <div className="dashboard-heading">
            <h1>Admin Dashboard</h1>
            <p>Manage salon appointments and update their status.</p>
          </div>

          <button className="btn primary"
            onClick={() => {
              localStorage.removeItem("isAdmin");
              window.location.href = "/admin";
            }}
          >
            Logout
          </button>

        </div>

        <AppointmentTable />
      </div>
    </section>
  );
};

export default AdminDashboard;
