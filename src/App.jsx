import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import OrdersLayout from "./Pages/OrdersLayout";
import CurrentOrders from "./Pages/CurrentOrders";
import OrderHistory from "./Pages/OrderHistory";
import CancelledOrders from "./Pages/CancelledOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/orders" replace />,
  },
  {
    path: "/orders",
    element: <OrdersLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="current" replace />,
      },
      {
        path: "current",
        element: <CurrentOrders />,
      },
      {
        path: "history",
        element: <OrderHistory />,
      },
      {
        path: "cancelled",
        element: <CancelledOrders />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}