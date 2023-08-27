const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');


let[hora, minutos, segundos]=[0,0,0];
let intervaloTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro(){
    segundos++
    if(segundos/60===1){
        segundos = 0;
        minutos++;
    
        if(minutos/60===1){
            minutos = 0;
            hora++;
        }
    }
const segundosConFormato = asignarFormato(segundos);
const minutosConFormato = asignarFormato(minutos);
const horasConFormato = asignarFormato(hora);

cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(tiempo){
    return tiempo<10?'0'+tiempo:tiempo;
}

botonInicioPausa.addEventListener('click',function(){
    if(estadoCronometro === 'pausado'){
        intervaloTiempo = window.setInterval(actualizarCronometro,1000);
        //son 1000ms, por lo que se llamara cada segundo
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-btn-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estadoCronometro = 'funcionando';
    } else{
        window.clearInterval(intervaloTiempo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill">';
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estadoCronometro = 'pausado';
    }


})