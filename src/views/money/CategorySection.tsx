import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
font-size: 24px;
> ul {
  background: #c4c4c4;
  display: flex;
  align-items: center;
  > li {
    padding: 16px 0;
    width: 50%;
    text-align: center;
    position: relative;
    &.selected::after {
      content: '';
      display: block;
      height: 3px;
      background: #333;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }
}
`

const CategorySection: React.FC = () => {
  const categoryMap = {'+': '支出', '-': '收入'}
  type X = typeof categoryMap
  type Y = keyof X
  const [categoryList] = useState<Y[]>(['+', '-'])
  const [category, setCategory] = useState<string>('-') // + 收入 - 支出
  
  return <Wrapper>
    <ul>
    {
      categoryList.map(c => 
      <li key={c} className={category === c? "selected": ""}
      onClick={() => setCategory(c)}>{categoryMap[c]}</li>)
    }
    </ul>
  </Wrapper>
}

export {
  CategorySection
}