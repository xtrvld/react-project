import { useState } from 'react';

export default function InputSeveral() {
  const [values, setValues] = useState(['0', '0', '0', '0', '0']);
  const average = values.reduce((sum, value) => sum + Number(value), 0) / values.length;

  function change(index, value) {
    setValues(current => current.map((item, i) => i === index ? value : item));
  }

  return (
    <div>
      {values.map((value, index) => <input key={index} aria-label={`Число ${index + 1}`} type="number" value={value} onChange={event => change(index, event.target.value)} />)}
      <p>{average}</p>
    </div>
  );
}
