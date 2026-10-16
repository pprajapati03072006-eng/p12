import { orders } from "../data/orders";
import OrderCard from "../components/OrderCard";

export default function CancelledOrders() {
  const cancelledOrders = orders.filter(
    (order) => order.type === "cancelled"
  );

  return (
    <div>
      <h3 className="mb-2 text-2xl font-bold text-slate-800">
        Cancelled Orders
      </h3>

      <p className="mb-6 text-slate-500">
        Review orders that have been cancelled.
      </p>

      <div className="space-y-4">
        {cancelledOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>

      <p className="mt-5 text-sm text-slate-500">
        Cancelled orders: {cancelledOrders.length}
      </p>
    </div>
  );
}