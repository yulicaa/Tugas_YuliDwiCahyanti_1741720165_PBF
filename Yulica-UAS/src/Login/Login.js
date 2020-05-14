import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import "./Login.css";
import Firebase from "../firebase/config";
import { AuthContext } from "../Auth/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await Firebase.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        Firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            console.log("Welcome: " + user.email);
          }
        });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const firstPage = () => {
    history.push("/home");
  };

  const signUp = () => {
    history.push("/signup");
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="card-text">
      <div className="card-header">
        TODOIST
      </div>
      <div className="card-body">
      <section className="container-1">
        <form className="loginbox" onSubmit={handleLogin}>
          <h3>LOGIN</h3>
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
          <button id="submit">Login</button>
          <br></br>
          <h2>Don't Have Account?</h2>
          <button id="submit" onClick={signUp}>
          Sign Up
          </button>
        </form>
        <br></br>
        <button id="submit" onClick={firstPage}>
          Go To FirstPage
        </button>
        </section>
      </div>
      
    </div>
  );
};

export default withRouter(Login);
