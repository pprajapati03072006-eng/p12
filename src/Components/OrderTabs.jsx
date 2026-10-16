import { NavLink } from "react-router-dom";

const tabs = [
  {
    name: "Current Orders",
    path: "/orders/current",
  },
  {
    name: "Order History",
    path: "/orders/history",
  },
  {
    name: "Cancelled Orders",
    path: "/orders/cancelled",
  },
];

export default function OrderTabs() {
  return (
    <nav className="mb-6 flex flex-wrap gap-2 rounded-xl bg-white p-3 shadow-sm">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `rounded-lg px-4 py-3 text-sm font-semibold transition ${
              isActive
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
}