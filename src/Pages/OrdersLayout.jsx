import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import OrderTabs from "../Components/OrderTabs";

export default function OrdersLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Orders
        </h2>

        <p className="mt-2 mb-6 text-slate-500">
          Manage and track all your customer orders.
        </p>

        <OrderTabs />

        <section className="rounded-xl bg-white p-5 shadow-sm sm:p-7">
          <Outlet />
        </section>
      </main>
    </div>
  );
}