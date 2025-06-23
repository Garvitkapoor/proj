import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Purchases from "./pages/Purchases";
import Transfers from "./pages/Transfers";
import Assignments from "./pages/Assignments";
import { AuthProvider } from "./auth";
import { RequireRole } from "./roleGuard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/purchases"
              element={
                <RequireRole roles={["Admin", "Logistics Officer"]}>
                  <Purchases />
                </RequireRole>
              }
            />
            <Route
              path="/transfers"
              element={
                <RequireRole roles={["Admin", "Logistics Officer"]}>
                  <Transfers />
                </RequireRole>
              }
            />
            <Route
              path="/assignments"
              element={
                <RequireRole roles={["Admin", "Base Commander"]}>
                  <Assignments />
                </RequireRole>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
