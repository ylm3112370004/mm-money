import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import x from 'icons/tags.svg';
import y from 'icons/money.svg';
import z from 'icons/charts.svg';

const NavWrapper = styled.nav`
  box-shadow: 0 0 4px rgba(0,0,0, .3);
  > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    > li {
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
              <svg className="icon">
                <use xlinkHref="#tags"/>
              </svg>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <svg className="icon">
                <use xlinkHref="#money"/>
              </svg>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <svg className="icon">
                <use xlinkHref="#charts"/>
              </svg>
              <Link to="/statistic">统计</Link>
            </li>
          </ul>
        </NavWrapper>
  )
}

export default Nav;