const cronometro = document.querySelector('.cronometro');

let t = 0;
let idTimer;

function limparTimer(){
    cronometro.innerHTML = '';
}

function adicionaTimer(){
     const hora = incrementaTimer();
     cronometro.innerHTML = hora;
}

function incrementaTimer(){
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

function inciarCronometro() {
    
}

document.addEventListener('click',(event) => {
    const el = event.target;

    if(el.classList.contains('btn-iniciar')){
        idTimer = setInterval(incrementaTimer,1000);
    }

    if(el.classList.contains('btn-parar')){
        console.log('Parar!');
    }

    if(el.classList.contains('btn-zerar')){
        console.log('Zerar!');
    }
});