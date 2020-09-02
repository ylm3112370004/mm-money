import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      height: 48px;
    }
  }
`

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<Props> = (props) => {
  const { label, children, ...rest } = props
  return(
    <Wrapper>
      <label htmlFor="">
        <span>{props.label}</span>
        <input  {...rest}/>
      </label>
    </Wrapper>
  )
}

export default Input