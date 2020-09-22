import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import About from './components/pages/About';
import Search from './components/bhajans/Search';
import BhajanState from './components/context/BhajanState';
import './App.css';
function App() {
  return (
    <BhajanState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
        <div class='clear'></div>
        <Footer />
      </Router>
    </BhajanState>
  );
}

export default App;
