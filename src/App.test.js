import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the App heading", () => {
  const mockFunc = jest.fn();
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00"]}
      setavailableTimes={mockFunc}
    />
  );
  const headingElement = screen.getByText("Booking a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Test initializeTimes function", () => {
  const mockFunc = jest.fn();
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00"]}
      setavailableTimes={mockFunc}
    />
  );
  const key = Object.values(screen.queryAllByTestId("res-time")).map(
    (option) => option.value
  );
  expect(key).toHaveValue(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
