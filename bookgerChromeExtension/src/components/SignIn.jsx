import React, { useState } from "react";
import s from "./SignIn.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <>
      <div className={s.loginDiv} id="loginDiv">
        <h1>Login</h1>
        <div className={s.inputField}>
          <input
            type="text"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
            required=""
            aria-invalid="false"
          />
          <label>Email or Username</label>
        </div>
        <div className={s.inputField}>
          <input
            type="password"
            id="password"
            required=""
            aria-invalid="false"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div
          className="error"
          aria-errormessage="Invalid username or password."
          id="error"
        ></div>
        <button onClick={emailLogin} id="login" className={s.login}>
          Login
        </button>
      </div>
    </>
  );
};

export default SignIn;
