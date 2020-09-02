import React from 'react';
import Layout from "components/Layout";
import { useTags } from 'lib/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';

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

function Tags() {
  const { tags, setTags } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag => <li key={tag['id']}><Link to={`/tags/${tag['id']}`}>
  <span className="one-line">{tag['id']}{tag['name']}</span><Icon name="right"/>
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