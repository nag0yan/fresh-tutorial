import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date(Date.now() + 10000);
  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}
