import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "./util/axiosWithAuth";
import { AgentContext } from "../Context/AgentsContext";

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

function AddFriend(props) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [agentsList, setAgentsList] = useContext(AgentContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    axiosWithAuth()
      .post("/friends", values)
      .then((res) => {
        setAgentsList(res.data);
      })
      .catch((err) => {
        console.log("error adding user", err);
      });
    props.history.push("/support-team");
    setValues({ name: "", age: "", email: "" });
  }

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  }

  return (
    <FormContainer className="formContainer">
      <div className="formLogo">
        <h2>Add Friend</h2>
      </div>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div>
          <label>
            {" "}
            Name
            <br />
            <input name="name" type="text" onChange={handleChange} />
            <hr />
          </label>
        </div>

        <br />
        <div>
          <label>
            Age:
            <br />
            <input name="age" type="text" onChange={handleChange} />
            <hr />
          </label>
        </div>
        <div>
          <label>
            Email address:
            <br />
            <input name="email" type="email" onChange={handleChange} />
            <hr />
          </label>
        </div>
        <button type="submit">Add Friend</button>
      </form>

      <div>
        {values.name}
        {values.age}
      </div>
    </FormContainer>
  );
}

export default AddFriend;
