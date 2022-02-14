import styles from "./App.module.css";
import { useState } from "react";
export default function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: ""
  });
  // We want a single eventhandler for first name, and last name input field

  const nameHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(state.firstName + " " + state.lastName);
  };

  return (
    <form className={styles.formStyle}>
      <label for="firstName">First Name</label>
      <br />
      <input
        id="firstName"
        name="firstName"
        value={state.firstName}
        onChange={nameHandler}
      />
      <br />
      <label for="lastName">First Name</label>
      <br />
      <input
        id="lastName"
        name="lastName"
        value={state.lastName}
        onChange={nameHandler}
      />
      <br />
      <input type="submit" onClick={submitHandler} />
    </form>
  );
}
