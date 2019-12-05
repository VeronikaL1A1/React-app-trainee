import React from 'react';
import {BrowserRouter,Switch,Route,Link,Redirect} from 'react-router-dom';
import {Bootstrap, Grid, Row, Col, Navbar, FormControl, Form, Button} from 'react-bootstrap';
import AxiosInstance from "./AxiosInstance";

import 'bootstrap/dist/css/bootstrap.css';

import "./styles.css";

import Home from "./routing/Home";
import AnimeInfo from "./routing/AnimeInformation";
import About from "./routing/About";
import AddAnime from "./routing/AddAnime"
import './App.css';



class App extends React.Component {


onSearch (event) {
  this.setState({search:event.target.value})
}
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar className="nav bg-dark nav_wrapper">
            <div className="flexbox">
              <nav>
                <ul className="nav justify-content-center">
                 <li className="nav-item">
                    <Link className="nav-link  text-light" to="/">
                     Home
                   </Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link  text-light" to="/animeInfo">
                  Anime Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/addAnime">
                  Add your anime
                </Link>
              </li>
              </ul>
              </nav>
              </div>
            </Navbar>
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/animeInfo">
              <AnimeInfo />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/addAnime">
              <AddAnime/>
            </Route>
            <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

// onChange={this.changeSearchText} value={this.state.searchtext}