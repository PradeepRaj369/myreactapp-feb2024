import React, { useRef } from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  margin: 20px;
`;

const TodoItem = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;

const TodoButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

function Todo() {
  const Todolist = useRef();
  const Todolist1 = useRef();

  const handleTodo1 = () => {
    if (Todolist.current.style.textDecoration === "line-through") {
      Todolist.current.style.textDecoration = "none";
    } else {
      Todolist.current.style.textDecoration = "line-through";
    }
  };

  const handleTodo2 = () => {
    if (Todolist1.current.style.textDecoration === "line-through") {
      Todolist1.current.style.textDecoration = "none";
    } else {
      Todolist1.current.style.textDecoration = "line-through";
    }
  };

  return (
    <TodoContainer>
      <TodoItem ref={Todolist}>Listitem1</TodoItem>
      <TodoButton onClick={handleTodo1}>Todo1</TodoButton>
      <TodoItem ref={Todolist1}>Listitem2</TodoItem>
      <TodoButton onClick={handleTodo2}>Todo2</TodoButton>
    </TodoContainer>
  );
}

export default Todo;
