import React, { useState } from "react";
import Footer from "./footer.js";

export let items = [];
export const setItems = (newItems) => {
  items = newItems;
};

const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const itemCount = items.length;

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="text-center">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Thasadith" />
      </head>
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
          {items.map((item, index) => (
            <li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {item}
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
      <div className="center" id="pages">
        <div className="pageNext">_________________________________________________________________________________________________</div>
        <div className="pageLast">______________________________________________________________________________________________</div>
      </div>
    </div>
  );
};

export default List;
