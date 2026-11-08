export default function FunctionsHandlersParams() {
  function show(number) { alert(number); }

  return (
    <div>
      <button onClick={() => show(1)}>act1</button>
      <button onClick={() => show(2)}>act2</button>
      <button onClick={() => show(3)}>act3</button>
    </div>
  );
}
