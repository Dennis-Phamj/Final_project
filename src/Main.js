import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import Inprogress from "./Inprogress";
import ConfirmedBooking from "./ConfirmedBooking ";
import { useReducer } from "react";

export default function Main() {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date);

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const current = new Date();
  const currDate = current.getDate();
  const updateTimes = (state, action) => {
    const date = action.date.split("-")[2];
    try {
      const dateData = fetchAPI(date);
      return dateData;
    } catch {
      return state;
    }
  };

  const initializeTimes = () => {
    return fetchAPI(currDate);
  };

  const [availableTimes, setavailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/booking",
      element: (
        <BookingPage
          availableTimes={availableTimes}
          setavailableTimes={setavailableTimes}
        />
      ),
    },
    {
      path: "/confirmed",
      element: <ConfirmedBooking />,
    },
    {
      path: "/*",
      element: <Inprogress />,
    },
  ]);

  return <RouterProvider router={router} />;
}
