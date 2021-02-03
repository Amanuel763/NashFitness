import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Program from './components/Pages/Programms/Program'
import Footer from './components/FooterComponent';
import WellnessPage from './components/Pages/WellnessInfo/WellnessPage';
import MissionPage from './components/Pages/Mission/MissionPage';



class App extends Component {
  render(){
    return (

      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/mission' exact component={MissionPage} />
            <Route path='/program'  component={Program} />
            <Route path='/wellness'  component={WellnessPage} />
          </Switch>
        <Footer />
    </Router>


      /*
      <BrowserRouter>
          <div className="App">
              <Main />
          </div>
      </BrowserRouter>
      */

  );

  } 
    
} 

export default App;
