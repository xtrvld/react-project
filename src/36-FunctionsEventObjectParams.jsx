export default function FunctionsEventObjectParams() {
  function eventLast(first, second, event) { console.log(first, second, event); }
  function eventFirst(event, first, second) { console.log(event, first, second); }
  function eventMiddle(first, event, second) { console.log(first, event, second); }

  return (
    <div>
      <p>Стрелочная функция получает событие клика и передает его вместе с аргументами в обработчик. Обработчик вызывается при клике, а не при рендеринге.</p>
      <button onClick={event => eventLast('aaa', 'bbb', event)}>Событие последним</button>
      <button onClick={event => eventFirst(event, 'aaa', 'bbb')}>Событие первым</button>
      <button onClick={event => eventMiddle('aaa', event, 'bbb')}>Событие вторым</button>
    </div>
  );
}
