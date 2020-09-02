import React, { useState } from 'react';
import Layout from "components/Layout";
import styled from "styled-components";
import { TagsSection } from './money/TagSection';
import { NoteSection } from './money/NoteSection';
import { CategorySection } from './money/CategorySection';
import { NumberPadSection } from './money/NumberPadSection';
import { useRecords } from 'lib/useRecord';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  background: #c4c4c4;
`

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  const { addRecord } = useRecords()
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const handleOk = () => {
    const success = addRecord(selected)
    if(success) {
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}></TagsSection>
      <NoteSection value={selected.note} onChange={note => onChange({note})}></NoteSection>
      <Wrapper><CategorySection value={selected.category} onChange={category => onChange({category})}></CategorySection></Wrapper>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})}
      onOk={handleOk}
      ></NumberPadSection>
    </MyLayout>
  );
}
export default Money