export default function Order({ orders }) {
  const { id, name, total, order, date } = orders;
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Order # {id}</h3>
      <p className="text-lg font-bold">Order name: {name}.</p>
    </div>
  );
}
