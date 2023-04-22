import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    if (submitAPI(formData)) navigate("/confirmed");
  };

  return (
    <div className="layout">
      <h1>Booking a Table</h1>
      <form
        style={{ display: "grid", width: "500px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={formData.date}
          onChange={(e) => {
            setFormData({ ...formData, date: e.target.value });
            props.setavailableTimes({ date: e.target.value });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          key={formData.time}
          defaultValue={formData.time}
          onChange={(e) => {
            setFormData({ ...formData, time: e.target.value });
          }}
        >
          {props.availableTimes.map((time) => {
            return (
              <option key={time} data-testid="res-time">
                {time}
              </option>
            );
          })}
          {/* <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option> */}
        </select>
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
        />
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
        <button className="custom_btn" style={{ width: "100%" }} type="submit">
          Make Your reservation
        </button>
      </form>
    </div>
  );
}
