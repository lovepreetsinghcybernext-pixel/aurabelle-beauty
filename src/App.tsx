import { Routes, Route } from "react-router-dom";
import "./Styles/global.scss";

/* Pages */
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Booking from "./Pages/Booking";
import Stylists from "./Pages/Stylists";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLogin from "./Pages/AdminLogin";
import Gallery from "./Pages/Gallery";

/* Layout */
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";

/* Auth */
import ProtectedRoute from "./Components/auth/ProtectedRoute";

import ScrollToTop from "./Components/common/ScrollToTop";
import CustomCursor from "./Components/ui/CustomCursor";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <CustomCursor />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/stylists" element={<Stylists />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Admin Auth */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
