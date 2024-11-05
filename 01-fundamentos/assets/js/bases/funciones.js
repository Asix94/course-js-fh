
function saludar( nombre ) {
    // (console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2];

    // Esto nunca se va a ejecutar
    console.log('Soy un cóodigo que esta después del return');
}

const retornoDeSaludar = saludar('Carlos', 40, true, 'Costa Rica');
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

saludar2('Carlos');

saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha('Carlos');

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b
}

const sumar3 = (a,b) => a + b

console.log(sumar(1,2));
console.log(sumar2(1,2));
console.log(sumar3(1,2));

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => {
    return Math.random();
}

const getAleatorio3 = () => Math.random();


console.log(getAleatorio());
console.log(getAleatorio2());
console.log(getAleatorio3());