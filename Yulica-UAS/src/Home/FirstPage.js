import React from "react";

import './FirstPage.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import contact from './contact.jfif';
import gambar1 from './1.png';
import gambar2 from './2.png';
import gambar3 from './3.png';
import gambar4 from './4.jpg';
import gambar5 from './5.jpg';
import gambar6 from './6.jpg';
import home1 from './home1.png';
import home2 from './home2.png';
import home3 from './home3.png';
import home4 from './home4.png';
import home5 from './home5.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Redirect,
    useHistory
  } from "react-router-dom";
  
  export default function FirstPage() {
    return (
      <Router>
        <div>
        <AuthButton/>
          <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" style={{fontSize: "x-large", marginRight:"10px"}}  href="/home">Home <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link active" style={{fontSize: "x-large", marginRight:"10px"}} href="/todo">What's ToDo</a>
                  <a className="nav-item nav-link active" style={{fontSize: "x-large"}} href="/contact">Contact Me</a>
                  <a className="nav-item nav-link active" style={{fontSize: "x-large"}} href="/login">Login</a>
                </div>
              </div>
            </nav>
          </div>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/todo">
              <TodoPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/login">
            </Route>
            <PrivateRoute path="/private">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
  
  const fakeAuth = {
    isAuthenticated: false,
    Authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
  function AuthButton() {
    let history = useHistory();
    return fakeAuth.isAuthenticated ? (
      <p>
        Thankyou for using Todoist{""}
        <button type="button" onClick={() => { fakeAuth.signout(() => history.push("/home")); }}  
          style={{marginLeft: "15px", marginTop: "5px" }} className="btn btn-danger">Back To Home</button>
          <br></br>
        <h6>Link will appear after 5 second . . . . </h6>
      </p>
    ) : (
        <p>
          
        </p>
      );
  }
  
  
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/todo",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }
  
  function HomePage() {
    return <div className="card-text">
      <div className="card-header">
        TODOIST
      </div>
      <div className="card-body">
        <center>
          <img className="img-top" src={home1} alt="Card cap" />
        </center>
        <center>
          <img className="img-top" src={home2} alt="Card cap" />
        </center>
        <center>
          <img className="img-top" src={home3} alt="Card cap" />
        </center>
        <center>
          <img className="img-top" src={home4} alt="Card cap" />
        </center>
        <center>
          <img className="img-top" src={home5} alt="Card cap" />
        </center>
      </div>
          
    </div>;
  }
  
  function ProtectedPage() {
    return <h3>Private</h3>;
  }
  
  function TodoPage() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/todo" } };
    let todo = () => {
      fakeAuth.Authenticate(() => {
        history.replace(from);
      });
    };
    return (
      <div className="card-text">
        <div className="card-header">
          TODOIST
        </div>
        <div className="card-deck" >
          <div className="card">
              <div className="card-body">
                <img className="img-catalog" align="center" src={gambar1} alt="Card cap" />
                <h5 className="card-title" align="center" style={{marginTop: "10px"}}>VIU </h5>
                <p className="card-text2">Best Popular Online Movie Streaming</p>
                <button onClick={todo} type="button" className="btn btn-secondary btn-lg btn-block">GO TO VIU</button>
              </div>
              <div className="card-footer">
                <div className="card-body">
                  <img className="img-catalog" align="center" src={gambar4} alt="Card cap" /> 
                  <h5 className="card-title" align="center" style={{marginTop: "10px"}}>SHOPEE</h5>
                  <p className="card-text2">Best Popular E-Commerce</p>
                  <button onClick={todo} type="button" className="btn btn-secondary btn-lg btn-block">GO TO SHOPEE</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img className="img-catalog" align="center" src={gambar2} alt="Card cap" />
                <h5 className="card-title" align="center" style={{marginTop: "10px"}}>SPOTIFY</h5>
                <p className="card-text2">Best Popular Online Music Streaming</p>
                <button onClick={todo} type="button" className="btn btn-secondary btn-lg btn-block">GO TO SPOTIFY</button>
              </div>
              <div className="card-footer">
                <div className="card-body">
                  <img className="img-catalog" align="center" src={gambar5} alt="Card cap" />
                  <h5 className="card-title" align="center" style={{marginTop: "10px"}}>RUANG GURU</h5>
                  <p className="card-text2">Best Popular Education Platform</p>
                <button onClick={todo} type="button" className="btn btn-secondary btn-lg btn-block">GO TO RUANG GURU</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img className="card-gambar3" align="center" src={gambar3} alt="Card cap" />
                <h5 className="card-title" align="center" style={{marginTop: "10px"}}>WATTPAD</h5>
                <p className="card-text2">Best Popular Online Reading</p>
                <button onClick={todo} type="button" className="btn btn-secondary btn-lg btn-block">GO TO WATTPAD</button>
              </div>
              <div className="card-footer">
                <div className="card-body">
                  <img className="img-catalog" align="center" src={gambar6} alt="Card cap" />
                  <h5 className="card-title" align="center" style={{marginTop: "10px"}}>HALO DOC</h5>
                  <p className="card-text2">Best Popular Healthy Consultant Online</p>
                  <button onClick={todo} type="button" className="btn btn-secondary btn-lg btn-block">GO TO HALO DOC</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  function ContactPage() {
    return (
      <div className="card-text">
        <div className="card-header">
          TODOIST
        </div>
        <div className="card-body">
          <section className="container-1">
            <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
            <h3> <strong>Yuli Dwi Cahyanti</strong></h3>
            <h4>Politeknik Negeri Malang</h4>
            <h4>TI - 3B / 1741720165</h4>
            <h4>Email Id: yulidcahya99@gmail.com</h4>
              <a id="mail" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZvlcCzmSHGvlKGGDhmxbfDfQVxlhqHkBghrmGXlppRcCsWsKKxWZqxsFCCmXZnbptTg">
                  <i class="fab fa-mail"/>Click Here To Send Mail</a>
            <h4>Contant Info: </h4>
              <a href="https://www.facebook.com/yulica.yulica.522">
                <i class="fab fa-facebook" ></i>
              </a>
              <a href="https://twitter.com/yeolaaa_" >
                <i class="fa fa-twitter" ></i>
              </a>
              <a href="https://github.com/yulicaa">
                <i class="fab fa-github" ></i>
              </a>
          </section>
        </div>
      </div>
    );
  };