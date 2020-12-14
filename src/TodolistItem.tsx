import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import './Todo.css'
interface TodoProps{
    todo:Todo
    toggleTodo:toggleTodo
    deltodo: deltodo
    
}
export const Item :React.FC<TodoProps>=({todo,toggleTodo,deltodo})=>{
    let{text,complete} = todo
return (
  <div className={complete?'unbox':'box'}>
    <label style={{display:'flex',flexDirection:'row'}}className={complete ? "complete" : undefined}>
      <input
        type="checkbox"
        style={{ opacity: 0 }}
        checked={complete}
        onChange={() => toggleTodo(todo)}
      />

     <p style={{marginBottom:'7px',marginTop:'23px',fontSize:'35px',fontFamily:'serif',fontWeight:600}}>
          {text}
         </p>

     
        <FontAwesomeIcon className={complete?'untrash':'trash'} icon={faTrash} onClick={() => deltodo(todo)} />
      
    </label>
  </div>
);
}