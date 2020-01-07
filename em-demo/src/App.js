import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './Pages/Home/Home';



export class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Dragos',
      surname: 'Iordache',
    };
  }

  render () {
    return(
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <Home name={`${this.state.name} ${this.state.surname}`}></Home>
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}