import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Loading from "./components/Loading";
import Posts from "./components/Posts";
import { useAuth } from "./context/authContext";
import SignupForm from "./components/SignupForm";

function App() {
  const { loading, setLoading, user, password } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <div
      className="App"
      style={{ backgroundColor: "#f5f5f5", minHeight: "900px" }}
    >
      <Navbar />
      {loading && <Loading />}

      {user && password ? (
        <Routes>
          <Route path="*" element={<Navigate to="/posts" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/signup" element={<Navigate to="/signup" />} />

        </Routes>
      )}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
