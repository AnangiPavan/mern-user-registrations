import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  console.log("In registration form")
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("requesting api/register")
      const res = await axios.post("http://localhost:5000/api/register", form);
      setMessage(res.data.message);
      console.log(res.data.message)
    } catch (err) {
      setMessage(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} required /><br /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br /><br />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required /><br /><br />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
};

export default RegisterForm;