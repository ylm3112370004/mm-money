import React, { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 10px 16px;
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
  value: string;
  onChange: (value: string) => void;
}
const NoteSection:React.FC<Props> = (props) => {
  // const [note, setNote] = useState<string>('')
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if(refInput.current !== null) {
      props.onChange(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label htmlFor="">
          <span>备注</span>
          {/* <input value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="在这里添加备注" /> */}
          <input ref={refInput} defaultValue={note} onBlur={onBlur} type="text" placeholder="在这里添加备注" />
        </label>
    </Wrapper>
  )
}

export {
  NoteSection
}