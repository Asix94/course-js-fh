### Sección 2: Introducción a Javascript y la consola

#### Hola Mundo

- Mostrar por consola un dato
``` 
console.log('Hola Mundo')
``` 

- Estructura basica de un HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

- Como pondremos un script en HTML

```
<body>
    <script>
        console.log('Hola Mundo')
    </script>
</body>
```

- Linkar un js en HTML

```
<body>
    <script src="app.js"></script>
</body>
```

#### Introducción a variables y comentarios

- Para comentar en una linea en js 

```
// console.log('Hola Mundo')
```

- Variables

    - var: VARIABLE  
    - let: VARIABLE 
    - const: COSTANTE valor de memoria pero no se podra modificar

```
let a = 10;
var b = 10; // las variables les pertenecen a window, eso puede hacer que sobrescriba variables q se encuentren en el objeto window
const c = 10;

c = 20; // no se puede ERROR
a = 20;
b = 30
```

- Polifill

Es un código que provee el funcionamento de una nueva característica de Javascript (ES6), en versiones viejas como ES5

- Definir muchas variables en muchas lineas 

```
let a = 10, b = 20, c = 10, d = 10, x = a + b;

let a = 10, 
    b = 20, 
    c = 10, 
    d = 10, 
    x = a + b;
```

#### Introducción a la consola

- Tipos de logs

```
console.log(x); // simplemente para loggear algo
console.warn(x); // para mostrar un warning por consola 
console.error(x); // para mostrar un error por consola
```

- Si queremos imprimir por consola llave -> valor

```
console.log({a});
```

- Si queremos añadir css en un console.log

```
console.log('%c Mis variables', 'color:blue; font-weight:bold');
```

- Si queremos mostrar una tabla por consola con todos los datos

```
console.table({a, b, c, d, x});
```

- concatenar strings

```
let c = 'hola ', 
    d = 'Spiderman', 

const SALUDO = c + d;
```

#### Prompt, confirm y alert

- alert muestra una alarma en web

```
alert('Hola Mundo');
```

- prompt muestra una alarma con una mensaje y una posible respuesta devuelve un string que el usuario responde
puede devolver un (string, string vacio, null) 

```
prompt('Cual es tu nombre?', 'Sin nombre');
```

- confirm, muestra una opcion de aceptar o cancelar a un usuario para aceptar algo
puede devolver un (true,false);

```
confirm('Esta seguro de borrar esto?');
```

### Sección 3: Fundamentos de Javascript. primitivos, arreglos, objetos y funciones basicas

- Tipos de primitivos

```
Boolean - true o false:: Verdadero o Falso
Null - Sin valor en lo absoluto
Undefined - Una variable declarada que aún no se le asignan valor
Number - integers, floats, etc
String - Una cadena de caracteres, ej: Palabras, nombre de personas
Symbol - Es un único valor que no es igual a ningún otro valor
```

- String 

```
let nombre = 'Peter Parker';
```

- Number 

```
let nombre = '123';
```

- Boolean

```
let esMarvel = true;
```

- Undefined

```
let superPoder
```

- Null
```
let soyNull = null
```

- Symbol
```
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
```

- Para saber el tipo de una variable usaremos typeof

```
nombre = `Tía May`;

console.log(typeof nombre);
```

- arrays

```
const arr = new Array(10); // array con 10 elementos 
console.log(arr);

const arr = []; // array vacio
console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger']; // array con 3 elementos
console.log({videoJuegos});

console.log(videoJuegos[0]); // para hacer referencia a la primera posicion
```

- Tamaño del array 

```
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);
```

- Foreach (bucle para recorrer un array)

```
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
})
```

- Añadir un elemento al final de un array

```
juegos.push( 'F-Zero' );
console.log(juegos);
```

- Añadir un elemento al principio de un array

```
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});
```

- Eliminar el ultimo elemento de un array

```
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})
```

- Eliminar de un array por posicion

```
let pos = 1;
console.log(juegos)
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos})
```

- Buscar un elemento dentro del array

```
let metroidIndex = juegos.indexOf('Metroid'); // Case Sensitive
console.log(metroidIndex);
```

- objeto

```
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: { 
        lat: 34.034,
        lng: -188.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

console.log(personaje)
console.log('Nombre', personaje.nombre);
```

- eliminar un campo de un objeto

```
delete personaje.edad;
console.log(personaje);
```

- convertir de objeto a array

```
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
```

- añadir un campo nuevo en un objeto

```
personaje.casado = true;
```

- bloquear el objeto para no poder manipularlo solo congela el objeto principal

```
Object.freeze(personaje);
personaje.dinero = 10000000000000;
console.log(personaje); // No aparece

personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje); // Si que modifica
```

- obtener todas las propiedades de un objeto en formato array

```
const propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades);
```

- obtener todos los valores de un objeto en formato array

```
const valores = Object.values(personaje)
console.log(valores);
```

- funcion pasando un argumento

```
function saludar( nombre ) {
    console.log('Hola ' + nombre);
}

saludar('Carlos');
```

- funcion anonima con argumeto
```
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

saludar2('Carlos');
```

- funcion de flecha con argumento

```
saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha('Carlos')
```

- funcion de flecha abreviada 

```
const sumar2 = (a,b) => a + b
```

- en un objeto si el nombre de la propiedad y el nombre del valor es igual no hace falta hacer propiedad:valor solo con poner la propiedad es suficiente

```
persona: {
    nombre: nombre,
    apellido: apellido
}

persona: {
    nombre,
    apellido
}
```

- para la funcion de flecha imprimir arguments

```
const imprimeArgumentos2 = (...args) => {
    console.log(args)
}
```

- destructurar argumentos

```
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Carlos', 'Hola');
console.log({ casado, vivo, nombre, saludo })

const { apellido: nuevoApellido } = crearPersona('Carlos', 'Ramos');
console.log({nuevoApellido});
```

- if 

```
if ( ) {

}
```

- else 

```
if ( ) {

} else {

}
```


- if else 

```
if ( ) {

} else if ( ) {

} else {
    
}
```

- = asignación

```
dia = 1; // 1
```

- == comparación (valor)

```
dia: 1 - dia: '1';
dia '1' - dia 1;
dia == 1

seria true
```

- === comparacíon (valor, tipo)

```
dia: 1 - dia: 1
dia: '1' - dia: '1'
dia: 1 - dia: '1'
dia '1' - dia: 1

solo las 2 primeras seria true
```

- negación 

```
console.warn('Not o la negación');
console.log(true); // true
console.log(!true) // false
console.log(!false) // true
```

- and 

```
console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
```

- or

```
console.warn('or'); // true

console.log(true || false); // true
console.log(false || false ); // false

console.log(regresaTrue() || regresaFalse()); // true
console.log(regresaFalse() || regresaTrue()); // true
```