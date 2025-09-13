/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Item from "./Item";

function List(props) {
  return (
    <ul style={{ listStyle: "none", padding: 20, backgroundColor: "#ddf" }}>
      {props.children}
    </ul>
  );
}

export default function App() {
  const inputRef = useRef();
  const [data, setData] = useState([
    { id: 4, name: "Apple", done: true },
    { id: 3, name: "Orange", done: true },
    { id: 2, name: "Mango", done: false },
    { id: 1, name: "Banana", done: false },
  ]);

  const add = () => {
    const id = data[0].id + 1;
    const name = inputRef.current.value;
    if (name == "") return false;

    setData([{ id, name, done: false }, ...data]);
  };

  const remove = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <div>
      <h1>Hello React ({data.length})</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
          e.currentTarget.reset();
        }}
      >
        <input type="text" ref={inputRef} />
        <button type="submit">Add</button>
      </form>

      <List>
        {data.map((item) => {
          return <Item item={item} key={item.id} remove={remove} />;
        })}
      </List>
    </div>
  );
}
