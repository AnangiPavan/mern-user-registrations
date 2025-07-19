import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h2>User Registration</h2>
      <RegisterForm />
      <hr />
      <h2>Login</h2>
      <LoginForm setToken={setToken} />
      {token && <p style={{ color: 'green' }}>JWT Token: {token}</p>}
    </div>
  );
}

export default App;