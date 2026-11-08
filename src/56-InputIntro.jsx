import { useState } from 'react';

export default function InputIntro() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  return (
    <div>
      <input aria-label="Первый текст" value={first} onChange={event => setFirst(event.target.value)} />
      <p>{first}</p>
      <input aria-label="Второй текст" value={second} onChange={event => setSecond(event.target.value)} />
      <p>{second}</p>
    </div>
  );
}
