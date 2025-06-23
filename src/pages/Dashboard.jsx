import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const metrics = [
    { title: "Opening Balance", value: 100, color: "bg-blue-500" },
    { title: "Closing Balance", value: 80, color: "bg-gray-500" },
    { title: "Purchases", value: 12, color: "bg-green-500" },
    { title: "Transfers In", value: 9, color: "bg-yellow-500" },
    { title: "Transfers Out", value: 3, color: "bg-red-500" },
    { title: "Assigned Assets", value: 15, color: "bg-purple-500" },
    { title: "Expended Assets", value: 5, color: "bg-pink-500" },
  ];

  const recentActivity = [
    { id: 1, action: "Purchase", item: "Rifle", quantity: 10, date: "2025-06-20" },
    { id: 2, action: "Transfer", item: "Jeep", quantity: 2, date: "2025-06-21" },
    { id: 3, action: "Assign", item: "Pistol", quantity: 3, date: "2025-06-22" },
  ];

  const trendData = [
    { date: "2025-06-20", quantity: 10 },
    { date: "2025-06-21", quantity: 12 },
    { date: "2025-06-22", quantity: 15 },
    { date: "2025-06-23", quantity: 9 },
    { date: "2025-06-24", quantity: 18 },
  ];

  const categoryData = [
    { name: "Purchases", value: 12 },
    { name: "Transfers In", value: 9 },
    { name: "Transfers Out", value: 3 },
    { name: "Assignments", value: 15 },
    { name: "Expenditures", value: 5 },
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444", "#a855f7", "#ec4899"];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p className="text-gray-600 mt-1">Get a quick view of your assets across bases</p>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
        {metrics.map((m) => (
          <div key={m.title} className={`rounded-xl p-4 text-white ${m.color} flex flex-col items-center justify-center`}>
            <span className="text-sm">{m.title}</span>
            <span className="text-2xl font-bold">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow mt-10 p-6">
        <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
        <table className="min-w-full mt-4 table-auto rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-5">Action</th>
              <th className="py-3 px-5">Item</th>
              <th className="py-3 px-5">Quantity</th>
              <th className="py-3 px-5">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((act) => (
              <tr key={act.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-5">{act.action}</td>
                <td className="py-3 px-5 font-medium">{act.item}</td>
                <td className="py-3 px-5">{act.quantity}</td>
                <td className="py-3 px-5">{act.date}</td>
              </tr>
            ))}
            {recentActivity.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-5">No Recent Activity Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Charts Section */}
      <div className="bg-white rounded-xl shadow mt-10 p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Trends Over Time</h2>
          <div className="h-64 mt-4">
            <ResponsiveContainer>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="quantity" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Category Distribution</h2>
          <div className="h-64 mt-4 flex justify-center">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
