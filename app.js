let numeroMax = 10;
let numeroSecreto = 0;
let intentos = 1

condicionesIniciales();

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.querySelector('#numeroUsuario').value);
       if (numeroDeUsuario === numeroSecreto){
        asignarTexto('p',`¡Felicitaciones! Acertaste en ${intentos} ${intentos == 1? "intento":"intentos"}`);
        deshabilitar ('#intento');
        habilitar ('#reiniciar');
        deshabilitar ('#numeroUsuario');
        //document.querySelector('#intento').setAttribute('disabled','true');
        //document.querySelector('#reiniciar').setAttribute('disables','false');
        } else{
            if (numeroDeUsuario > numeroSecreto){
                asignarTexto('p',"El número secreto es menor");
                intentos++;
                limpiar();
            } else{
                asignarTexto('p',"El número secreto es mayor");
                intentos++;
                limpiar();
            } 

        }
}


function condicionesIniciales(){
    asignarTexto('h1', "Juego del Número Secreto");
    asignarTexto('p', "Digite un Número");
    numeroSecreto = Math.floor(Math.random()*numeroMax) + 1;
    limpiar();
    habilitar('#intento');
    deshabilitar ('#reiniciar');
    habilitar ('#numeroUsuario');
    intentos = 1;
    console.log(numeroSecreto);
}

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function habilitar (elemento){
    document.querySelector(elemento).removeAttribute('disabled');
}

function deshabilitar (elemento){
    document.querySelector(elemento).setAttribute('disabled', 'true');
}

function limpiar (){
    document.querySelector('#numeroUsuario').value = '';
}