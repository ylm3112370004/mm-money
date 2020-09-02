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
  const addRecord = (record: Item) => {
    
    setRecords([...records, {...record, createAt: new Date().toISOString()}])
  }


  return { records, addRecord }
}