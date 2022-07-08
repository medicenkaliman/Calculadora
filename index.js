const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonNumero = document.querySelectorAll(".numero");
const botonOperador = document.querySelectorAll(".operador");

/*console.log(displayValorAnterior);
console.log(displayValorActual);
console.log(botonNumero);
console.log (botonOperador);
*/

// const calculadora = new Calculadora();
/*console.log (calculadora.sumar (2,3))
console.log (calculadora.restar (2,3))
console.log (calculadora.multiplicar (2,3))
console.log (calculadora.dividir (2,3))
*/

const display = new Display(displayValorAnterior, displayValorActual);


botonNumero.forEach(boton => {
    boton.addEventListener('click', ()=>{
        display.agregarNumero(boton.innerHTML)
    });
});

botonOperador.forEach (boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});