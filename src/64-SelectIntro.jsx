import { useState } from 'react';

export default function SelectIntro() {
  const [city, setCity] = useState('Москва');

  return (
    <div>
      <select aria-label="Город" value={city} onChange={event => setCity(event.target.value)}>
        <option>Москва</option><option>Екатеринбург</option><option>Казань</option>
      </select>
      <p>{city}</p>
    </div>
  );
}
