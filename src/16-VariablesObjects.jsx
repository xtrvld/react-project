export default function VariablesObjects() {
  const obj = { name: 'john', surname: 'smit' };
  return (
    <p>
      name: <span>{obj.name}</span>,
      <br />
      surname: <span>{obj.surname}</span>,
    </p>
  );
}
