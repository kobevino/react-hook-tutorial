// import React, { Component } from 'react';
// import './Counter.css';

// interface State {
//   number: number;
//   fixedNumber: number;
//   message: string;
//   username: string;
//   password: string;
//   clicked: boolean;
//   validated: boolean;
// }

// class Counter extends Component<{}, State> {
//   input: HTMLInputElement | null = null;

//   state = {
//     number: 0,
//     fixedNumber: 0,
//     message: '',
//     username: '',
//     password: '',
//     clicked: false,
//     validated: false
//   };

//   handleIncrease = (prevState: State) => {
//     return {
//       number: prevState.number + 1
//     };
//   };

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value } as Pick<
//       State,
//       'message' | 'message' | 'password'
//     >);
//   };

//   handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       this.handleReset();
//     }
//   };

//   handleReset = () => {
//     this.setState({ message: '', username: '' });
//   };

//   handleButtonClick = () => {
//     this.setState({
//       clicked: true,
//       validated: this.state.password === '0000'
//     });

//     this.input && this.input.focus();
//   };

//   render() {
//     const { number, fixedNumber, message, username } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>{fixedNumber}</h2>
//         <button
//           onClick={() => {
//             this.setState(this.handleIncrease, () => {
//               console.log('test');
//             });
//           }}
//         >
//           +1
//         </button>
//         <br />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요."
//           value={message}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자 이름을 입력해조세요."
//           value={username}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button type="button" onClick={this.handleReset}>
//           버튼
//         </button>
//         <br />
//         <input
//           type="password"
//           name="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           className={
//             this.state.clicked
//               ? this.state.validated
//                 ? 'success'
//                 : 'failure'
//               : ''
//           }
//           ref={ref => (this.input = ref)}
//         />
//         <button type="button" onClick={this.handleButtonClick}>
//           검증하기
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

interface State {
  value: number;
}

function reducer(state: State, action: Action) {
  switch(action.type) {
    case 'INCREASE':
      return {
        value: state.value + 1
      }
    case 'DECREASE':
      return {
        value: state.value - 1
      }
    default:
      return state;
  }
}

function Counter() {

  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h2>{ state.value }</h2>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
    </div>
  )
}

export default Counter;