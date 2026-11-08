import { useState } from 'react';

export default function SelectArray() {
  const cities = ['Москва', 'Екатеринбург', 'Казань'];
  const [city, setCity] = useState(cities[0]);

  return (
    <div>
      <select aria-label="Город" value={city} onChange={event => setCity(event.target.value)}>
        {cities.map(item => <option key={item}>{item}</option>)}
      </select>
      <p>{city}</p>
    </div>
  );
}
