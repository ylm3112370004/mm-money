import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
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
    <div>
      <h2>Tags</h2>
    </div>
  );
}

function Money() {
  return (
    <div>
      <h2>Money</h2>
    </div>
  );
}

function Statistic() {
  return (
    <div>
      <h2>Statistic</h2>
    </div>
  );
}

export default App;
