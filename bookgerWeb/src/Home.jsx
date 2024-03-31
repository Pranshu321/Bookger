import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [issignUp, setSignUp] = useState(false);
  const nvaigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        nvaigate("/bookmarks");
      } else {
        console.log("User is signed out");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (issignUp && name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name,
          });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!issignUp && email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              {issignUp ? "Sign Up" : "Login"} now to Bookger!
            </h1>
            <p className="py-6">
              One place to manage your chrome bookmarks and synchronized with
              our chrome extension.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {issignUp && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <p
                    onClick={() => setSignUp(!issignUp)}
                    className="label-text-alt link link-hover"
                  >
                    {issignUp
                      ? "Already have an account? Login now!"
                      : "Not registered yet? Sign up now!"}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={issignUp ? handleSignUp : handleLogin}
                  className="btn btn-primary"
                >
                  {issignUp ? "Sign Up" : "login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
