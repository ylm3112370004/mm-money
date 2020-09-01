import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistic from 'views/Statistic';
import NoMatch from 'views/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistic">
          <Statistic />
        </Route>
        <Redirect exact from="/" to="tags" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
