import { useState } from 'react';

const initUsers = [
  { id: '1', name: 'user1', surname: 'surn1', age: 30, isEdit: false },
  { id: '2', name: 'user2', surname: 'surn2', age: 31, isEdit: false },
  { id: '3', name: 'user3', surname: 'surn3', age: 32, isEdit: false },
];

function UserField({ id, text, type, isEdit, editUser }) {
  return isEdit
    ? <input aria-label={type} type={type === 'age' ? 'number' : 'text'} value={text} onChange={event => editUser(id, type, event.target.value)} />
    : <span>{text}</span>;
}

function User({ id, name, surname, age, isEdit, toggleMode, editUser }) {
  return (
    <div>
      <p>{id}</p>
      <UserField id={id} text={name} type="name" isEdit={isEdit} editUser={editUser} />{' '}
      <UserField id={id} text={surname} type="surname" isEdit={isEdit} editUser={editUser} />{' '}
      <UserField id={id} text={age} type="age" isEdit={isEdit} editUser={editUser} />
      <button onClick={() => toggleMode(id)}>{isEdit ? 'Сохранить' : 'Редактировать'}</button>
    </div>
  );
}

export default function ComponentsEditingGrandparentState() {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id) {
    setUsers(current => current.map(user => user.id === id ? { ...user, isEdit: !user.isEdit } : user));
  }

  function editUser(id, field, value) {
    setUsers(current => current.map(user => user.id === id ? { ...user, [field]: value } : user));
  }

  return <div>{users.map(user => <User key={user.id} {...user} toggleMode={toggleMode} editUser={editUser} />)}</div>;
}
