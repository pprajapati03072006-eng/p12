import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import OrdersLayout from "./pages/OrdersLayout";
import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";
import CancelledOrders from "./pages/CancelledOrders";

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