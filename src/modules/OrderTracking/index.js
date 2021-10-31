import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WitchersInput from '../../components/WitchersInput';

export const apiPlaceholderUrl = 'https://jsonplaceholder.typicode.com';

const OrderTrackingView = () => {
  const [counter, _] = useState(0);
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const response = await axios.get(apiPlaceholderUrl + '/todos');
    setTodos(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="mein-class">{counter}</h1>
      <WitchersInput />
      {todos && todos.map(todo => <p key={todo.id}>{todo.title}</p>)}
    </>
  );
};

export default OrderTrackingView;
