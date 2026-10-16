export default function OrderTable({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="px-4 py-3 font-semibold">Order ID</th>
            <th className="px-4 py-3 font-semibold">Customer</th>
            <th className="px-4 py-3 font-semibold">Product</th>
            <th className="px-4 py-3 font-semibold">Amount</th>
            <th className="px-4 py-3 font-semibold">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-slate-50">
              <td className="px-4 py-4 font-semibold text-indigo-600">
                {order.id}
              </td>

              <td className="px-4 py-4 text-slate-700">
                {order.customer}
              </td>

              <td className="px-4 py-4 text-slate-700">
                {order.product}
              </td>

              <td className="px-4 py-4 font-medium text-slate-800">
                {order.amount}
              </td>

              <td className="px-4 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    order.status === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {orders.length === 0 && (
        <p className="py-6 text-center text-slate-500">
          No current orders found.
        </p>
      )}
    </div>
  );
}