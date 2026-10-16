import { orders } from "../data/orders";
import OrderTable from "../components/OrderTable";

export default function CurrentOrders() {
  const currentOrders = orders.filter(
    (order) => order.type === "current"
  );

  return (
    <div>
      <h3 className="mb-2 text-2xl font-bold text-slate-800">
        Current Orders
      </h3>

      <p className="mb-6 text-slate-500">
        Track orders being processed or shipped.
      </p>

      <OrderTable orders={currentOrders} />

      <p className="mt-5 text-sm text-slate-500">
        Total current orders: {currentOrders.length}
      </p>
    </div>
  );
}