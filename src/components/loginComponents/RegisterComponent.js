import { useState } from "react";
import React from "react";
import { Form, Link } from "react-router-dom";
import axios from "axios";
import userLogin from "./LoginComponent";
import { BaseUrl } from "../..";

function RegisterComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  // console.log('Fetching trips...'); //debug log

  const handelSubmit = async () => {
    if (password !== password2) {
      alert("passwords are not the same");
      return;
    } else if (password.length < 8) {
      alert("password is too short");
    } else {
      const userData = {
        username: userName,
        password: password,
        email: email,
      };
      try {
        const response = await axios.post(
          BaseUrl + "account/register/",
          userData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response:", response.data); //debug log
        userLogin(userName, password);
        // setToken(response.data.token);
      } catch (error) {
        alert("Error logging in:", error);
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={handelSubmit}>
        <label>
          user name:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          repeat password:
          <input
            type="password"
            name="password2"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </label>
        <label>
          email:
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <button className="btn--primary">Sign Up</button>
      </Form>
      <p>
        Already have an account?
        <br />
        <button className="btn-secondary">
          <Link to="/login">Login</Link>
        </button>
      </p>
    </div>
  );
}

export default RegisterComponent;
