import { useState } from 'react';

const initUsers = [
  { id: '1', name: 'user1', surname: 'surn1', age: 30 },
  { id: '2', name: 'user2', surname: 'surn2', age: 31 },
  { id: '3', name: 'user3', surname: 'surn3', age: 32 },
];

function UserField({ id, text, type, changeField }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <td>
      {isEdit
        ? <input autoFocus aria-label={type} type={type === 'age' ? 'number' : 'text'} value={text} onChange={event => changeField(id, type, event.target.value)} onBlur={() => setIsEdit(false)} />
        : <span onClick={() => setIsEdit(true)}>{text}</span>}
    </td>
  );
}

function User({ id, name, surname, age, changeField }) {
  return (
    <tr>
      <UserField id={id} text={name} type="name" changeField={changeField} />
      <UserField id={id} text={surname} type="surname" changeField={changeField} />
      <UserField id={id} text={age} type="age" changeField={changeField} />
    </tr>
  );
}

export default function ComponentsModesViaStates() {
  const [users, setUsers] = useState(initUsers);

  function changeField(id, field, value) {
    setUsers(current => current.map(user => user.id === id ? { ...user, [field]: value } : user));
  }

  return <table><tbody>{users.map(user => <User key={user.id} {...user} changeField={changeField} />)}</tbody></table>;
}
