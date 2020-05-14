import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Firebase from "../firebase/config";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await Firebase.auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(
            Firebase.database().ref("user").push({
              email: email.value,
            })
          );
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const back = () => {
    history.push("/login");
  };

  return (
    <div className="card-text">
      <div className="card-header">
        TODOIST
      </div>
    <div className="card-body">
      <section className="container-1">
        <h3>Create your Account</h3>
        <form className="loginbox" onSubmit={handleSignUp}>
          <label>
            Email
            <br></br>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <br></br>
          <label>
            Password
            <br></br>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <br></br>
          <button id="submit">Create Account</button>
        </form>
        <br></br>
        <button id="submit" onClick={back}>
          Back
        </button>
      </section>
    </div>
    </div>
  );
};

export default withRouter(SignUp);
