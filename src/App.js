import React from 'react';
import {BrowserRouter,Switch,Route,NavLink,Redirect,BrowserHistory} from 'react-router-dom';
import {Bootstrap, Grid, Row, Col, Navbar, FormControl, Form, Button} from 'react-bootstrap';
import AxiosInstance from "./AxiosInstance";
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';

import "./styles.css";

import Home from "./routing/Home";
import AnimeInfo from "./routing/AnimeInformation";
import About from "./routing/About";
import AddAnime from "./routing/AddAnime"
import Searchbar from '../src/components/Searchbar';
import './App.css';



// class App extends React.Component {

//   state={
//     // history:createBrowserHistory()
//   }

//   //  conditionalRouting =()=>{
//   //    if(this.navbarRef) this.navbarRef.style={{display:"hidden"}}
      
//   //   }

//   render() {
//     // const conditionalRouting =()=>{
//     //   this.refs.navbar.style={display:"none"}
//     // }
//     return(
//       <BrowserRouter>
//       <div className="App">
//         <Navbar className="nav bg-dark nav_wrapper" /*ref={(element)=>this.navbarRef = element}*/ style={{display : this.navLinkRef.aria-current === true ? "hidden" : "none" }}>
//           <div className="flexbox">
//             <nav>
//               <ul className="nav justify-content-center">
//                <li className="nav-item">
//                   <NavLink className="nav-link  text-light" to="/">
//                    Home
//                  </NavLink>
//                 </li>
//                 <li className="nav-item">
//                  <NavLink className="nav-link  text-light" to="/animeInfo">
//                 Anime Overview
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link  text-light" to="/about">
//                 About us
//               </NavLink>
//             </li>
         
//             <li className="nav-item">
           
//               <NavLink to="/addAnime" ref={el=>this.navLinkRef = el} aria-current="true" /*isActive={(match, location) => {
//     if (!match) {
//       return false;
//     }}}*/ className="nav-link  text-light" >
//                 Add your anime
//               </NavLink>
//             </li>
//             </ul>
//             </nav>
//             </div>
//           </Navbar>
        
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/animeInfo">
//             <AnimeInfo />
//           </Route>
//           <Route path="/about">
//             <About/>
//           </Route>
//           <Route ref ="addanime"path="/addAnime" >
//             <AddAnime/>
//           </Route>
//           <Route path="*">
//             <Redirect to="/"/>
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
      
//     );}
   
//   }



// export default App;

// onChange={this.changeSearchText} value={this.state.searchtext}




// ----------------------------------------------

class App extends React.Component {
  constructor(props) {
    super(props)
  
  }
 

  render() {
    return(

      <BrowserRouter>
      <div className="App">
        <Navbar className="nav bg-dark nav_wrapper">
          <div className="flexbox">
            <nav>
              <ul className="nav justify-content-center">
               <li className="nav-item">
                  <NavLink className="nav-link  text-light" to="/">
                   Home
                 </NavLink>
                </li>
                <li className="nav-item">
                 <NavLink className="nav-link  text-light" to="/animeInfo">
                Anime Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/about">
                About us
              </NavLink>
            </li>
         
            <li className="nav-item">
           
              <NavLink to="/addAnime" className="nav-link text-light" activeClassName="selected" ref="selectedNav" >
                Add your anime
              </NavLink>
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
          <Route ref ="addanime"path="/addAnime" >
            <AddAnime/>
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

      
    );}
   
  }



export default App;