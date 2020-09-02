import { useState, useEffect } from 'react';
import { createId } from 'lib/createId';

// const defaultTags = [
//   {id: createId(), name: '衣'},
//   {id: createId(), name: '食'}, 
//   {id: createId(), name: '住'}, 
//   {id: createId(), name: '行'}]

const useTags = () => {
  const [tags, setTags] = useState<{id: number; name: string}[]>([])
  useEffect(() => { // componentDidMount
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if(localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'}, 
        {id: createId(), name: '住'}, 
        {id: createId(), name: '行'}
      ]
    }
    setTags(localTags)
  }, [])
  useEffect(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags]) // 不可变数据，新的数据
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
  
  const findTagIndex = (id: number) => {
    let result = -1
    for(let i=0; i<tags.length; i++) {
      if(tags[i].id === id) {
        result = i
        break
      }
    }
    return result
  }

  const updateTag = (id: number, {name}: {name: string}) => {
    setTags(tags.map(tag => tag.id === id? {id, name}: tag))
  }

  const deleteTag = (id: number) => setTags(tags.filter(tag => tag.id !== id))
  
  const addTag = () => {
    const tagName = window.prompt('新标签的名字为')
    if (tagName !== null && tagName !== "") {
      setTags([...tags, {id: createId(), name: tagName}])
    }
  }

  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0]
    return tag? tag.name: ""
  }

  return {
    tags,
    setTags,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag,
    addTag,
    getName
  }
}

export { useTags }