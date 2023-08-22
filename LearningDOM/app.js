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
const primerTopping=document.querySelector('.topping');
primerTopping.style.backgroundColor='blue';
primerTopping.style.color='#6dff00';
primerTopping.style.textTransform='uppercase';
// ACCEDIENDO AL TEXTO DEL HTML
const listaToppings= document.getElementById('lista-toppings');
console.log(listaToppings.innerText);
console.log(listaToppings.textContent);
console.log(listaToppings.innerHTML);
//CAMBIANDO TEXTO HTML
const titulo=document.getElementById('titulo');
titulo.innerText='Mis ingredientes Favoritos';
//MODIFICANDO ATRIBUTOS
const enlace=document.getElementsByTagName('a');//como retorna una colleccion hay que acceder con el indice
console.log(enlace[0].getAttribute('href'));
enlace[0].setAttribute('href', 'https://www.facebook.com');
enlace[0].removeAttribute('href');
//CLASES


