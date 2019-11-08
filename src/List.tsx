import React, { useState } from 'react';

function List() {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' }
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(4);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onDelete = (id: number) => {
    const nextNames = names.filter(name => name.id !== id);

    setNames(nextNames);
  };

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={e => onDelete(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <button type="button" onClick={onClick}>
        추가
      </button>
      <ul>{namesList}</ul>
    </div>
  );
}

export default List;
