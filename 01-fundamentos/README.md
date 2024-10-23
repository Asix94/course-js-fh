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