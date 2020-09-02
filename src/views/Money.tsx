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
    addRecord(selected)
    alert('保存成功')
    setSelected(defaultFormData)
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}></TagsSection>
      <NoteSection value={selected.note} onChange={note => onChange({note})}></NoteSection>
      <CategorySection value={selected.category} onChange={category => onChange({category})}></CategorySection>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})}
      onOk={handleOk}
      ></NumberPadSection>
    </MyLayout>
  );
}
export default Money