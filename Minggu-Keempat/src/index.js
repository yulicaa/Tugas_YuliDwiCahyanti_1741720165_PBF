import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StatefullComponent';
import Login from './component/Login';


// function HelloWorld () {
//     return <p>ini adalah function component</p>
// }

// const HelloWorld = () => {
//     return <p> ini adalah arrow function</p>
// }

// class Statefullcomponent extends React.Component 
// {
//     render () {
//         return <p> ini adalah Statefull Component</p>
//     }
// }

class Greeting extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }


  ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<Statefullcomponent />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
