export default function Transfers() {
  const sampleTransfers = [
    { id: 1, date: "2025-06-21", item: "Rifle", quantity: 5, from: "Base A", to: "Base C" },
    { id: 2, date: "2025-06-22", item: "Jeep", quantity: 1, from: "Base B", to: "Base A" },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Transfers</h1>
      <p className="text-gray-600 mt-1">Review asset transfers between bases</p>
      <div className="bg-white rounded-xl shadow mt-6 p-6">
        <table className="min-w-full table-auto rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-5">Date</th>
              <th className="py-3 px-5">Item</th>
              <th className="py-3 px-5">Quantity</th>
              <th className="py-3 px-5">From</th>
              <th className="py-3 px-5">To</th>
              <th className="py-3 px-5">Details</th>
            </tr>
          </thead>
          <tbody>
            {sampleTransfers.map((transfer) => (
              <tr
                key={transfer.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-5">{transfer.date}</td>
                <td className="py-3 px-5 font-medium">{transfer.item}</td>
                <td className="py-3 px-5 text-green-600 font-bold">{transfer.quantity}</td>
                <td className="py-3 px-5">{transfer.from}</td>
                <td className="py-3 px-5">{transfer.to}</td>
                <td className="py-3 px-5">
                  <button className="bg-blue-600 text-white rounded-full px-4 py-1 hover:bg-blue-700">View</button>
                </td>
              </tr>
            ))}
            {sampleTransfers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-5">No Transfers Found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
