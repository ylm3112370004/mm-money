import React, { useState } from 'react';
import Layout from "components/Layout";
import styled from "styled-components";
import { TagsSection } from './money/TagSection';
import { NoteSection } from './money/NoteSection';
import { CategorySection } from './money/CategorySection';
import { NumberPadSection } from './money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  })

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const handleOk = (value: number) => {
    console.log(value)
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tags} onChange={tags => onChange({tags})}></TagsSection>
      <NoteSection value={selected.note} onChange={note => onChange({note})}></NoteSection>
      <CategorySection value={selected.category} onChange={category => onChange({category})}></CategorySection>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})}
      onOk={(value) => handleOk(value)}
      ></NumberPadSection>
    </MyLayout>
  );
}
export default Money