import { useState } from 'react';

export default function DataArrayOperations() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [notes, setNotes] = useState([
    { id: 1, text: 'text1' }, { id: 2, text: 'text2' }, { id: 3, text: 'text3' },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [text, setText] = useState('');

  function edit(note) {
    setEditingId(note.id);
    setText(note.text);
  }

  function save() {
    setNotes(current => current.map(note => note.id === editingId ? { ...note, text } : note));
    setEditingId(null);
  }

  function remove(id) {
    setNotes(current => current.filter(note => note.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setText('');
    }
  }

  return (
    <div>
      <ul>
        {numbers.map((number, index) => <li key={index} onClick={() => setNumbers(current => current.map((value, i) => i === index ? value ** 2 : value))}>{number}</li>)}
      </ul>
      <ul>
        {notes.map(note => (
          <li key={note.id} onClick={() => edit(note)}>
            {note.text}
            <button onClick={event => { event.stopPropagation(); remove(note.id); }}>Удалить</button>
          </li>
        ))}
      </ul>
      <input aria-label="Текст элемента" value={text} onChange={event => setText(event.target.value)} onBlur={save} />
      <button onClick={() => setNotes(current => [...current].reverse())}>Обратный порядок</button>
    </div>
  );
}
