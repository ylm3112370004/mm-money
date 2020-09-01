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
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}

export default App;
