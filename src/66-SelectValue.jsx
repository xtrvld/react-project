import { useState } from 'react';

export default function SelectValue() {
  const [group, setGroup] = useState('child');

  return (
    <select aria-label="Возрастная группа" value={group} onChange={event => setGroup(event.target.value)}>
      <option value="child">От 0 до 12 лет</option>
      <option value="teen">От 13 до 17 лет</option>
      <option value="young">От 18 до 25 лет</option>
      <option value="adult">Старше 25 лет</option>
    </select>
  );
}
