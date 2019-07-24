import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Subjects from './Subjects/Subjects';
import Bills from './Bills/Bills';
import Politicians from './Politicians/Politicians';
import Navigation from './Navigation/Navigation'

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/bills" component={Bills} />
        <Route path="/politicians" component={Politicians} />
      </div>
    </Router>
  );
}

export default AppRouter;
