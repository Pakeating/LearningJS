const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');


let[hora, minutos, segundos]=[0,0,0];
let intervaloTiempo;
let estadoCronometo = 'pausado';

function actualizarCronometro(){
    segundos++
    if(segundos/60===1){
        segundos = 0;
        minutos++;
    
        if(minutos/60===1){
            minutos = 0;
            horas++;
        }
    }
const segundosConFormato = asignarFormato(segundos);
const minutosConFormato = asignarFormato(minutos);
const horasConFormato = asignarFormato(horas);

cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(tiempo){
    return tiempo<10?'0'+tiempo:tiempo;
}

botonInicioPausa.addEventListener('click',function(){
    if(estadoCronometo === 'pausado'){
        intervaloTiempo = window.setInterval(actualizarCronometro,1000);
        //son 1000ms, por lo que se llamara cada segundo
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-btn-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        estadoCronometro = 'funcionando';
    } else{
        window.clearInterval(intervaloTiempo);
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estadoCronometo('pausado');
    }


})