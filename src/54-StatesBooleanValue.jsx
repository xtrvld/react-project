import { useState } from 'react';

export default function StatesBooleanValue() {
  const [banned, setBanned] = useState(false);
  const [conditionalBan, setConditionalBan] = useState(false);

  return (
    <div>
      <p>{banned ? 'Забанен' : 'Не забанен'}</p>
      <button onClick={() => setBanned(true)}>Забанить</button>
      <button onClick={() => setBanned(false)}>Разбанить</button>
      <p>{conditionalBan ? 'Забанен' : 'Не забанен'}</p>
      {conditionalBan
        ? <button onClick={() => setConditionalBan(false)}>Разбанить</button>
        : <button onClick={() => setConditionalBan(true)}>Забанить</button>}
    </div>
  );
}
