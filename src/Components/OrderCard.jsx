function OrderCard({ order }) {
  const isCancelled = order.type === "cancelled";

  return (
    <div
      className={`rounded-xl border p-5 ${
        isCancelled
          ? "border-red-100 bg-red-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p
            className={`font-bold ${
              isCancelled ? "text-red-600" : "text-indigo-600"
            }`}
          >
            {order.id}
          </p>

          <p className="mt-2 font-semibold text-slate-800">
            {order.product}
          </p>

          <p className="mt-1 text-sm text-slate-600">
            Customer: {order.customer}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Ordered on: {order.date}
          </p>

          {order.reason && (
            <p className="mt-1 text-sm text-slate-500">
              Reason: {order.reason}
            </p>
          )}
        </div>

        <div className="sm:text-right">
          <p className="text-lg font-bold text-slate-800">
            {order.amount}
          </p>

          <span
            className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
              isCancelled
                ? "bg-red-100 text-red-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;