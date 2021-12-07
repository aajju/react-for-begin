import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

function Button({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
      {/* <button className={styles.btn}>click2</button> */}
    </div>
  );
}

export default Button;
