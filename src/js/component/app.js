import React, { useEffect, useState } from "react";
import List, { items, setItems } from "./list.js";

const App = () => {

  const [userExists, setUserExists] = useState(false);
  const [previousItems, setPreviousItems] = useState(items);

  useEffect(() => {
    handleTodo()
    setItems(handleTodo)
    setPreviousItems(handleTodo)
  }, [])

  useEffect(() => {
    handlePut(items)
  }, [items])

  console.log(previousItems);
  console.log(items);

  const handleTodo = () => {
    const handlePost = () => {
      const requestBody = items.length > 0 ? JSON.stringify(items) : JSON.stringify([]);
    
      fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr", {
        method: "POST",
        body: requestBody,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setUserExists(true);
          } else {
            setUserExists(false);
            throw new Error("Failed to create user");
          }
          console.log(response.ok);
          console.log(response.status);
          return response.text();
        })
        .then((text) => {
          console.log(text);
          try {
            const data = JSON.parse(text);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleGet = () => {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr")
        .then((response) => {
          console.log(response.ok);
          console.log(response.status);
          return response.json(items);
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    handlePost();
    handleGet();
  }
  
  const handlePut = () => {
    const requestBody = items.length > 0 ? JSON.stringify(items) : JSON.stringify([]);
  
    fetch("https://assets.breatheco.de/apis/fake/todos/user/kaybahr", {
      method: "PUT",
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);
        return response.text();
      })
      .then((text) => {
        console.log(text);
        try {
          const data = JSON.parse(text);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
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
        if (response.ok) {
          setItems([]);
        } else {
          throw new Error("Failed to delete tasks");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };  

  return (
    <div>
      <div className="text-center">
        <List />
        <button onClick={handleDelete} className="delete-all">
          Clean all tasks
        </button>
      </div>
    </div>
  );
};

export default App;
