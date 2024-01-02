import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';

function App() {
  return (
    <Router>
      <Route exact path="/" component={VendingMachine} />
      <Route exact path="/soda" component={Soda} />
      <Route exact path="/chips" component={Chips} />
      <Route exact path="/candy" component={Candy} />
    </Router>
  );
}

export default App;
