import React from 'react';
import Layout from "components/Layout";
import { useTags } from 'lib/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { Space, Center } from 'components/Position';

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

function Tags() {
  const { tags, addTag } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag => <li key={tag['id']}>
          <Link to={`/tags/${tag['id']}`}>
            <span className="one-line">{tag['id']}|{tag['name']}</span><Icon name="right"/>
          </Link>
          </li>)}
      </TagList>
      <Center>
        <Space></Space>
        <Space></Space>
        <Space></Space>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags