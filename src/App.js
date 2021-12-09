import { useEffect, useState } from "react";

// function Btn() {
//   return <button>outside btn</button>;
// }

function App() {
  const [inputText, setInputText] = useState("");
  const onChange = (event) => setInputText(event.target.value);

  const [toDos, setToDos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputText === "") {
      return;
    } else {
      setToDos((current) => [inputText, ...current]);
      setInputText("");
    }
  };

  // console.log(toDos);

  return (
    <div>
      <h1>To do list</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="write to do !!"
          value={inputText}
        />
        <button>submit</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li id={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// numbers.map((number) =>
//   <li>{number}</li>
// );

export default App;
