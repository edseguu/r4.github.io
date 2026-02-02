let pantalla = document.getElementById('pantalla');
let numero1 = '';
let numero2 = '';
let operador = '';
let nuevoNumero = true;

function mostrarNumero(num) {
    if (nuevoNumero) {
        pantalla.textContent = num;
        nuevoNumero = false;
    } else {
        pantalla.textContent += num;
    }
    
    if (operador === '') {
        numero1 = pantalla.textContent;
    } else {
        numero2 = pantalla.textContent;
    }
}

function seleccionarOperacion(op) {
    operador = op;
    nuevoNumero = true;
}

function calcularResultado() {
    let resultado = 0;
    let n1 = parseFloat(numero1);
    let n2 = parseFloat(numero2);
    
    if (operador === '+') {
        resultado = n1 + n2;
    } else if (operador === '-') {
        resultado = n1 - n2;
    } else if (operador === '*') {
        resultado = n1 * n2;
    } else if (operador === '/') {
        resultado = n2 !== 0 ? n1 / n2 : 0;
    }
    
    pantalla.textContent = resultado;
    numero1 = resultado.toString();
    numero2 = '';
    operador = '';
    nuevoNumero = true;
}

function limpiarTodo() {
    pantalla.textContent = '0';
    numero1 = '';
    numero2 = '';
    operador = '';
    nuevoNumero = true;
}

window.onload = function() {

    document.querySelectorAll('.boton-numero').forEach(btn => {
        btn.onclick = () => mostrarNumero(btn.textContent);
    });

    document.querySelectorAll('.boton-operador').forEach(btn => {
        btn.onclick = () => seleccionarOperacion(btn.textContent);
    });

    document.querySelector('.boton-resultado').onclick = calcularResultado;
    
    document.querySelector('.boton-limpiar').onclick = limpiarTodo;
};
