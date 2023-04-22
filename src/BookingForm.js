import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

export default function BookingForm(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "2023-04-22",
    time: "17:00",
    number: "1",
    occasionData: "Birthday",
  });

  const submitAPI = function (formData) {
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date == 0 || formData.time == 0 || formData.number == 0)
      return false;
    if (submitAPI(formData)) navigate("/confirmed");
  };

  return (
    <div className="layout">
      <h1 className="booking_title">Booking a Table</h1>
      <form
        style={{ display: "grid", width: "500px", gap: "24px" }}
        onSubmit={handleSubmit}
      >
        <div className="date">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={formData.date}
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
              props.setavailableTimes({ date: e.target.value });
            }}
            required
          />
        </div>
        <div className="time">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            key={formData.time}
            defaultValue={formData.time}
            onChange={(e) => {
              setFormData({ ...formData, time: e.target.value });
            }}
            required
          >
            {props.availableTimes.map((time) => {
              return (
                <option key={time} data-testid="res-time">
                  {time}
                </option>
              );
            })}
          </select>
        </div>
        <div className="guests_num">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={formData.number}
            onChange={(e) => {
              setFormData({ ...formData, number: e.target.value });
            }}
            required
          />
        </div>
        <div className="occasion">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            key={formData.occasionData}
            value={formData.occasionData}
            onChange={(e) => {
              e.preventDefault();
              setFormData({ ...formData, occasionData: e.target.value });
            }}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button
          className="custom_btn"
          disabled={formData.number < 1 || formData.number > 10}
          style={{ width: "100%" }}
          type="submit"
        >
          Make Your reservation
        </button>
      </form>
    </div>
  );
}
