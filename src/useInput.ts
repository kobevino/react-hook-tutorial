import { useReducer } from 'react';

type Action = { 
  type: 'CHANGE_TEXT'; 
  name: string; 
  value: string; 
};

interface State {
  name: string;
  nickname: string;
}

function reducer(state: State, action: Action) {
  switch(action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        [action.name]: action.value
      }
  }
}

export default function useInput(initilalForm: State) {
  const [ state, dispatch ] = useReducer(reducer, initilalForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_TEXT', name, value });
  };

  return { state, onChange };
}