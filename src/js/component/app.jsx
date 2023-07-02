import React, { useEffect } from "react";
import List, { todos, setTodos } from "./list.jsx";

const App = () => {

  const handleGet = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr")
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

  useEffect(() => {
    handleGet();
  }, [])

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

  const handleDelete = () => {
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
      <div className="text-center">
        <List/>
        <button onClick={handleDelete} className="delete-all">Clean all tasks</button>
      </div>
    </div>
  );
};

export default App;
