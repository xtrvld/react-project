import { useState } from 'react';

const initNotes = [
  { id: '1', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
  { id: '2', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
  { id: '3', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

export default function DataObjectsArrayAdding() {
  const [notes, setNotes] = useState(initNotes);
  const [values, setValues] = useState(['', '', '']);

  function add(fields) {
    const note = { id: crypto.randomUUID(), prop1: fields[0], prop2: fields[1], prop3: fields[2] };
    setNotes(current => [...current, note]);
  }

  return (
    <div>
      <ul>{notes.map(note => <li key={note.id}><span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span></li>)}</ul>
      <button onClick={() => add(['value41', 'value42', 'value43'])}>Добавить элемент</button>
      <div>
        {values.map((value, index) => <input key={index} aria-label={`Свойство ${index + 1}`} value={value} onChange={event => setValues(current => current.map((item, i) => i === index ? event.target.value : item))} />)}
        <button onClick={() => { add(values); setValues(['', '', '']); }}>Добавить из инпутов</button>
      </div>
    </div>
  );
}
