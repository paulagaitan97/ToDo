export class ToDo {


    static fromJson ( {id, tarea, status, fechaCreacion } ) {
        const tempToDo = new ToDo ( tarea );

        tempToDo.id = id;
        tempToDo.status = status;
        tempToDo.fechaCreacion = fechaCreacion;

        return tempToDo;
    }
    
    constructor ( tarea ) {
        this.id            = new Date().getTime();
        this.tarea         = tarea;
        this.status        = false;
        this.fechaCreacion = new Date();
    }

}