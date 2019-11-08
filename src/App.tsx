import React, { useState } from 'react';
import './App.css';
import Say from './Say';
import Counter from './Counter';
import ScrollBox from './ScrollBox';
import List from './List';
import Info from './Info';
import Average from './Average';

// function App() {
//   return <Counter />;
// }

function App() {
  // scrollBox: ScrollBox | null = null;

  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <ScrollBox ref={ref => (this.scrollBox = ref)} />
      <button onClick={() => (this.scrollBox as ScrollBox).scrollToBottom()}>
        맨 밑으로
      </button> */}
      {/* <List /> */}
      {/* <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />} */}
      {/* <Counter /> */}
      <Info />
      {/* <Average /> */}
    </div>
  );
}

export default App;
