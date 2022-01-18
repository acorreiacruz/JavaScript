const cronometro = document.querySelector('.cronometro');
cronometro.innerHTML = '00:00:00'

let t = 0;
let idTimer;

function estiloNormal() {
    cronometro.classList.remove('timer-parado');
}

function estiloParado(){
    cronometro.classList.add('timer-parado');
}

function limparTimer(){
    cronometro.innerHTML = '';
}

function adicionarTimer(){
     const hora = incrementarTimer();
     cronometro.innerHTML = hora;
}

function incrementarTimer(){
    const hora = timer(t);
    t += 1000;
    return hora; 
}

function timer(t) {
    const i = 3600 * 3 * 1000;
    const data = new Date(i + t);
    return data.toLocaleString("pt-BR",{
        hour12: false,
        hourCycle: "h24",
        timeStyle: "medium",
    });

}

function inciarTimer() {
    estiloNormal();
    idTimer = setInterval(adicionarTimer,1000);
}

function pararTimer(){
    estiloParado();
    clearInterval(idTimer);
}
function zerarTimer(){
    estiloNormal();
    clearInterval(idTimer);
    cronometro.innerHTML = '00:00:00';
    t = 0;
}

document.addEventListener('click',(event) => {
    const el = event.target;

    if(el.classList.contains('btn-iniciar')){
        inciarTimer();
    }

    if(el.classList.contains('btn-parar')){
        pararTimer();
    }

    if(el.classList.contains('btn-zerar')){
        zerarTimer();
    }
});