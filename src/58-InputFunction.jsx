import { useState } from 'react';

export default function InputFunction() {
  const [age, setAge] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function birthYear(value) { return new Date().getFullYear() - Number(value); }
  function celsius(value) { return (Number(value) - 32) * 5 / 9; }

  return (
    <div>
      <label>Возраст <input type="number" min="0" value={age} onChange={event => setAge(event.target.value)} /></label>
      <p>{age === '' ? '' : birthYear(age)}</p>
      <label>Градусы Фаренгейта <input type="number" value={fahrenheit} onChange={event => setFahrenheit(event.target.value)} /></label>
      <p>{fahrenheit === '' ? '' : celsius(fahrenheit)}</p>
    </div>
  );
}
