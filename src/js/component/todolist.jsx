import React from "react";

 export const Todolist = ()=>{
    return(
    <>
      <div className="container">
         <h1>Todos</h1>
         <ul>
           <li className="li-input"><input type="text" placeholder="Agregar tarea" /></li>
           <li>hacer de comer<i class="fa-solid fa-trash"></i></li>
           <li>ir a caminar<i class="fa-solid fa-trash"></i> </li>
           <li>Estudiar<i class="fa-solid fa-trash"></i></li>
           <li>Trabajar<i class="fa-solid fa-trash"></i></li>
         </ul>
         <div>23 tareas</div>


      </div>
   
    </>

    )
   
}

