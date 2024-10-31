import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todolist = () => {
  const [lista, setLista] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (lista.trim() !== "") {
      setTareas([...tareas, lista]);
      setLista(""); 
    }
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
    <>
      <div className="paper">
        <h1>Todos</h1>
        <ul>
          <li className="li-input">
            <input 
              type="text" 
              onChange={(e) => setLista(e.target.value)}
              value={lista}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  agregarTarea();
                }
              }}
              placeholder="Agregar tarea" 
            />
          </li>
          {tareas.length === 0 ? (
            <li>No hay tareas añadidas</li>
          ) : (
            tareas.map((item, index) => (
              <li key={index}>
                {item}
                <span onClick={() => eliminarTarea(index)}>
                  <FontAwesomeIcon  className="icon" icon={faTrash} />
                </span>
              </li>
            ))
          )}
        </ul>
        <div>{tareas.length} tareas</div>
      </div>
    </>
  );
};
