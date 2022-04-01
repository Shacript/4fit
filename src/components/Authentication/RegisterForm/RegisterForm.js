const RegisterForm = () => {
  return (
    <div className="AuthenticationForm">
      <h5>Sign Up</h5>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <h5>Your Personal Information</h5>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <button>Sign Up</button>
    </div>
  );
};

export default RegisterForm;
