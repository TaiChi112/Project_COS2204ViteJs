import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Form Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          placeholder="username"
          required
        />
        <input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="password"
          required
        />
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="passwordConfirm"
          required
        />
        <button></button>
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </>
  );
};

export default Register;
