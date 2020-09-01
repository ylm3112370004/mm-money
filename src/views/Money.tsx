import React from 'react';
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

function Money() {
  return (
    <MyLayout>
      <TagsSection></TagsSection>
      <NoteSection></NoteSection>
      <CategorySection></CategorySection>
      <NumberPadSection></NumberPadSection>
    </MyLayout>
  );
}
export default Money