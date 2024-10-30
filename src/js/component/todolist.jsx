import React, { useState } from "react";

export const Todolist = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (inputValue.trim() !== "") {
      setTareas([...tareas, inputValue]);
      setInputValue(""); 
    }
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
    <>
      <div className="container">
        <h1>Todos</h1>
        <ul>
          <li className="li-input">
            <input 
              type="text" 
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  agregarTarea();
                }
              }}
              placeholder="Agregar tarea" 
            />
            
            </li>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea}
            <span>
              <i 
                className="icon fa-solid fa-trash" 
                onClick={() => eliminarTarea(index)}
              ></i>
            </span>
              
            </li>
          ))}
        </ul>
        <div>{tareas.length} tareas</div>
      </div>
    </>
  );
};
