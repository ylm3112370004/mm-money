import React from 'react';
import Input from 'components/Input';

type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NoteSection:React.FC<Props> = (props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <Input label="备注" 
            value={props.value}
            onChange={handleChange} 
            type="text" 
            placeholder="在这里添加备注" />
  )
}

export {
  NoteSection
}