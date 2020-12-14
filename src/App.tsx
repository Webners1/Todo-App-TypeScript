import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Item } from "./TodolistItem";

const Firsttodos: Array<Todo> = [];
function App() {
  let [newTodo, setNewTodo] = useState("");
  let [todos, setTodos] = useState(Firsttodos);
  const Toggle: toggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSet = (newTodo: string) => {
    newTodo.trim() !== "" &&
      setTodos((todos = [...todos, { text: newTodo, complete: false }]));
    setNewTodo("");
  };
  const handleDel: deltodo = delTodo => {
    todos = todos.filter((item) => {
      return item !== delTodo;
    });
    setTodos(todos);
  };
  return (
    <div className='main'>
      <input style={{width:'300px',height:'40px',fontSize:'30px',border:'2px solid black',borderRadius:'10px'}} type="text" value={newTodo} onChange={handleChange} />
      <button className='add'style={{margin:'10px',width:'130px',fontSize:'30px',fontWeight:600,border:'none',backgroundColor:'grey'}}onClick={() => handleSet(newTodo)}>Add</button>
      {todos.map((list, i) => {
        return (
          <div>
            <Item key={i} todo={list} toggleTodo={Toggle} deltodo={handleDel} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
