export default function FunctionsEventObject() {
  return (
    <div>
      <button onClick={event => console.log(event)}>Event</button>
      <button onClick={event => console.log(event.target)}>event.target</button>
    </div>
  );
}
