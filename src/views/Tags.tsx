import React from 'react';
import Layout from "components/Layout";
import { useTags } from 'libs/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li {
    padding: 10px 16px;
    border-bottom: 1px solid #f5f5f5;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > svg {
        color: red;
      }
    }
    
  }
`
const Space = styled.div`
  height: 16px;
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  outline: none;
  padding: 8px 12px;
  background: #767676;
  color: #fff;
  border-radius: 4px;
`

function Tags() {
  const { tags, setTags } = useTags()
  console.log(tags)
  return (
    <Layout>
      <TagList>
        {tags.map(tag => <li key={tag['id']}><Link to={`/tags/${tag['id']}`}>
            <span className="one-line">{tag['name']}</span><Icon name="right"/>
          </Link>
          </li>)}
      </TagList>
      <Center>
        <Space></Space>
        <Space></Space>
        <Space></Space>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags