export function Transaction(data) {
  return (
    <>
      <td>{data.type}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
    </>
  );
}
