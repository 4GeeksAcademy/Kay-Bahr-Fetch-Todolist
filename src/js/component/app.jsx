import React, { useState, useEffect } from "react";

import TodoList from "./todolist.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data type:", typeof data);
        setTodos(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePost = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr", {
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);
        console.log(response.text());
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePut = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr", {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);
        console.log(response.text());
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteAll = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);
        console.log(response.text());
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTodos([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <TodoList todos={todos} />
      <button onClick={handleDeleteAll}>Clean all tasks</button>
    </div>
  );
};

export default App;
