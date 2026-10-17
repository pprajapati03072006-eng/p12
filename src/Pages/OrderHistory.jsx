import { Orders } from "../data/Orders";
import OrderCard from "../Components/OrderCard";

export default function OrderHistory() {
  const completedOrders = Orders.filter(
    (order) => order.type === "history"
  );

  return (
    <div>
      <h3 className="mb-2 text-2xl font-bold text-slate-800">
        Order History
      </h3>

      <p className="mb-6 text-slate-500">
        View successfully completed orders.
      </p>

      <div className="space-y-4">
        {completedOrders.length > 0 ? (
          completedOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <p className="py-6 text-center text-slate-500">
            No completed orders found.
          </p>
        )}
      </div>

      <p className="mt-5 text-sm text-slate-500">
        Completed orders: {completedOrders.length}
      </p>
    </div>
  );
}