import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useTags } from 'lib/useTags';
import Icon from 'components/Icon';
import { Button } from 'components/Button';
import styled from 'styled-components';
import Input from 'components/Input';
import Layout from 'components/Layout';
import { Space, Center } from 'components/Position';

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
const InputWrapper = styled.div`
  background: #fff;
`
const Tag = () => {
  const { findTag, updateTag, deleteTag } = useTags()
  const { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString))
  const history = useHistory();
  const onclickBack = () => {
    history.goBack()
  }
  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={onclickBack}/>
        <span>编辑标签</span>
        <span></span>
      </TopBar>
      <Space></Space>
      {tag? 
      <>
        <InputWrapper>
          <Input label="标签名"
            type="text"
            value={tag.name}
            onChange={e => {
              updateTag(tag.id, {name: e.target.value})
            }}
            placeholder="在这里添加备注" />
          </InputWrapper>
        <Center>
          <Space></Space>
          <Space></Space>
          <Space></Space>
          <Button onClick={() => {
            deleteTag(tag.id)
          }}>删除标签</Button>
        </Center>
      </>: <Center>tag不存在</Center> }
    </Layout>
  )
}

export default Tag