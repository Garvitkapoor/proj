export default function Assignments() {
  const sampleAssignments = [
    { id: 1, item: "Rifle", quantity: 3, assignedTo: "Cpt. John", status: "Active" },
    { id: 2, item: "Jeep", quantity: 1, assignedTo: "Lt. Michael", status: "Active" },
    { id: 3, item: "Pistol", quantity: 2, assignedTo: "Sgt. Steve", status: "Returned" },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Assignments & Expenditures</h1>
      <p className="text-gray-600 mt-1">Track assigned equipment and status across personnel</p>
      <div className="bg-white rounded-xl shadow mt-6 p-6">
        <table className="min-w-full table-auto rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-5">Item</th>
              <th className="py-3 px-5">Quantity</th>
              <th className="py-3 px-5">Assigned To</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5">Details</th>
            </tr>
          </thead>
          <tbody>
            {sampleAssignments.map((assign) => (
              <tr
                key={assign.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-5">{assign.item}</td>
                <td className="py-3 px-5 text-purple-600 font-bold">{assign.quantity}</td>
                <td className="py-3 px-5">{assign.assignedTo}</td>
                <td className={`py-3 px-5 ${assign.status === "Active" ? "text-green-600" : "text-gray-500"}`}>{assign.status}</td>
                <td className="py-3 px-5">
                  <button className="bg-blue-600 text-white rounded-full px-4 py-1 hover:bg-blue-700">View</button>
                </td>
              </tr>
            ))}
            {sampleAssignments.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-5">No Assignments Found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
