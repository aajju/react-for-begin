/* 

app.js code // useEffect

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
      </div>
      );
    }
    
    export default App;
    



----


app.js code   // props


import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"clickkkk"} />
      <button className={styles.btn}>hello</button>
    </div>
  );
}

export default App;
*/

// import PropTypes from "prop-types";
// import styles from "./Button.module.css";

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
// };

// function Button({ text }) {
//   return (
//     <div>
//       <button className={styles.btn}>{text}</button>
//       {/* <button className={styles.btn}>click2</button> */}
//     </div>
//   );
// }

// export default Button;
