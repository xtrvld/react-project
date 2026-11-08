import { useState } from 'react';

const initNotes = [
  { id: '1', name: 'name1', desc: 'long description 1', show: false },
  { id: '2', name: 'name2', desc: 'long description 2', show: false },
  { id: '3', name: 'name3', desc: 'long description 3', show: false },
];

export default function DataShowing() {
  const [notes, setNotes] = useState(initNotes);

  function show(id) {
    setNotes(current => current.map(note => note.id === id ? { ...note, show: true } : note));
  }

  return <div>{notes.map(note => <p key={note.id}>{note.name} {note.show && <i>{note.desc}</i>} <button onClick={() => show(note.id)}>Показать описание</button></p>)}</div>;
}
