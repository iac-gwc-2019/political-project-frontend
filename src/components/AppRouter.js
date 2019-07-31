<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Subjects from './GeneralPages/AllSubjects/AllSubjects';
import Bills from './GeneralPages/AllBills/AllBills';
import Politicians from './GeneralPages/AllPoliticians/AllPoliticians';
import Navigation from './Navigation/Navigation';

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
=======
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
>>>>>>> 5bf01b5... integrated app with react bootstrap for prettier
  );
}

export default AppRouter;
