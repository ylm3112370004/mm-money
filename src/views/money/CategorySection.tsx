import styled from 'styled-components';

const CategorySection = styled.section`
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

export {
  CategorySection
}