import { useState } from 'react';

export default function InputOutput() {
  const [value, setValue] = useState('');

  return <div><input aria-label="Текст" value={value} onChange={event => setValue(event.target.value)} /><p>{value.length}</p></div>;
}
