import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Bookmarks from "./components/Bookmarks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
};

export default App;
