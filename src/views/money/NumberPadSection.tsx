import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
> .output {
  background: #fff;
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding: 0 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,.25), 
              inset 0 5px 5px -5px rgba(0,0,0,.25)
}
> .pad {
  > button {
    float: left;
    width: 25%;
    height: 64px;
    border: none;
    outline: none;
    &.ok {
      height: 128px;
      float: right;
    }
    &.zero {
      width: 50%;
    }
    /* &.dot {
      float: right;
    } */
    &:nth-child(1){
      background:#f2f2f2;
    }
    &:nth-child(2),
    &:nth-child(5) {
      background:#E0E0E0;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      background:#D3D3D3;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      background:#C1C1C1;
    }
    &:nth-child(8),
    &:nth-child(11),
    &:nth-child(13) {
      background:#B8B8B8;
    }
    &:nth-child(12) {
      background:#9A9A9A;
    }
    &:nth-child(14) {
      background:#A9A9A9;
    }
  }
}
`

const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState<string>('0')
  const _setOutput = (output: string) => {
    if(output.length > 16) {
      output = output.slice(0, 16)
    } else if(output.length === 0) {
      output = '0'
    }
    setOutput(output)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if(text === null) { return }
    if(text) {
      switch(text) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if(output === "0") {
            _setOutput(text)
          } else {
            _setOutput(output + text)
          }
          break;
        case '.':
          if(output.indexOf(".") >= 0) { break }
          _setOutput(output + ".")
          break;
        case '清除':
          if(output.length === 1) {
            _setOutput("")
          } else {
            _setOutput(output.slice(0, -1))
          }
          break;
        case '清空':
          _setOutput("")
          break;
        case 'ok':
          console.log('确认', output)
          break;
      }
    }
  }
  return <Wrapper>
    <div className="output">{output}</div>
        <div className="pad clearfix" onClick={onClickButtonWrapper}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>清除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">ok</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
  </Wrapper>
}

export {
  NumberPadSection
}