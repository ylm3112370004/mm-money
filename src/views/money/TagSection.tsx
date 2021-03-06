import React from 'react';
import styled from 'styled-components';
import { useTags } from 'lib/useTags';

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
type Props = {
  value: number[];
  onChange: (value: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags()
  const selectedTagIds = props.value;
  // const [selectedTags, setSelectedTags] = useState<string[]>(props.selected)
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }
  const isSelected = (tagId: number) => selectedTagIds.indexOf(tagId)>=0? 'selected': ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => 
          <li key={tag['id']} onClick={() => onToggleTag(tag['id'])} 
          className={isSelected(tag['id'])}>{tag['name']}</li>)
        }
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export {
  TagsSection
}