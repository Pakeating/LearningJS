const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaTareas = document.getElementById('lista-tareas');

function agregarTarea(){
    if(input.value){//si no es null, sera true
        //creamos la tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText=input.value;
        tareaNueva.appendChild(texto);
        
        //se crea y agrega el contenedor de iconos
        let iconos=document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
        //se crean los iconos y se le da un eventlistener
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-square-fill','icono-completar');
        completar.addEventListener('click', completarTarea)

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill','icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea);
        //se anaden los iconos a la jerarquia y la tarea al DOM
        iconos.append(completar, eliminar);
        listaTareas.appendChild(tareaNueva);
        //limpiamos el input
        input.value='';


    }else{
        alert('Debe ingresar una tarea');
    }
}

function completarTarea(e){
    let tarea=e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');//si tiene la clase completada, la quita, si no, la anade
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click',agregarTarea);
input.addEventListener('keydown',(e)=>{
    if( e.key==='Enter'){
        agregarTarea();
    }
})

