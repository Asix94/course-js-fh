
function saludar( nombre ) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}

saludar('Carlos', 40, true, 'Costa Rica');

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

saludar2('Carlos');

saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha('Carlos')