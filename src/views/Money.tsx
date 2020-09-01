import React from 'react';
import Layout from "components/Layout";
import styled from "styled-components";

const TagsSection = styled.div`
  background: rgb(255,255,255);
  padding: 12px 16px;
  > ol {
    margin: 0 -12px;
    >li {
      display: inline-block;
      padding: 2px 18px;
      margin: 8px 12px;
      font-size: 14px;
      background: #d9d9d9;
      border-radius: 16px;
    }
  }
  > button {
    padding: 1px 5px;
    color: #666;
    background: #fff;
    border: none;
    border-bottom: 1px solid #333;
    outline: none;
  }
`
const NoteSection = styled.div`

`
const CategorySection = styled.div`

`
const NumberPadSection = styled.div`

`

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NoteSection>
        <label htmlFor="">
          <span>备注</span>
          <input type="text"/>
        </label>
      </NoteSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>清除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button>ok</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>/</button>
      </NumberPadSection>
    </Layout>
  );
}
export default Money