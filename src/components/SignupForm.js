import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignupForm = () => {
  const { setLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [username, setUsername] = useState("");

  const url = "http://localhost/api/register.php";
  const headers = {
    "Access-Control-Allow-Methods": "GET,POST",
    "Access-Control-Allow-Origin": "",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "",
    "Access-Control-Expose-Headers": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const data = {
    username: username,
    email: mail,
    password: pass,
  };

  const handleSignup = () => {
    if (pass === confPass) {
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";

      axios
        .post(url, data, {
          headers: headers,
        })
        .then(function (response) {
          if(response.status===200){
            setLoading(true);
            navigate('/login');
            console.log(response);
          }
        })
        .catch(function (error) {
          console.log("ERROR ", error);
        });

     
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "15px",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <h2 style={{ paddingBottom: "20px" }}>Signup</h2>
        <form onSubmit={handleSubmit(handleSignup)} style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>username</p>
            <input
              value={username}
              {...register("username", { required: "username is required" })}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="username"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingTop: "15px",
                paddingBottom: "10px",
                fontSize: "15px",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "beige",
                borderStyle: "none",
                marginBottom: "20px",
                backgroundColor: "#f1f1f1",
              }}
            />
            <p
              style={{ color: "red", marginBottom: "20px", textAlign: "left" }}
            >
              {errors.username?.message}
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>email</p>
            <input
              value={mail}
              {...register("email", { required: "email is required" })}
              onChange={(event) => setMail(event.target.value)}
              placeholder="email@example.com"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingTop: "15px",
                paddingBottom: "10px",
                fontSize: "15px",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "beige",
                borderStyle: "none",
                marginBottom: "20px",
                backgroundColor: "#f1f1f1",
              }}
            />
            <p
              style={{ color: "red", marginBottom: "20px", textAlign: "left" }}
            >
              {errors.email?.message}
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>password</p>
            <input
              value={pass}
              {...register("password", { required: "password is required" })}
              onChange={(event) => setPass(event.target.value)}
              placeholder="password"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingTop: "15px",
                paddingBottom: "10px",
                fontSize: "15px",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "beige",
                borderStyle: "none",
                marginBottom: "20px",
                backgroundColor: "#f1f1f1",
              }}
            />
            <p
              style={{ color: "red", marginBottom: "20px", textAlign: "left" }}
            >
              {errors.password?.message}
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ textAlign: "left", marginBottom: "10px" }}>
              confirm password
            </p>
            <input
              value={confPass}
              {...register("confirmPassword", {
                required: "confirmation of password is required",
              })}
              onChange={(event) => setConfPass(event.target.value)}
              placeholder="confirm password"
              style={{
                width: "100%",
                paddingLeft: "10px",
                paddingTop: "15px",
                paddingBottom: "10px",
                fontSize: "15px",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "beige",
                borderStyle: "none",
                marginBottom: "20px",
                backgroundColor: "#f1f1f1",
              }}
            />
            <p
              style={{ color: "red", marginBottom: "20px", textAlign: "left" }}
            >
              {errors.confirmPassword?.message}
            </p>
          </div>

          <div>
            <a
              style={{
                width: "100%",
                fontSize: "25px",
                color: "white",
                paddingTop: "5px",
                paddingBottom: "10px",
                paddingLeft: "30px",
                paddingRight: "30px",
                backgroundColor: "tomato",
                borderRadius: "10px",
                marginTop: "40px",
              }}
              onClick={handleSubmit(handleSignup)}
              href="#"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
