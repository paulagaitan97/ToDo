
import { ToDo } from "../class";
import { toDoList, ToDoList } from "../index";
// Referencias en el HTML

const divToDoList     = document.querySelector('.todo-list');
const txtInput        = document.querySelector('.new-todo');
const btnBorrar       = document.querySelector('.clear-completed');
const ulFiltros       = document.querySelector('.filters');
const anchorFiltros   = document.querySelectorAll('.filtro');

export const crearToDoHTML = ( toDo ) => {

    const htmlToDo = `
    <li class="${ ( toDo.status ) ? 'completed' : '' } " data-id="${toDo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${ ( toDo.status ) ? 'checked' : '' }>
			<label>${ toDo.tarea }</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li> `;

    const divNuevaToDo = document.createElement('div');
    divNuevaToDo.innerHTML = htmlToDo;

    divToDoList.append ( divNuevaToDo.firstElementChild );

    return divNuevaToDo.firstElementChild;
}


// Eventos 

txtInput.addEventListener('keyup', ( event ) => {
        if ( event.keyCode === 13 && txtInput.value.length > 0 ){
            const nuevoToDo = new ToDo ( txtInput.value );
            toDoList.nuevoToDo ( nuevoToDo );
            crearToDoHTML ( nuevoToDo );
            txtInput.value = '';
        }
});

divToDoList.addEventListener('click', (event) => {
    const nombreElemento    = event.target.localName; // Elemento clickeado => input, label, button
    const toDoElemento      = event.target.parentElement.parentElement;
    const toDoId            = toDoElemento.getAttribute('data-id');

    if ( nombreElemento.includes('input') ) // Click en el check
    {
        toDoList.marcarCompletado ( toDoId );
        toDoElemento.classList.toggle( 'completed' );
    }else if ( nombreElemento.includes('button') ) {
        toDoList.eliminarToDo( toDoId );
        divToDoList.removeChild ( toDoElemento );
    }
});

btnBorrar.addEventListener('click', () => {
    toDoList.eliminarCompletados();

    for ( let i = divToDoList.children.length - 1; i >= 0; i-- ){
        const elemento = divToDoList.children[i];

        if ( elemento.classList.contains('completed') ) {
            divToDoList.removeChild( elemento );
        }
    }
});

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;

    if( !filtro ){ return ;}
    anchorFiltros.forEach ( elem => elem.classList.remove('selected') );

    event.target.classList.add ('selected');

    for ( const elemento of divToDoList.children ){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch ( filtro ) {
            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }

});