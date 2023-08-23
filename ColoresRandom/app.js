const boton= document.querySelector('button');
const color= document.getElementById('color');

function generaColor(){
    let digitos='0123456789abcdef';
    let colorHex='#';
    for(let i=0; i<6; i++){
        let index=Math.floor(Math.random()*16);
        colorHex+=digitos[index];
    }
    return colorHex;
}

boton.addEventListener('click',function(){
let colorAleatorio=generaColor();
color.textContent= colorAleatorio;
document.body.style.backgroundColor=colorAleatorio;

});