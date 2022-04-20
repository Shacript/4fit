import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { register } from "../../../state/auth/authReducer";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      register({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
      })
    ).then((res) => {
      if (res.error) {
        return console.log(res.payload);
      }
      navigate("/");
    });
  };

  return (
    <form className="AuthenticationForm" onSubmit={onSubmitHandler}>
      <h5>Sign Up</h5>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <h5>Your Personal Information</h5>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        placeholder="First name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Last name"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
