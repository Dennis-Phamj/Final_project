import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="layout">
        <h1 className="confirmed">Your are succesfully booking a table!</h1>
        <button className="custom_btn" onClick={backHome}>
          Go back home
        </button>
      </div>
    </main>
  );
}
