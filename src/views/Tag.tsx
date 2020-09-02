import React from 'react';
import Layout from 'components/Layout';
import { useParams } from "react-router-dom";
import { useTags } from 'lib/useTags';
import Icon from 'components/Icon';
import { Button } from 'components/Button';
import styled from 'styled-components';

type Params = {
  id: string;
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  background: #fff;
  > svg {
    width: 1em;
    height: 1em;
  }
`

const Tag = () => {
  const { findTag } = useTags()
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id))
  return <Layout>
    <TopBar>
      <Icon name="left"/>
      <span>编辑标签</span>
      <span></span>
    </TopBar>
    <div>
      <label htmlFor="">
          <span>备注</span>
          {/* <input value={note} onChange={(e) => setNote(e.target.value)} type="text" placeholder="在这里添加备注" /> */}
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </div>
    <div><Button>删除标签</Button></div>
    {tag.name}
  </Layout>
}

export default Tag