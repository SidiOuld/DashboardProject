import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "./util/axiosWithAuth";
import { AgentContext, AgentProvider } from "../Context/AgentsContext";

// const FormContainer = styled.div`
//   // border: 2px solid black;
//   width: 23rem;
//   height: 80vh;
//   .formLogo {
//     padding: 40px 10px;
//     background: rgb(250, 170, 91);
//     width: 23rem;
//     margin: auto;
//     color: rgb(120, 200, 133);
//   }
//   form {
//     margin: auto;
//     padding: 20px 10px;
//     background: white;
//     text-align: left;
//     width: 23rem;
//     color: rgb(145, 143, 143);
//     font-weight: bold;
//     input {
//       width: 100%;
//       padding-left: 5%;
//       padding-right: 5%;
//       border-style: none;
//       border-image: initial;
//       outline: none;
//     }
//     p,
//     .sign-up {
//       margin-top: 15px;
//       margin-bottom: 5px;
//       cursor: pointer;
//       color: rgb(145, 143, 143);
//     }
//   }
//   hr {
//     margin-top: 5px;
//     padding-left: ;
//   }
//   button {
//     width: 80%;
//     height: 30px;
//     margin: 20px 33px;
//     text-align: center;
//     background-color: rgb(145, 143, 143);
//     font-weight: bold;
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
//   }
// `;

const FormContainer = styled.div`
  border: 2px solid black;
  margin: 70px auto;
  width: 23rem;
  .formLogo {
    padding: 40px 10px;
    // background: rgb(250, 170, 91);
    background: gray;
    width: 22.78rem;
    margin: auto;
    color: rgb(120, 200, 133);
  }
  form {
    // border: 2px solid black;
    margin: auto;
    padding: 20px 10px;
    // background: white;
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
const OuterContainer = styled.div`
  height: 80vh;
`;

function UpdateAgentForm(props) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [agentsList, setAgentsList] = useContext(AgentContext);

  const { match } = props;
  useEffect(() => {
    const id = match.params.id;
    const itemToUpdate = agentsList.find((item) => `${item.id}` === id);
    if (itemToUpdate) {
      console.log(itemToUpdate);
      setValues(itemToUpdate);
    }
  }, [match, agentsList]);

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .put(`/friends/${values.id}`, values)
      .then((res) => {
        setAgentsList(res.data);
        props.history.push(`/players`);
        // setAgentsList(values);
      })
      .catch((err) => console.log(err.response));
  }

  function handleChange(e) {
    // const { name, value } = e.target;

    setValues({
      ...values,
      // [name]: value
      [e.target.name]: e.target.value,
    });
    console.log(values);
  }

  return (
    <OuterContainer>
      <FormContainer className="formContainer">
        <div className="formLogo">
          <h2>Update Agent</h2>
        </div>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div>
            <label>
              {" "}
              Name
              <br />
              <input
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
              <hr />
            </label>
          </div>

          <br />
          <div>
            <label>
              Age:
              <br />
              <input
                name="age"
                type="text"
                value={values.age}
                onChange={handleChange}
              />
              <hr />
            </label>
          </div>
          <div>
            <label>
              Email address:
              <br />
              <input
                name="email"
                type="email"
                value={values.emails}
                onChange={handleChange}
              />
              <hr />
            </label>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </FormContainer>
    </OuterContainer>
  );
}

export default UpdateAgentForm;
