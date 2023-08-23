/*
SELECCIONANDO ELEMENTOS DE DISTINTAS FORMAS
const contenedor=document.getElementById('contenedor');//retorna un objeto
console.log(contenedor);

const toppings=document.getElementsByClassName('topping');//retorna una collection
console.log(toppings[3]);

const toppingsLista=document.getElementsByTagName('li');
console.log(toppingsLista);

const toppingsFondoMarron=document.getElementsByClassName('fondo-marron');
console.log(toppingsFondoMarron);

const aceituna=document.querySelector('#aceitunas');
console.log(aceituna);
const primerToppingNaranja=document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);
const otroToppingNaranja=document.querySelector('ul li.fondo-naranja');
console.log(otroToppingNaranja);
const primerNoMarron=document.querySelector('ul li:not(.fondo-marron)');
console.log(primerNoMarron);

const toppingsNaranja=document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja); // Retorna una Lista de Nodos
console.log(toppingsNaranja[1]);
*/
//CAMBIANDO ESTILOS DESDE JS
/*
const primerTopping=document.querySelector('.topping');
primerTopping.style.backgroundColor='blue';
primerTopping.style.color='#6dff00';
primerTopping.style.textTransform='uppercase';
*/
// ACCEDIENDO AL TEXTO DEL HTML
/*
const listaToppings= document.getElementById('lista-toppings');
console.log(listaToppings.innerText);
console.log(listaToppings.textContent);
console.log(listaToppings.innerHTML);
*/
//CAMBIANDO TEXTO HTML
/*
const titulo=document.getElementById('titulo');
titulo.innerText='Mis ingredientes Favoritos';
*/
//MODIFICANDO ATRIBUTOS
/*
const enlace=document.getElementsByTagName('a');//como retorna una colleccion hay que acceder con el indice
console.log(enlace[0].getAttribute('href'));
enlace[0].setAttribute('href', 'https://www.facebook.com');
enlace[0].removeAttribute('href');
*/
//CLASES
/*
const topping=document.querySelector('.topping');
console.log(topping.classList);
topping.classList.add('mi-clase');//en caso de que en el css este definida esta clase, se aplicaria el estilo
console.log(topping.classList);
console.log(topping.classList.contains('fondo-azul')); //retorna un booleano
topping.classList.remove('mi-clase');
*/
/*
//ELEMENTOS

const listaToppings=document.getElementById('lista-toppings');
const toppingNuevo=document.createElement('li');//creamos el elemento
toppingNuevo.classList.add('topping', 'fondo-marron');//le asignamos las clases que le tocan
toppingNuevo.innerText='Extra de Queso';
listaToppings.append(toppingNuevo);//Situamos el elemento en su lugar correspondiente
//tambien existe appendChild()
toppingNuevo.remove(); //elimina el elemento

//RECORRER DOM A TRAVES DE ELEMENTOS
console.log(listaToppings.parentElement);
console.log(listaToppings.parentElement.parentElement);
console.log(listaToppings.children);
console.log(listaToppings.children[0]);
console.log(listaToppings.firstChild);//como retorna un nodo, es texto
console.log(listaToppings.firstElementChild);//equivale a children[0]
console.log(listaToppings.lastElementChild);
console.log(listaToppings.previousElementSibling);//el elemento hermano inmediatamente anterior
console.log(listaToppings.nextElementSibling);//el elemento hermano inmediatamente posterior
*/
//EVENTOS

function mostrarClic(e){ //evento directamente desde html para algo sencillo
    console.log(e.target.innerText);
}
const toppings=document.getElementsByClassName('topping');
for(const topping of toppings){
    topping.addEventListener('click',mostrarClic);
}
// con funciones pequennas podria hacerse tambien mediante una lambda: 
/*
for(const topping of toppings){
    topping.addEventListener('click',(e)=>console.log(e.target.innerText))
}
*/



