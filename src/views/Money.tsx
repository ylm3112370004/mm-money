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
  const handleOk = (value: number) => {
    console.log(value)
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tags} onChange={value => setSelected({
        ...selected, tags: value
      })}></TagsSection>
      <NoteSection value={selected.note} onChange={value => {
        console.log('ylm', value)
        setSelected({
          ...selected, note: value
        })
      }}></NoteSection>
      <CategorySection value={selected.category} onChange={value => setSelected({
        ...selected, category: value
      })}></CategorySection>
      <NumberPadSection value={selected.amount} onChange={value => setSelected({
        ...selected, amount: value
      })}
      onOk={(value) => handleOk(value)}
      ></NumberPadSection>
    </MyLayout>
  );
}
export default Money