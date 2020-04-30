import React, { Component } from 'react';
import Login from './pages/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Register from './pages/Register'
import Home from './pages/Home';

//import {Navigation} from './pages/Navigation'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Home from "./pages/Home"

// function App() {
//   return (
//     <div className="App">
//       <Login/>
//     </div>
//   );
// }
class App extends Component{
  constructor(props){
    super(props)
  }
render(){
  return(
    <Router>      
      <Switch>
        <Route path='/' component={Home} exact/>
        {/* <Route path='/Register' component={Register}/>
        <Route path='/' component={Home} exact/> */}
      </Switch>
    </Router>

  )
}

}


export default App;
