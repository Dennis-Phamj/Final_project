import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  return (
    <main>
      <BookingForm
        availableTimes={props.availableTimes}
        setavailableTimes={props.setavailableTimes}
      />
    </main>
  );
}
