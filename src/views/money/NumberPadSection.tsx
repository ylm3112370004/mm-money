import React from 'react';
import { generateOutput } from './NumberPadSection/generateOutput'
import { Wrapper } from './NumberPadSection/Wrapper';

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: (value: number) => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  // const [output, setOutput] = useState<string>('0')
  const output = props.value.toString()
  const _setOutput = (output: string) => {
    if(output.length > 16) {
      output = output.slice(0, 16)
    } else if(output.length === 0) {
      output = '0'
    }
    props.onChange(parseFloat(output))
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if(text === null) { return }
    if(text === 'OK') { 
      if(props.onOk) {
        props.onOk(parseFloat(output));
      }
      return 
    }
    if('0123456789.'.split('').concat(['清除', '清空']).indexOf(text)>= 0) {
      _setOutput(generateOutput(text, output))
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
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
  </Wrapper>
}

export {
  NumberPadSection
}