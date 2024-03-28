import React, { useContext, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "axios";
import { BaseUrl } from "../../index.js";

// export const userLogin = async (userName, password, setToken, setUser) => {
//   const userData = {
//     username: userName,
//     password: password,
//   };
//   const validToken = await checkToken(localStorage.getItem("token"));
//   if (validToken) {
//     setToken(localStorage.getItem("token"));
//     user = getUser(validToken)
//     setUser(user)
//    } else {
//     const response = await axios.post(BaseUrl + "auth/", userData, {
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log("Response:", response.data); //debug log
//     setToken(response.data.token);
//     setUser(response.data.user);
//     }
//   } catch (error) {
//     console.error("", error);
//   }
// };

export const userLogin = async (userName, password, setToken, setUser) => {
  try {
    const userData = {
      username: userName,
      password: password,
    };

    const response = await axios.post(BaseUrl + "auth/", userData, {
      headers: { "Content-Type": "application/json" },
    });

    // console.log("Response:", response.data); // Debug log
    const { token, user } = response.data;

    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

function LoginComponent() {
  const { setToken, setUser } = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(userName, password, setToken, setUser);
    nav("/");
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <label>
          username:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input className='btn-secondary' type="submit" value="Submit" />
      </Form>
      <button className="btn-primary" onClick={() => nav("/register")}>Register</button>
      <button className="btn-primary" onClick={() => nav("/reset")}>Reset Password</button>
    </div>
  );
}

export default LoginComponent;
