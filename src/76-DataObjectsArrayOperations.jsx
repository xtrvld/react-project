import { useState } from 'react';

const initNotes = [
  { id: '1', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
  { id: '2', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
  { id: '3', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

export default function DataObjectsArrayOperations() {
  const [notes, setNotes] = useState(initNotes);
  const [editingId, setEditingId] = useState(null);
  const [values, setValues] = useState(['', '', '']);

  function edit(note) {
    setEditingId(note.id);
    setValues([note.prop1, note.prop2, note.prop3]);
  }

  function remove(id) {
    setNotes(current => current.filter(note => note.id !== id));
    if (id === editingId) {
      setEditingId(null);
      setValues(['', '', '']);
    }
  }

  function save() {
    setNotes(current => current.map(note => note.id === editingId
      ? { ...note, prop1: values[0], prop2: values[1], prop3: values[2] }
      : note));
    setEditingId(null);
    setValues(['', '', '']);
  }

  return (
    <div>
      <ul>{notes.map(note => (
        <li key={note.id}>
          <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>
          <button onClick={() => remove(note.id)}>Удалить</button>
          <button onClick={() => edit(note)}>Редактировать</button>
        </li>
      ))}</ul>
      {values.map((value, index) => <input key={index} aria-label={`Свойство ${index + 1}`} value={value} onChange={event => setValues(current => current.map((item, i) => i === index ? event.target.value : item))} />)}
      <button disabled={editingId === null} onClick={save}>Сохранить</button>
    </div>
  );
}
