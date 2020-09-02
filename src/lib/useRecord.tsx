import { useState, useEffect } from 'react';

type RecordItem = Item & {
  createAt: string;
}

type Item = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
}

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])
  useEffect(() => {
    const localRecords = JSON.parse(window.localStorage.getItem('records') || '[]')
    setRecords(localRecords)
  }, [])
  useEffect(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  const addRecord = (item: Item) => {
    if(item.amount <= 0) { 
      alert('请输入金额')
      return false 
    }
    if(item.tagIds.length === 0) {
      alert('请选择标签')
      return false
    }
    setRecords([...records, {...item, createAt: new Date().toISOString()}])
    return true
  }


  return { records, addRecord }
}