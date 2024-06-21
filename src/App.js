import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import SignIn from "./auth/login/SignIn";
import Registration from "./scenes/patientRegistration";
import Payments from "./scenes/payment";
import PaymentSuccess from "./scenes/paymentSucess/PaymentSuccess";
import Medical from "./scenes/medicalSummary/medical";
import ForgotPassword from "./auth/forgot/forget";
import AppointmentForm from "./scenes/appoinment";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); // Set isAuthenticated to false on logout
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAuthenticated && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {isAuthenticated && (
              <Topbar setIsSidebar={setIsSidebar} onLogout={handleLogout} />
            )}
            <Routes>
              <Route
                path="/login"
                element={<SignIn setAuth={setIsAuthenticated} />}
              />
              <Route
                path="/"
                element={
                  isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/team"
                element={isAuthenticated ? <Team /> : <Navigate to="/login" />}
              />
              <Route
                path="/contacts"
                element={
                  isAuthenticated ? <Contacts /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/invoices"
                element={
                  isAuthenticated ? <Invoices /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/form"
                element={isAuthenticated ? <Form /> : <Navigate to="/login" />}
              />
              <Route
                path="/bar"
                element={isAuthenticated ? <Bar /> : <Navigate to="/login" />}
              />
              <Route
                path="/pie"
                element={isAuthenticated ? <Pie /> : <Navigate to="/login" />}
              />
              <Route
                path="/line"
                element={isAuthenticated ? <Line /> : <Navigate to="/login" />}
              />
              <Route
                path="/faq"
                element={isAuthenticated ? <FAQ /> : <Navigate to="/login" />}
              />
              <Route
                path="/calendar"
                element={
                  isAuthenticated ? <Calendar /> : <Navigate to="/login" />
                }
              />
              <Route path="/payment" element={<Payments />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route
                path="/geography"
                element={
                  isAuthenticated ? <Geography /> : <Navigate to="/login" />
                }
              />
              <Route path="/patientRegistration" element={<Registration />} />
              <Route path="/Test" element={<Medical />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/appoinment" element={<AppointmentForm />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
