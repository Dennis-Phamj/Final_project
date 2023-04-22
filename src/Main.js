import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

export default function Main() {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <HomePage />,
    },
    {
      path: "/booking",
      element: <BookingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
