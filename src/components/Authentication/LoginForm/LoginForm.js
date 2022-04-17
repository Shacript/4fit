import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../../state/auth/authReducer";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ username, password })).then((res) => {
      if (res.error) {
        return console.log(res.payload);
      }
      navigate("/dashboard");
    });
  };

  return (
    <form className="AuthenticationForm" onSubmit={onSubmit}>
      <h5>Sign In</h5>
      <input
        type="text"
        placeholder="* Username / Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="* Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>

      <p>
        Don't have a account ? <Link to="register">Sign up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
