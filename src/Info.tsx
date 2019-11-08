// import React, { useState, useEffect } from 'react';

// function Info() {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');

//   const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNickname(e.target.value);
//   };

//   useEffect(() => {
//     console.log('rendering', { name, nickname });

//     return () => {
//       console.log('cleanup');
//       console.log(name);
//     };
//   }, []);

//   return (
//     <div>
//       <input type="text" value={name} onChange={onChangeName} />
//       <input type="text" value={nickname} onChange={onChangeNickname} />
//       <p>이름 : {name}</p>
//       <p>닉네임 : {nickname}</p>
//     </div>
//   );
// }

// export default Info;


import React from 'react';
import useInput from './useInput';

function Info() {

  const { state, onChange } = useInput({ name: '', nickname: '' });  
  const { name, nickname } = state;

  return (
    <div>
      <input 
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input 
        type="text"
        name="nickname"
        value={nickname}
        onChange={onChange}
      />
      <div>
        이름: {name} <br/>
        닉네임: {nickname}
      </div>
    </div>
  )
}

export default Info;