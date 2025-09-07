function Item({ item }) {
  return <li> {item.name}</li>;
}

export default function App() {
  const data = [
    { name: "Apple", done: true },
    { name: "Orange", done: true },
    { name: "Mango", done: false },
    { name: "Banana", done: false },
  ];

  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {data.map((item) => {
          return <Item item={item} key={item.name} />;
        })}

        {data.map((item) => (
          <Item item={item} key={item.name} />
        ))}

        {data.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}
