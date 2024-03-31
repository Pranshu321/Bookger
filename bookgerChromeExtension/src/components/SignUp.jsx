import React, { useState } from "react";
import s from "./SignIn.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  function emailLogin() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <>
      <div className={s.loginDiv} id="loginDiv">
        <h1>Sign Up</h1>
        <div className={s.inputField}>
          <input
            type="text"
            id="username"
            onChange={(e) => setName(e.target.value)}
            required=""
            aria-invalid="false"
          />
          <label>Name</label>
        </div>
        <div className={s.inputField}>
          <input
            type="text"
            id="username"
            required=""
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid="false"
          />
          <label>Email or Username</label>
        </div>
        <div className={s.inputField}>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required=""
            aria-invalid="false"
          />
          <label>Password</label>
        </div>
        <div
          className="error"
          aria-errormessage="Invalid username or password."
          id="error"
        ></div>
        <button onClick={emailLogin} id="login" className={s.login}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default SignUp;
