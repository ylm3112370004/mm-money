import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/Icon";

const NavWrapper = styled.nav`
  box-shadow: 0 0 4px rgba(0,0,0, .3);
  > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    > li a {
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
  }
`

function Nav() {
  return(
    <NavWrapper>
          <ul>
            <li>
              <Link to="/tags"><Icon name="tags"/>标签</Link>
            </li>
            <li>
              <Link to="/money"><Icon name="money"/>记账</Link>
            </li>
            <li>
              <Link to="/statistic"><Icon name="charts"/>统计</Link>
            </li>
          </ul>
        </NavWrapper>
  )
}

export default Nav;