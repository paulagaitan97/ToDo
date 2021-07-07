import './styles.css';

import { ToDo, ToDoList } from './class';
import { crearToDoHTML } from './js/componentes';

export const toDoList = new ToDoList ();

// Cargar Lista de toDos en la interfaz almacenados en el localstorage 
toDoList.ToDoList.forEach(toDo => crearToDoHTML ( toDo ));

// const nuevaTarea = new ToDo('Aprender JavaScript');
// toDoList.nuevoToDo( nuevaTarea );

// console.log( toDoList );

// crearToDoHTML ( nuevaTarea );