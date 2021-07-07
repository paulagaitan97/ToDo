import { ToDo } from './todo.class';

export class ToDoList {
    constructor(){
        this.ToDoList = [];
        this.cargarLocalStorage();
    }

    nuevoToDo ( toDo ){
        this.ToDoList.push ( toDo );
        this.guardarLocalStorage();
    }

    eliminarToDo ( id ) {
        this.ToDoList = this.ToDoList.filter ( toDo => toDo.id != id );
        this.guardarLocalStorage();

    }

    marcarCompletado ( id ) {

        for ( const toDo of this.ToDoList ) {
            console.log ( id, toDo.id );
            if ( toDo.id == id ) {
                toDo.status = !toDo.status;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados () {
        this.ToDoList = this.ToDoList.filter ( toDo => !toDo.status );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('toDoList', JSON.stringify( this.ToDoList ) );

    }

    cargarLocalStorage(){

        this.ToDoList = ( localStorage.getItem('toDoList') ) 
                            ? JSON.parse ( localStorage.getItem('toDoList') ) 
                            :  [];
        this.ToDoList = this.ToDoList.map( obj => ToDo.fromJson ( obj ) );
    }
}