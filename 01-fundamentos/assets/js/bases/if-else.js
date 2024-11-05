
let a = 5;

if ( a >= 10 ) { // undefine, nul, una asignacióm
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10')
}

console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado

console.log(dia)

if( dia === 0) {
    console.log('Domingo');
} else if (dia === 1){
    console.log('Lunes');
} else if(dia === 2){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo');
}

// Sin usar If Else, o Switch, únicamente objeto
dia = 6; // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado
const diasLetras1 = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}
const diasLetras2 = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
// dia de la semana
console.log(diasLetras2[dia] || 'Día no definido');