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
