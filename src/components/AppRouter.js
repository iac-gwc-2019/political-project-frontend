import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Subjects from './Subjects/Subjects';
import Politicians from './Politicians/Politicians';
import Bills from './Bills/Bills';
import SearchAll from './Search/SearchAll'
import About from './About/About'
import NoMatch from './NoMatch/NoMatch';
import SpecificSearch from './Search/SpecificSearch'
import { Layout } from './Layout/Layout'
import { NavigationBar } from './Navigation/NavigationBar'

function AppRouter() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/subjects" component={Subjects} />
            <Route exact path="/politicians" component={Politicians} />
            <Route exact path="/bills" component={Bills} />
            <Route exact path="/all" component={SearchAll} />
            <Route exact path="/about" component={About} />
            <Route exact path="/yoursearchterm" component={SpecificSearch} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;
