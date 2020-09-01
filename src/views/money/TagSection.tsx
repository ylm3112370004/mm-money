import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
      &.selected {
        background: #f60;
      }
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

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  console.log('yl', tags)
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名字为')
    if (tagName !== null) {
      setTags([...tags, tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t != tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const isSelected = (tag: string) => selectedTags.indexOf(tag)>=0? 'selected': ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => 
          <li key={tag} onClick={() => onToggleTag(tag)} 
          className={isSelected(tag)}>{tag}</li>)
        }
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export {
  TagsSection
}