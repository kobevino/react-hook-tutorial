import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers: number[]) => {
  console.log('평균값 계산 중');

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a: number, b: number) => a + b);

  return sum / numbers.length;
};

function Average() {

  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  const id = useRef(1);

  const setId = (n: number) => {
    id.current = n;
  };

  const printId = () => {
    console.log(id.current);
  }

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange');
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current && inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input 
        type="text"
        value={number}
        onChange={onChange}
        ref={inputEl}
      />
      <button onClick={onInsert}>등록</button>
      
      <ul>
        {list.map((value, idx) => <li key={idx}>{value}</li>)}
      </ul>

      <div>
        <b>평균값: {avg}</b>
      </div>
    </div>
  )
}

export default Average;