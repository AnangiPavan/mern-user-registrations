import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ setToken }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  console.log("in login form")

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("request to api login")
      const res = await axios.post("http://localhost:5000/api/login", form);
      setMessage(res.data.message);
      setToken(res.data.token);
      console.log(res.data.message)
      console.log("token is"+res.data.token)

    } catch (err) {
      setMessage(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br /><br />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
};

export default LoginForm;