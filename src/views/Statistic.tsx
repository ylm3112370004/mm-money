import React, { useState } from 'react';
import Layout from "components/Layout";
import { CategorySection } from './money/CategorySection';
import styled from 'styled-components';
import { useRecords, RecordItem } from 'lib/useRecord';
import { useTags } from 'lib/useTags';
import day from 'dayjs';

const Wrapper = styled.div`
  background: #fff;
`
const Title = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
const Item = styled.div`
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  > .note {
    margin-right: auto;
    margin-left: 10px;
    color: #999;
  }
`

function Statistic() {
  const [category, setCategory] = useState<'+' | '-'>('-')
  const { records } = useRecords()
  const { getName } = useTags()
  const hash:{[k: string]: RecordItem[]} = {}
  const selectedRecords = records.filter(r => r.category === category)

  selectedRecords.map(r => {
    const key = day(r.createAt).format('YYYY年MM月DD月')
    if(!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })

  const array = Object.entries(hash).sort((a, b) => {
    if(a[0] === b[0]) return 0
    if(a[0] > b[0]) return 1
    if(a[0] < b[0]) return -1
    return 0
  })

  return (
    <Layout>
      <Wrapper>
        <CategorySection value={category} onChange={
          value => setCategory(value)
        } />
      </Wrapper>
      {array.map(([data, records]) => <div>
        <Title>{data}</Title>
        <div>
        {records.map(r => {
          return <Item key={r.createAt}>
            <div className="tags">
            {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">{r.note}</div>}
            {r.amount}
          </Item>
        })}
      </div>
      </div>)}
    </Layout>
  );
}

export default Statistic