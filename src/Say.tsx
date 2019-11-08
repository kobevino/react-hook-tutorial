import React, { useState } from 'react';

function Say() {
  // const [message, setMessage] = useState('');
  // const [color, setColor] = useState('red');

  // const handleEnter = () => setMessage('안녕하세요.');
  // const handleLeave = () => setMessage('안녕히 가세요.');

  const [form, setForm] = useState({ username: '', message: '' });
  const { username, message } = form;

  // const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUsername(e.target.value);
  // const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setMessage(e.target.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextForm = {
      ...form,
      [name]: value
    };

    setForm(nextForm);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(username, message);
      setForm({ username: '', message: '' });
    }
  };

  return (
    <div>
      <input name="username" value={username} onChange={handleChange} />
      <input
        name="message"
        value={message}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />

      {/* <button onClick={handleEnter}>입장</button>
      <button onClick={handleLeave}>퇴장</button>
      <h2 style={{ color }} onClick={() => setColor('black')}>
        {message}
      </h2> */}
    </div>
  );
}

export default Say;
