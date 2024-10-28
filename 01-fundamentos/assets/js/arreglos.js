

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Carlos',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [ 'Dr. Willy', 'Woodman']]
];

console.log(arregloCosas);

console.log(arregloCosas[0]); // true

console.log(arregloCosas[2]); // Carlos

console.log(arregloCosas[7][3]); // Dr. Light

console.log(arregloCosas[7][4][1]); // Dr. Woodman