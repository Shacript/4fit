import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="AuthenticationForm">
      <h5>Sign In</h5>
      <input type="text" placeholder="Username / Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
      <p>
        Don't have a account ? <Link to="register">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
