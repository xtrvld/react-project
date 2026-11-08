import { useState } from 'react';

const initUsers = [
  { id: '1', name: 'user1', surname: 'surn1', age: 30, banned: false },
  { id: '2', name: 'user2', surname: 'surn2', age: 31, banned: false },
  { id: '3', name: 'user3', surname: 'surn3', age: 32, banned: false },
];

function User({ id, name, surname, age, banned, banUser }) {
  return (
    <div>
      <p>{id}</p>
      <span>{name} {surname}, {age}</span>
      <span>{banned ? ' Забанен' : ' Не забанен'}</span>
      <button disabled={banned} onClick={() => banUser(id)}>Забанить</button>
    </div>
  );
}

export default function ComponentsChangingParentState() {
  const [users, setUsers] = useState(initUsers);

  function banUser(id) {
    setUsers(current => current.map(user => user.id === id ? { ...user, banned: true } : user));
  }

  return <div>{users.map(user => <User key={user.id} {...user} banUser={banUser} />)}</div>;
}
