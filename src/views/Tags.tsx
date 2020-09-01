import React from 'react';
import Layout from "components/Layout";
import { useTags } from 'libs/useTags';

function Tags() {
  const { tags, setTags } = useTags()
  console.log(tags)
  return (
    <Layout>
      <ul>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </Layout>
  );
}

export default Tags