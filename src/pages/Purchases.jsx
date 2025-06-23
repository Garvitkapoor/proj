export default function Purchases() {
  const samplePurchases = [
    { id: 1, date: "2025-06-20", item: "Rifle", quantity: 10, base: "Base A" },
    { id: 2, date: "2025-06-21", item: "Jeep", quantity: 2, base: "Base B" },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Purchases</h1>
      <p className="text-gray-600 mt-1">Track and review recent military equipment purchases across bases</p>
      <div className="bg-white rounded-xl shadow mt-6 p-6">
        <table className="min-w-full table-auto rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-5">Date</th>
              <th className="py-3 px-5">Item</th>
              <th className="py-3 px-5">Quantity</th>
              <th className="py-3 px-5">Base</th>
              <th className="py-3 px-5">Details</th>
            </tr>
          </thead>
          <tbody>
            {samplePurchases.map((purchase) => (
              <tr
                key={purchase.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-5">{purchase.date}</td>
                <td className="py-3 px-5 font-medium">{purchase.item}</td>
                <td className="py-3 px-5 text-blue-600 font-bold">{purchase.quantity}</td>
                <td className="py-3 px-5">{purchase.base}</td>
                <td className="py-3 px-5">
                  <button className="bg-blue-600 text-white rounded-full px-4 py-1 hover:bg-blue-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
            {samplePurchases.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-5">
                  No Purchases Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
