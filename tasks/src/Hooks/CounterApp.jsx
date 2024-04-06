import React, { useState } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: blue;
`;

const CounterBox = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  border: 2px solid skyblue;
  border-radius: 20px;
  width: 200px;
  margin: 20px;
  background-color: skyblue;
`;

const CountButtons = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => (props.red ? 'red' : 'green')};
  border: none;
  cursor: pointer;
`;

const LABEL = styled.label`
  width: 10px;
  font-weight: bold;
  margin: 5px;
`;

const CounterApp = ({ inc, CountAll }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + inc);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - inc);
    }
  };

  return (
    <>
      <CounterBox>
        <CountButtons red onClick={decrement}>
          -{inc}
        </CountButtons>
        <LABEL>{count}</LABEL>
        <CountButtons onClick={increment}>+{inc}</CountButtons>
      </CounterBox>
    </>
  );
};

export default CounterApp;
