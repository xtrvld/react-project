import { useState } from 'react';

function Test() {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState('text');
  let elem;

  if (isEdit) {
    elem = <input aria-label="Данные" value={data} onChange={event => setData(event.target.value)} />;
  } else {
    elem = <span>{data}</span>;
  }

  return <div>{elem}<button onClick={() => setIsEdit(current => !current)}>{isEdit ? 'Сохранить' : 'Редактировать'}</button></div>;
}

export default function ConceptsData() {
  return (
    <div>
      <p>isEdit — стейт, если режим переключается внутри компонента, либо пропс, если режим задает родитель.</p>
      <p>elem — локальная переменная let, которой присваивается JSX в условии. При выборе через тернарный оператор можно использовать const.</p>
      <p>data — стейт для редактируемых локальных данных, пропс для данных родителя или константа для неизменяемых данных.</p>
      <Test />
    </div>
  );
}
