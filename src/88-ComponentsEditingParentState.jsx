import { useState } from 'react';

const initUsers = [
  { id: '1', name: 'user1', surname: 'surn1', age: 30, isEdit: false },
  { id: '2', name: 'user2', surname: 'surn2', age: 31, isEdit: false },
  { id: '3', name: 'user3', surname: 'surn3', age: 32, isEdit: false },
];

function User({ id, name, surname, age, isEdit, toggleMode, editUser }) {
  return (
    <div>
      <p>{id}</p>
      {isEdit ? <input aria-label="Имя" value={name} onChange={event => editUser(id, 'name', event.target.value)} /> : <span>{name}</span>}{' '}
      {isEdit ? <input aria-label="Фамилия" value={surname} onChange={event => editUser(id, 'surname', event.target.value)} /> : <span>{surname}</span>}{' '}
      {isEdit ? <input aria-label="Возраст" type="number" value={age} onChange={event => editUser(id, 'age', event.target.value)} /> : <span>{age}</span>}
      <button onClick={() => toggleMode(id)}>{isEdit ? 'Сохранить' : 'Редактировать'}</button>
    </div>
  );
}

export default function ComponentsEditingParentState() {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id) {
    setUsers(current => current.map(user => user.id === id ? { ...user, isEdit: !user.isEdit } : user));
  }

  function editUser(id, field, value) {
    setUsers(current => current.map(user => user.id === id ? { ...user, [field]: value } : user));
  }

  return <div>{users.map(user => <User key={user.id} {...user} toggleMode={toggleMode} editUser={editUser} />)}</div>;
}
