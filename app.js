let numeroSecreto = 0;
let numIntentos = 0;
let numSorteados = [];
let numMax = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto; 
   return;
}
function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(typeof(numUsuario)); //sirve para verificar en consola el tipo de dato
        console.log(numeroSecreto); //sirve para verificar en consola el # secreto
        console.log(numUsuario); //sirve para verificar en consola el # usuario
        console.log(numUsuario === numeroSecreto); //sirve para verificar en consola si la comparación es verdadera o falsa (en valor y tipo de dato)
    if (numUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste en ${numIntentos} ${(numIntentos === 1) ? 'intento!': 'intentos!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es mas pequeño');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mas grande');
        }
        numIntentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function generarNumSecreto() {
    numGenerado = Math.floor(Math.random()*numMax)+1; 
    //Si ya sorteamos todos los numeros, cerramos juego
    if (numSorteados.length == numMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles'); //mensaje pantalla
    } else {
        //Si el numero generado esta en la lista 
        if (numSorteados.includes(numGenerado)) {
            return generarNumSecreto();
        } else {
            numSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Índica un número del 1 al ${numMax}`);
    numeroSecreto = generarNumSecreto(); //generar numero aleatorio
    numIntentos = 1; //reiniciar numero de intentos
}
function reiniciarJuego() {
    limpiarCaja(); //limpiar caja
    condicionesIniciales(); //indicar mensaje inicial y restaurar condiciones iniciales
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //deshabilitar boton nuevo juego
    
}
condicionesIniciales();

