import { useEffect, useState } from "react";

// function Btn() {
//   return <button>outside btn</button>;
// }

function App() {
  console.log("i run everytime");
  const [count, setCount] = useState(0);
  const onCountClick = () => {
    setCount((current) => current + 1);
  };

  const [hidden, setHidden] = useState(false);
  const onHiddenClick = () => setHidden((current) => !current);

  const [inputText, setInputText] = useState("");
  const onChange = (event) => {
    setInputText(event.target.value);
  };
  // console.log(hidden);

  useEffect(() => {
    if (inputText.length > 5) {
      console.log("i run only input changes over 5 letter");
    }
  }, [inputText]);

  useEffect(() => {
    console.log("i run only count changes");
  }, [count]);

  useEffect(() => {
    console.log("i run only one.. first time");
  }, []);

  return (
    <div>
      <button onClick={onCountClick}>click me</button>
      <h1>{count}</h1>
      <button onClick={onHiddenClick}>{hidden ? "show" : "hidden"}</button>
      <input
        onChange={onChange}
        type="text"
        placeholder="hahaha"
        value={inputText}
      />
      {/* <Btn /> */}
    </div>
  );
}

export default App;
