import { useState } from 'react';

export default function CheckboxConditionalRendering() {
  const [adult, setAdult] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label><input type="checkbox" checked={adult} onChange={event => setAdult(event.target.checked)} />Мне уже есть 18 лет</label>
      {adult
        ? <div><h2>Ура, вам уже есть 18</h2><p>здесь расположен контент только для взрослых</p></div>
        : <div><p>увы, вам еще нет 18 лет:(</p></div>}
      <label><input type="checkbox" checked={visible} onChange={event => setVisible(event.target.checked)} />Показать абзац</label>
      {visible && <p>Текст абзаца</p>}
    </div>
  );
}
