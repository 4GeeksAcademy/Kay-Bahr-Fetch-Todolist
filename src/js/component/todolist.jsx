import React from "react";

function TodoList(props) {
  const todos = props.todos;

  const items = [];
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    items.push(<li key={todo.id}>{todo.title}</li>);
  }

  return <ul>{items}</ul>;
}

export default TodoList;
