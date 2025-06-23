import { Link } from "react-router-dom";
import { useAuth } from "../auth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-gray-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Military Asset Mgmt</div>
      <div className="flex space-x-4">
        <Link className="hover:underline" to="/dashboard">Dashboard</Link>
        {(user.role === "Admin" || user.role === "Logistics Officer") && (
          <>
            <Link className="hover:underline" to="/purchases">Purchases</Link>
            <Link className="hover:underline" to="/transfers">Transfers</Link>
          </>
        )}
        {(user.role === "Admin" || user.role === "Base Commander") && (
          <Link className="hover:underline" to="/assignments">Assignments</Link>
        )}
      </div>
    </nav>
  );
}
