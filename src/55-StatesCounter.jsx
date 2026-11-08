import { useState } from 'react';

export default function StatesCounter() {
  const [age, setAge] = useState(30);

  return (
    <div>
      <p>{age}</p>
      <button onClick={() => setAge(value => value + 1)}>+</button>
      <button onClick={() => setAge(value => value - 1)}>−</button>
    </div>
  );
}
