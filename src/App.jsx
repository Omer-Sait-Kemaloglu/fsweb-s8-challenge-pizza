import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Banner} />
        
      </Switch>
    </Router>
  );
};

export default App;