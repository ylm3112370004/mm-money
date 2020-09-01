import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`
const Nav = styled.nav`
  > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    > li {
      padding: 16px;
    }
  }


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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistic">统计</Link>
            </li>
          </ul>
        </Nav>
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
