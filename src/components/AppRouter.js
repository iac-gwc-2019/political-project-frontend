import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Subjects from './Subjects/Subjects';
import Politicians from './Politicians/Politicians';
import Bills from './Bills/Bills';
import AllSubjects from './GeneralPages/AllSubjects/AllSubjects';
import AllPoliticians from './GeneralPages/AllPoliticians/AllPoliticians';
import About from './About/About';
import NoMatch from './NoMatch/NoMatch';
import SearchResults from './SearchResults/SearchResults';
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
            <Route exact path="/subjects" component={AllSubjects} />
            <Route exact path="/subjects/:subjectName" component={Subjects} />
            <Route exact path="/politicians" component={AllPoliticians} />
            <Route exact path="/politicians/:politicianId" component={Politicians} />
            <Route exact path="/bills/:billSlug" component={Bills} />
            <Route exact path="/about" component={About} />
	          <Route exact path="/searchresults" component={SearchResults} />
            <Route exact path="/404" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default AppRouter;
