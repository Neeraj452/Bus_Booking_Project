import React from 'react';
import './App.css'
import { Route, Switch} from 'react-router-dom';
import Novbar from "./components/Novbar";
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Signup';
import About from './components/About';
import Login from './components/Login';
import Errorpage from './components/Errorpage';
const App = () =>{
  return(
    <>
    <Novbar />
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/About">
      <About />
    </Route>
    <Route path="/Contact">
      <Contact />
    </Route>
    <Route path="/Login">
      <Login />
    </Route>
    <Route path="/Signup">
      <Signup />
    </Route>
    <Route>
      <Errorpage />
    </Route>
    </Switch>
    </>
  )
}
export default App;
