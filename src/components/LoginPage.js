import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../components/util/axiosWithAuth";

const FormContainer = styled.div`
  .formLogo {
    padding: 40px 10px;
    background: rgb(250, 170, 91);
    width: 23rem;
    margin: auto;
    color: rgb(120, 200, 133);
  }
  form {
    margin: auto;
    padding: 20px 10px;
    background: white;
    text-align: left;
    width: 23rem;
    color: rgb(145, 143, 143);
    font-weight: bold;
    input {
      width: 100%;
      padding-left: 5%;
      padding-right: 5%;
      border-style: none;
      border-image: initial;
      outline: none;
    }
    p,
    .sign-up {
      margin-top: 15px;
      margin-bottom: 5px;
      cursor: pointer;
      color: rgb(145, 143, 143);
    }
  }
  hr {
    margin-top: 5px;
    padding-left: ;
  }
  button {
    width: 80%;
    height: 30px;
    margin: 20px 33px;
    text-align: center;
    background-color: rgb(145, 143, 143);
    font-weight: bold;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

function LoginInForm(props) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    axiosWithAuth()
      .post("/login", values)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        // redirect to the apps main page?
        props.history.push("/");
      })
      .catch((err) => console.log(err));
    setValues({ username: "", password: "" });
  }

  function handleChange(e) {
    // const { name, value } = e.target;

    setValues({
      ...values,
      // [name]: value
      [e.target.name]: e.target.value,
    });
  }

  return (
    <FormContainer className="formContainer">
      <div className="formLogo">
        <h2>Sign In Form </h2>
      </div>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div>
          <label>
            {" "}
            Email address
            <br />
            <input
              name="username"
              type="text"
              placeholder="the usernam is a"
              value={values.username}
              onChange={handleChange}
            />
            <hr />
          </label>
        </div>

        <br />
        <div>
          <label>
            Password
            <br />
            <input
              name="password"
              type="password"
              placeholder="the password is b"
              value={values.password}
              onChange={handleChange}
            />
            <hr />
          </label>
          <p>Forgot your password?</p>
          {/* <LoginBtn/> */}
        </div>
        <button type="submit">Sign in</button>
      </form>
    </FormContainer>
  );
}

export default LoginInForm;
