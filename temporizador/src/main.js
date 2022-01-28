import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

const timer = document.querySelector('.timer');
const inputHoras = document.querySelector('#input-horas');
const inputMinutos = document.querySelector('#input-minutos');
const inputSegundos = document.querySelector('#input-segundos');


let t = 0;
let idTimer;

function pararTimer(){
    timer.classList.add('timer-parado');
    clearInterval(idTimer);
}

function adicionaHora(){
    timer.innerHTML = incrementaHora();
}

function incrementaHora(){
    const hora = getHour(t);
    t -= 1000;
    return hora;
}

function getHour(t) {

    const hora = Number(inputHoras.value) * 3600 * 1000;
    const minuto =  Number(inputMinutos.value) * 60 * 1000;
    const segundo = Number(inputSegundos.value) * 1000;

    const tempo = new Date(hora + minuto + segundo + t);

    return tempo.toLocaleString('pt-BR',{
        hour12:false,
        hourCycle:"h24",
        timeStyle: "medium"
    });
}


function iniciarTimer(){
    timer.classList.remove('timer-parado');
    idTimer = setInterval(adicionaHora,1000);
}

document.addEventListener('click',(event) => {
    const el = event.target;

    if(el.classList.contains('btn-iniciar')){
        iniciarTimer();
    }

    if(el.classList.contains('btn-parar')){
        pararTimer();
    }

    if(el.classList.contains('btn-zerar')){
        zerarTimer();
    }

});