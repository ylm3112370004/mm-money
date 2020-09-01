import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/Icon";

const NavWrapper = styled.nav`
  background: #fff;
  box-shadow: 0 0 4px rgba(0,0,0, .3);
  > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    > li a {
      padding: 4px;
      display: flex;
      flex-direction: column;
      &.selected {
        color: #ff7675;
        transform: scale(1.1)
      }
    }
  }
`

function Nav() {
  return(
    <NavWrapper>
          <ul>
            <li>
              <NavLink to="/tags" activeClassName="selected"><Icon name="tags"/>标签</NavLink>
            </li>
            <li>
              <NavLink to="/money" activeClassName="selected"><Icon name="money"/>记账</NavLink>
            </li>
            <li>
              <NavLink to="/statistic" activeClassName="selected"><Icon name="charts"/>统计</NavLink>
            </li>
          </ul>
        </NavWrapper>
  )
}

export default Nav;