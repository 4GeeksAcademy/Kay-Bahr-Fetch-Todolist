import React, { useState, useEffect } from "react";
import Footer from "./footer.jsx";

const List = ({ todos, onAddTask, onDeleteTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    setInputValue(""); // Clear input value on component load
  }, []);

  if (!Array.isArray(todos)) {
    todos = []; // Set todos to an empty array if it's not an array
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  const itemCount = todos.length;

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleRemove = (index) => {
    onDeleteTask(index);
  };

  return (
    <div className="text-center">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Thasadith" />
      <h1 className="text-center mt-5">todos</h1>
      <div className="toDoList">
        <input
          type="text"
          placeholder="What needs to be done?"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        <ul className="list">
          {todos.map((todo, index) => (
            <li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {todo.label}
              {hoveredIndex === index && (
                <button className="closer" onClick={() => handleRemove(index)}>
                  x
                </button>
              )}
            </li>
          ))}
        </ul>
        <Footer itemCount={itemCount} />
      </div>
      <div className="center">
        <div className="pageNext">_________________________________________________</div>
        <div className="pageLast">_________________________________________________</div>
      </div>
    </div>
  );
};

export default List;
