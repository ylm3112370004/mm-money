import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "components/Layout";

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

function NoMatch() {
  return (
    <div>没有找到页面</div>
  )
}
function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout>
  );
}

function Statistic() {
  return (
    <Layout>
      <h2>Statistic</h2>
    </Layout>
  );
}

export default App;
