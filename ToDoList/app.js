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

        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-square-fill','icono-completar');

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill','icono-eliminar');
        
        iconos.append(completar, eliminar);
        listaTareas.appendChild(tareaNueva);

    }else{
        alert('Debe ingresar una tarea');
    }
}

boton.addEventListener('click',agregarTarea);


