import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";

const RootLayout = () => {
  const location = useLocation();

  // Check if the current route is '/dashboard'
  const hideHeader = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {/* Only show Header if not on the /dashboard route */}
      {!hideHeader && <Header />}
      <ScrollRestoration />

      <Outlet />
      {!hideHeader && <Footer />}
    </div>
  );
};

export default RootLayout;
